import {
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { auth } from "./firebase-config.js";

// Agregar al inicio
const checkAuth = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        window.location.href = '../index.html';
        reject('Usuario no autenticado');
      }
    });
  });
};

// Llamar al inicio antes de cualquier operación
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await checkAuth();
    // Aquí va el resto del código existente
  } catch (error) {
    console.error('Error de autenticación:', error);
  }
});

document
  .getElementById("passwordForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verificar que las contraseñas nuevas coincidan
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas nuevas no coinciden");
      return;
    }

    try {
      const user = auth.currentUser;

      // Reautenticar al usuario antes de cambiar la contraseña
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await reauthenticateWithCredential(user, credential);

      // Actualizar la contraseña
      await updatePassword(user, newPassword);

      alert("Contraseña actualizada exitosamente");
      document.getElementById("passwordForm").reset();
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);

      let errorMessage = "Error al cambiar la contraseña. Intente nuevamente.";

      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "La contraseña actual es incorrecta";
          break;
        case "auth/weak-password":
          errorMessage =
            "La nueva contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
          break;
        case "auth/requires-recent-login":
          errorMessage =
            "Por seguridad, debe volver a iniciar sesión antes de cambiar la contraseña.";
          // Opcional: redirigir al login
          // window.location.href = "../login.html";
          break;
      }

      alert(errorMessage);
    }
  });

// Manejar cierre de sesión
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await auth.signOut();
    window.location.href = "../index.html";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Error al cerrar sesión");
  }
});
