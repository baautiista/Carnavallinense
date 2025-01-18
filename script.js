// URL del servidor backend
const SERVER_URL = "https://carnavallinense.vercel.app";

// Datos de las actuaciones por día y modalidad
const actuaciones = {
  "23 de enero": {
    comparsas: ["Los trastos", "Los turistas se la da de artistas", "El corazón de Cádiz"],
    chirigotas: ["Los cabecita loca", "Cars", "Cariño que pelusilla me tienes"],
    coros: [],
    cuartetos: []
  },
  "24 de enero": {
    chirigotas: ["Cuándo tú vas yo vengo", "Los inhumanos", "Los calaíta (fuimos a por tabaco)"],
    comparsas: ["Los wonderful", "La mala"],
    cuartetos: ["Ku Klux Klan Klan"],
    coros: []
  },
  "25 de enero": {
    comparsas: ["Los gamberros", "Viaje a la vida", "La resistencia"],
    chirigotas: ["Los muchachos del congelao", "Los pimpinela de la plaza Fragela", "Las anticuarias"],
    coros: [],
    cuartetos: []
  },
  "26 de enero": {
    coros: ["Las entrañas de Cádiz"],
    chirigotas: ["Los malfo-llados", "Una chirigota grande", "Los cenadores rumanos"],
    comparsas: ["Las perras", "Bendita tú eres"],
    cuartetos: []
  },
  "27 de enero": {
    coros: ["La palabra de dios"],
    chirigotas: ["5 minutitos más", "Los auténticos pitorrisas", "Por si acaso… las precavidas"],
    comparsas: ["Carnavalandia", "La tribu"],
    cuartetos: []
  },
  "28 de enero": {
    coros: ["Los guardianes del dios momo"],
    chirigotas: ["Voces esmayadas", "Que sea lo que dios quiera"],
    comparsas: ["Cositas de Cádiz", "L@s artistas", "Donde los sueños se hacen realidad"],
    cuartetos: []
  },
  "29 de enero": {
    coros: ["La desafinada"],
    chirigotas: ["Que de gente muere por Cai", "Cádiz de la frontera"],
    comparsas: ["Los charlatanes", "Las ratas", "Los gorriones"],
    cuartetos: []
  },
  "30 de enero": {
    coros: ["Ley natura"],
    chirigotas: ["Martín el encantador", "Los que tienen el cielo ganao"],
    comparsas: ["Los plumeritos", "Payaso", "La majadería"],
    cuartetos: []
  },
  "31 de enero": {
    coros: ["El grimario"],
    chirigotas: ["Los hermanos del buen fin"],
    comparsas: ["El gran comandante", "La valla", "Las carmelas"],
    cuartetos: ["ONG (organización no gaditana). Cuartetos sin fronteras"]
  },
  "1 de febrero": {
    coros: ["Cádiz, el show"],
    chirigotas: ["Los butaneros, chirigota de CAI/CDC", "El que pueda que empate"],
    comparsas: ["Sociedad anónima", "La chulita", "El loco de los empeños"],
    cuartetos: ["Un clásico nunca falla"]
  },
  "2 de febrero": {
    coros: ["Los malhablao"],
    chirigotas: ["No es lo mismo contarlo que vivirlo", "Abre los ojos", "Un muerto muy vivo"],
    comparsas: ["La quinta estación", "El cementerio"],
    cuartetos: []
  },
  "3 de febrero": {
    coros: ["Son y sal"],
    chirigotas: ["Los tigras blues band", "Apartamentos turísticos Juani Wainjaus"],
    comparsas: ["De buena tinta", "La casa de las ilusiones", "Aquí me quito las penas"],
    cuartetos: []
  },
  "4 de febrero": {
    coros: ["¡Qué barbaridad!"],
    chirigotas: ["Tik Tok", "Los enganchaos"],
    comparsas: ["La tregua", "Desde mi mundo", "Las adelitas"],
    cuartetos: []
  },
  "5 de febrero": {
    coros: ["La suerte de Cádiz"],
    chirigotas: ["Pa colgaera la mía", "Pa rebeldía mi poesía, po cógela que es mía"],
    comparsas: ["Tocando madera", "Los poderosos", "Puente de plata"],
    cuartetos: []
  },
  "6 de febrero": {
    coros: ["¡Ojú qué lío!"],
    chirigotas: ["Los acojonaos", "Los cagones", "Las precavidas"],
    comparsas: ["Los enemigos", "Las costuras del alma"],
    cuartetos: []
  },
  "7 de febrero": {
    coros: ["El gallinero"],
    chirigotas: ["Los golpes de pecho", "Los que reparten a domicilio"],
    comparsas: ["Carmen", "Los que tocan el cielo"],
    cuartetos: ["Inclusión o victoria"]
  },
  "8 de febrero": {
    coros: ["Con permiso buenas tardes"],
    chirigotas: ["Una chirigota con sHoNikEt3", "Al cielo con él"],
    comparsas: ["El circo de los sumisos", "Los del otro barrio", "Lo que me sale de la pluma"],
    cuartetos: ["Esto está de capa caída"]
  },
  "9 de febrero": {
    coros: ["Asignatura pendiente"],
    chirigotas: ["Los James Bond, que da gloria verlos", "Cádiz, los que van a cantar te la sudan (Los dixlésicos)"],
    comparsas: ["Luna llena", "La rabia", "Los inadaptados"],
    cuartetos: []
  },
  "10 de febrero": {
    coros: ["El lado oscuro"],
    chirigotas: ["El beso más famoso después de Jenni Hermoso", "Esto ya no hay quien lo pare !!", "Vuelvo de gira con Bod Dylan"],
    comparsas: ["Los caballas", "Los majareta de las bicicleta"],
    cuartetos: []
  },
  "11 de febrero": {
    coros: ["La última función"],
    chirigotas: ["Los hijos de los millonarios, vulgo Los carahotes", "Las ovejitas negras"],
    comparsas: ["Los gordos", "DesOBDC", "Más típico no lo hay, de Conil a Cai"],
    cuartetos: []
  },
  "12 de febrero": {
    coros: ["Este coro es la polla"],
    chirigotas: ["Ni fú ni fá", "Los sherijuegos", "Venimos de vuelta"],
    comparsas: ["La volaura", "Albarracín, la aldea escondida"],
    cuartetos: []
  },
  "13 de febrero": {
    coros: ["La fábrica de chocolate"],
    chirigotas: ["Noche de fiesta", "Quien guarda, halla"],
    comparsas: ["El ejército de Pancho Viña", "¡Si alguno quiere guerrilla!", "Los invasores"],
    cuartetos: []
  }
};

// Renderizar actuaciones por día con formulario de puntuación
function renderActuaciones() {
  const diasDiv = document.getElementById("dias");
  diasDiv.innerHTML = "";
  Object.entries(actuaciones).forEach(([dia, modalidades]) => {
    const diaDiv = document.createElement("div");
    diaDiv.innerHTML = `<h3>${dia}</h3>`;
    Object.entries(modalidades).forEach(([modalidad, agrupaciones]) => {
      agrupaciones.forEach((agrupacion) => {
        const agrupacionDiv = document.createElement("div");
        agrupacionDiv.innerHTML = `
          <span>${agrupacion} (${modalidad})</span>
          <select id="puntuacion-${modalidad}-${agrupacion.replace(/\s+/g, "-")}" class="puntuacion-select">
            ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("")}
          </select>
          <button onclick="puntuar('${modalidad}', '${agrupacion}')">Puntuar</button>
        `;
        diaDiv.appendChild(agrupacionDiv);
      });
    });
    diasDiv.appendChild(diaDiv);
  });
}

// Función para enviar puntuaciones
async function puntuar(modalidad, agrupacion) {
  const puntuacionSelect = document.getElementById(`puntuacion-${modalidad}-${agrupacion.replace(/\s+/g, "-")}`);
  const puntuacion = parseInt(puntuacionSelect.value);

  try {
    const response = await fetch(`${SERVER_URL}/puntuar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modalidad, agrupacion, puntuacion }),
    });

    if (response.ok) {
      alert(`¡Has puntuado con ${puntuacion} a "${agrupacion}" en ${modalidad}!`);
    } else {
      const errorData = await response.json();
      console.error("Error en el servidor:", errorData);
      alert("Error al registrar la puntuación. Inténtalo de nuevo.");
    }
  } catch (error) {
    console.error("Error al puntuar:", error);
    alert("No se pudo conectar con el servidor. Inténtalo más tarde.");
  }
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  renderActuaciones();
});
