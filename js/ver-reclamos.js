import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { auth, db } from "../src/firebase-config.js";

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

const urlParams = new URLSearchParams(window.location.search);
const vecinoId = urlParams.get("vecinoId");
const vecinoInfo = document.getElementById("vecino-info");
const reclamosContainer = document.getElementById("reclamos-container");
const searchInput = document.getElementById("searchReclamos");

let todosLosReclamos = []; // Cache de reclamos para la búsqueda

// Cargar información del vecino
async function cargarInfoVecino() {
  if (!vecinoId) {
    alert("Por favor, seleccione un vecino desde la búsqueda");
    window.location.href = "buscar-vecinos.html";
    return;
  }

  try {
    const vecinoDoc = await getDoc(doc(db, "vecinos", vecinoId));
    if (vecinoDoc.exists()) {
      const vecino = vecinoDoc.data();
      vecinoInfo.innerHTML = `
                <h2>${vecino.nombre} ${vecino.apellido}</h2>
                <p><strong>Email:</strong> ${vecino.mail}</p>
                <p><strong>Teléfono:</strong> ${vecino.telefono}</p>
                <p><strong>Barrio:</strong> ${vecino.barrio}</p>
            `;
    } else {
      alert("Vecino no encontrado");
      window.location.href = "buscar-vecinos.html";
    }
  } catch (error) {
    console.error("Error al cargar datos del vecino:", error);
    vecinoInfo.innerHTML = "<p>Error al cargar la información del vecino</p>";
  }
}

// Cargar reclamos
async function cargarReclamos() {
  try {
    const q = query(
      collection(db, "reclamos"),
      where("vecinoId", "==", vecinoId)
    );
    const querySnapshot = await getDocs(q);

    todosLosReclamos = [];
    querySnapshot.forEach((doc) => {
      todosLosReclamos.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    mostrarReclamos(todosLosReclamos);
  } catch (error) {
    console.error("Error al cargar reclamos:", error);
    reclamosContainer.innerHTML =
      "<p>Error al cargar los reclamos. Intente nuevamente.</p>";
  }
}

// Mostrar reclamos filtrados
function mostrarReclamos(reclamos) {
  if (reclamos.length === 0) {
    reclamosContainer.innerHTML = "<p>No se encontraron reclamos.</p>";
    return;
  }

  reclamosContainer.innerHTML = "";

  // Ordenar reclamos por fecha (más recientes primero)
  reclamos.sort(
    (a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
  );

  reclamos.forEach((reclamo) => {
    const reclamoCard = document.createElement("div");
    reclamoCard.className = "reclamo-card";

    // Determinar la clase del estado
    const estadoClass = `estado-${reclamo.estado
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    reclamoCard.innerHTML = `
            <h3>Reclamo #${reclamo.nroReclamo}</h3>
            <p><strong>Fecha:</strong> ${new Date(
              reclamo.fecha
            ).toLocaleDateString()}</p>
            <p><strong>Tipo:</strong> ${reclamo.tipoReclamo}</p>
            <p><strong>Estado:</strong> <span class="estado-badge ${estadoClass}">${
      reclamo.estado
    }</span></p>
            <p><strong>Descripción:</strong> ${reclamo.descripcion}</p>
            ${
              reclamo.derivado
                ? `<p><strong>Derivado a:</strong> ${reclamo.derivado}</p>`
                : ""
            }
            <p><strong>Fecha de creación:</strong> ${new Date(
              reclamo.fechaCreacion
            ).toLocaleDateString()}</p>
        `;
    reclamosContainer.appendChild(reclamoCard);
  });
}

// Función de búsqueda
function buscarReclamos(searchTerm) {
  const termino = searchTerm.toLowerCase();

  const reclamosFiltrados = todosLosReclamos.filter(
    (reclamo) =>
      reclamo.nroReclamo.toLowerCase().includes(termino) ||
      reclamo.tipoReclamo.toLowerCase().includes(termino) ||
      reclamo.estado.toLowerCase().includes(termino) ||
      reclamo.descripcion.toLowerCase().includes(termino) ||
      (reclamo.derivado && reclamo.derivado.toLowerCase().includes(termino))
  );

  mostrarReclamos(reclamosFiltrados);
}

// Event listener para la búsqueda
searchInput.addEventListener("input", (e) => {
  buscarReclamos(e.target.value);
});

// Inicializar la página
async function inicializar() {
  await cargarInfoVecino();
  await cargarReclamos();
}

// Cargar todo al iniciar la página
window.addEventListener("load", inicializar);

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
