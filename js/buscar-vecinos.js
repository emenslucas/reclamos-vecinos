import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth, db } from "./firebase-config.js";

// Funciones de seguridad
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

const sanitizeInput = (input) => {
  return input
    .replace(/[&<>"']/g, (char) => {
      const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return entities[char];
    })
    .trim();
};

const validateVecinoData = (data) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+ -]{8,15}$/;

  if (!data.nombre || data.nombre.length < 2) throw new Error('Nombre inválido');
  if (!data.apellido || data.apellido.length < 2) throw new Error('Apellido inválido');
  if (!emailRegex.test(data.mail)) throw new Error('Email inválido');
  if (!phoneRegex.test(data.telefono)) throw new Error('Teléfono inválido');
  if (!data.barrio || data.barrio.length < 2) throw new Error('Barrio inválido');

  return {
    ...data,
    nombre: sanitizeInput(data.nombre),
    apellido: sanitizeInput(data.apellido),
    mail: sanitizeInput(data.mail),
    telefono: sanitizeInput(data.telefono),
    barrio: sanitizeInput(data.barrio)
  };
};

// Variables globales
const searchInput = document.getElementById("searchInput");
const resultados = document.getElementById("resultados");
let vecinos = []; // Cache de vecinos

// Función principal para cargar vecinos
async function cargarVecinos() {
  try {
    await checkAuth(); // Verificar autenticación antes de cargar datos
    const querySnapshot = await getDocs(collection(db, "vecinos"));
    vecinos = [];
    querySnapshot.forEach((doc) => {
      const vecinoData = {
        id: doc.id,
        ...doc.data(),
      };
      // Sanitizar datos al cargarlos
      vecinos.push({
        ...vecinoData,
        nombre: sanitizeInput(vecinoData.nombre),
        apellido: sanitizeInput(vecinoData.apellido),
        mail: sanitizeInput(vecinoData.mail),
        telefono: sanitizeInput(vecinoData.telefono),
        barrio: sanitizeInput(vecinoData.barrio)
      });
    });
    mostrarResultados(vecinos);
  } catch (error) {
    console.error("Error al cargar vecinos:", error);
    resultados.innerHTML = "<p>Error al cargar los vecinos. Intente nuevamente.</p>";
  }
}

// Función para eliminar vecino con validación adicional
async function eliminarVecino(vecinoId) {
  try {
    await checkAuth(); // Verificar autenticación antes de eliminar
    
    if (!vecinoId) throw new Error('ID de vecino inválido');
    
    if (confirm("¿Está seguro que desea eliminar este vecino? Esta acción no se puede deshacer.")) {
      await deleteDoc(doc(db, "vecinos", vecinoId));
      alert("Vecino eliminado exitosamente");
      await cargarVecinos(); // Recargar la lista
    }
  } catch (error) {
    console.error("Error al eliminar vecino:", error);
    alert(error.message || "Error al eliminar vecino. Intente nuevamente.");
  }
}

// Función para mostrar resultados con sanitización
function mostrarResultados(vecinosFiltrados) {
  resultados.innerHTML = "";

  if (vecinosFiltrados.length === 0) {
    resultados.innerHTML = "<p>No se encontraron resultados</p>";
    return;
  }

  vecinosFiltrados.forEach((vecino) => {
    const card = document.createElement("div");
    card.className = "vecino-card";
    // Sanitizar datos antes de mostrarlos
    card.innerHTML = `
      <h3>${sanitizeInput(vecino.nombre)} ${sanitizeInput(vecino.apellido)}</h3>
      <p>Email: ${sanitizeInput(vecino.mail)}</p>
      <p>Teléfono: ${sanitizeInput(vecino.telefono)}</p>
      <p>Barrio: ${sanitizeInput(vecino.barrio)}</p>
      <div class="button-container">
        <button class="btn-nuevo-reclamo">Crear Nuevo Reclamo</button>
        <button class="btn-ver-reclamos">Ver Reclamos</button>
        <button class="btn-eliminar">Eliminar Vecino</button>
      </div>
    `;

    // Event listeners para los botones
    card.querySelector(".btn-nuevo-reclamo").addEventListener("click", () => {
      const params = new URLSearchParams();
      params.append('id', vecino.id);
      params.append('nombre', sanitizeInput(vecino.nombre));
      params.append('apellido', sanitizeInput(vecino.apellido));
      window.location.href = `nuevo-reclamo.html?${params.toString()}`;
    });

    card.querySelector(".btn-ver-reclamos").addEventListener("click", () => {
      window.location.href = `ver-reclamos.html?vecinoId=${vecino.id}`;
    });

    card.querySelector(".btn-eliminar").addEventListener("click", () => {
      eliminarVecino(vecino.id);
    });

    resultados.appendChild(card);
  });
}

// Event listener para búsqueda con debounce
let timeoutId;
searchInput.addEventListener("input", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const searchTerm = sanitizeInput(searchInput.value.toLowerCase());
    const vecinosFiltrados = vecinos.filter(
      (vecino) =>
        vecino.nombre.toLowerCase().includes(searchTerm) ||
        vecino.apellido.toLowerCase().includes(searchTerm) ||
        vecino.mail.toLowerCase().includes(searchTerm) ||
        vecino.telefono.toLowerCase().includes(searchTerm)
    );
    mostrarResultados(vecinosFiltrados);
  }, 300); // Debounce de 300ms
});

// Inicialización
window.addEventListener("load", cargarVecinos);

// Manejo del cierre de sesión
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await checkAuth(); // Verificar autenticación antes de cerrar sesión
    await auth.signOut();
    window.location.href = "../index.html";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Error al cerrar sesión");
  }
});