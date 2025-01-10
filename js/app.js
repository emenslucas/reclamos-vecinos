// app.js (para index.html - registro de vecinos)
import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { auth, db } from "../src/firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// Agregar al inicio
const checkAuth = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        window.location.href = "../index.html";
        reject("Usuario no autenticado");
      }
    });
  });
};

// Llamar al inicio antes de cualquier operación
document.addEventListener("DOMContentLoaded", async () => {
  try {
    await checkAuth();
    // Aquí va el resto del código existente
  } catch (error) {
    console.error("Error de autenticación:", error);
  }
});

const sanitizeInput = (input) => {
  return input
    .replace(/[&<>"']/g, (char) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return entities[char];
    })
    .trim();
};

// 3. Validación de datos
const validateVecinoData = (data) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+ -]{8,15}$/;

  if (!data.nombre || data.nombre.length < 2)
    throw new Error("Nombre inválido");
  if (!data.apellido || data.apellido.length < 2)
    throw new Error("Apellido inválido");
  if (!emailRegex.test(data.mail)) throw new Error("Email inválido");
  if (!phoneRegex.test(data.telefono)) throw new Error("Teléfono inválido");
  if (!data.barrio || data.barrio.length < 2)
    throw new Error("Barrio inválido");

  return {
    ...data,
    nombre: sanitizeInput(data.nombre),
    apellido: sanitizeInput(data.apellido),
    mail: sanitizeInput(data.mail),
    telefono: sanitizeInput(data.telefono),
    barrio: sanitizeInput(data.barrio),
  };
};

document.getElementById("vecinoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const vecinoData = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    telefono: document.getElementById("telefono").value,
    mail: document.getElementById("mail").value,
    barrio: document.getElementById("barrio").value,
    fechaRegistro: new Date().toISOString(),
  };

  try {
    // Validar y sanitizar datos antes de guardar
    const datosValidados = validateVecinoData(vecinoData);
    await addDoc(collection(db, "vecinos"), datosValidados);
    alert("Vecino registrado exitosamente.");
    document.getElementById("vecinoForm").reset();
  } catch (error) {
    console.error("Error:", error);
    alert(error.message || "Error al registrar vecino. Intente nuevamente.");
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
