import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

// Manejar el evento de submit del formulario
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtener valores del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Construir email para Firebase Auth (ya que requiere formato de email)
  const email = `${username}@gmail.com`;

  // Deshabilitar el botón de submit para evitar múltiples intentos
  const submitButton = e.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    // Intentar login con Firebase Auth
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Login exitoso - guardar información adicional si es necesario
    localStorage.setItem("userName", username);

    // Redirigir a la página de inicio
    window.location.href = "html/inicio.html";
  } catch (error) {
    console.error("Error al iniciar sesión:", error);

    // Manejar diferentes tipos de errores
    let errorMessage = "Error al iniciar sesión. Intente nuevamente.";

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "Usuario no encontrado.";
        break;
      case "auth/wrong-password":
        errorMessage = "Contraseña incorrecta.";
        break;
      case "auth/invalid-email":
        errorMessage = "Formato de email inválido.";
        break;
      case "auth/user-disabled":
        errorMessage = "Usuario deshabilitado.";
        break;
      case "auth/too-many-requests":
        errorMessage = "Demasiados intentos fallidos. Intente más tarde.";
        break;
    }

    alert(errorMessage);
  } finally {
    // Re-habilitar el botón de submit
    submitButton.disabled = false;
  }
});

// Función auxiliar para limpiar el formulario
const clearForm = () => {
  document.getElementById("loginForm").reset();
};

// Opcionalmente, limpiar el formulario cuando se carga la página
window.addEventListener("load", clearForm);

// Manejar errores de conexión
window.addEventListener("offline", () => {
  alert(
    "Se perdió la conexión a internet. Verifique su conexión e intente nuevamente."
  );
});
