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
      const rankingTableBody = document.querySelector('.ranking-table tbody');
      rankingTableBody.innerHTML = ''; // Limpiar las filas existentes

      // Ordenar por puntos y mostrar el ranking en la tabla
      Object.entries(ranking)
        .sort((a, b) => b[1] - a[1])
        .forEach(([agrupacion, puntos]) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${agrupacion}</td>
            <td>${puntos}</td>
          `;
          rankingTableBody.appendChild(row);
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
