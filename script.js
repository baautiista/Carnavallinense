// URL del servidor backend en Render
const SERVER_URL = "https://carnavallinense.onrender.com";

// Función para votar por una agrupación
async function votar(agrupacion) {
  try {
    const response = await fetch(`${SERVER_URL}/votar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ agrupacion }), // Enviar el nombre de la agrupación al servidor
    });

    if (response.ok) {
      const data = await response.json();
      alert(`¡Has votado por "${agrupacion}"!`);
      actualizarRanking(); // Actualiza el ranking después de votar
    } else {
      alert('Error al registrar el voto. Verifica la agrupación.');
    }
  } catch (error) {
    console.error('Error al votar:', error);
    alert('No se pudo conectar con el servidor. Intenta nuevamente más tarde.');
  }
}

// Función para obtener y mostrar el ranking actualizado
async function actualizarRanking() {
  try {
    const response = await fetch(`${SERVER_URL}/ranking`, {
      method: 'GET',
    });

    if (response.ok) {
      const ranking = await response.json(); // Recibe el ranking desde el servidor
      const rankingSection = document.getElementById('ranking');
      const rankingList = rankingSection.querySelector('ul');
      rankingList.innerHTML = ''; // Limpiar la lista actual

      // Ordenar por puntos y mostrar el ranking en la página
      Object.entries(ranking)
        .sort((a, b) => b[1] - a[1])
        .forEach(([agrupacion, puntos]) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${agrupacion}: ${puntos} puntos`;
          rankingList.appendChild(listItem);
        });
    } else {
      alert('Error al obtener el ranking. Intenta nuevamente más tarde.');
    }
  } catch (error) {
    console.error('Error al actualizar el ranking:', error);
    alert('No se pudo conectar con el servidor. Intenta nuevamente más tarde.');
  }
}

// Inicializar el ranking al cargar la página
actualizarRanking();
