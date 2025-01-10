// nuevo-reclamo.js
import {
  addDoc,
  collection,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";

const urlParams = new URLSearchParams(window.location.search);
const vecinoId = urlParams.get("id");
const vecinoInfo = document.getElementById("vecinoInfo");

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

// Verificar si tenemos los parámetros necesarios
if (!vecinoId) {
  alert("Por favor, seleccione un vecino desde la búsqueda");
  window.location.href = "buscar-vecinos.html";
}

async function cargarDatosVecino() {
  try {
    const vecinoDoc = await getDoc(doc(db, "vecinos", vecinoId));
    if (vecinoDoc.exists()) {
      const vecino = vecinoDoc.data();
      vecinoInfo.innerHTML = `
                <div class="vecino-info-card">
                    <h2>${vecino.nombre} ${vecino.apellido}</h2>
                    <p><strong>Email:</strong> ${vecino.mail}</p>
                    <p><strong>Teléfono:</strong> ${vecino.telefono}</p>
                    <p><strong>Barrio:</strong> ${vecino.barrio}</p>
                </div>
            `;
    } else {
      alert("Vecino no encontrado");
      window.location.href = "buscar-vecinos.html";
    }
  } catch (error) {
    console.error("Error al cargar datos del vecino:", error);
    alert("Error al cargar datos del vecino");
  }
}

document.getElementById("reclamoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const reclamoData = {
    vecinoId: vecinoId,
    nroReclamo: document.getElementById("nroReclamo").value,
    fecha: document.getElementById("fecha").value,
    tipoReclamo: document.getElementById("tipoReclamo").value,
    descripcion: document.getElementById("descripcion").value,
    estado: document.getElementById("estado").value,
    derivado: document.getElementById("derivado").disabled
      ? null
      : document.getElementById("derivado").value,
    fechaCreacion: new Date().toISOString(),
  };

  try {
    await addDoc(collection(db, "reclamos"), reclamoData);
    alert("Reclamo guardado exitosamente.");
    window.location.href = "buscar-vecinos.html";
  } catch (error) {
    console.error("Error al guardar el reclamo:", error);
    alert("Error al guardar el reclamo. Intente nuevamente.");
  }
});

document.getElementById("derivadoCheck").addEventListener("change", (e) => {
  document.getElementById("derivado").disabled = !e.target.checked;
});

// Cargar datos del vecino al iniciar la página
cargarDatosVecino();

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
