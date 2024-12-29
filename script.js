// Carga los datos del ranking desde localStorage o crea un ranking inicial
const ranking = JSON.parse(localStorage.getItem('ranking')) || {
    'Los que siempre llegan tarde': 0,
    'Los impertinentes': 0,
    'Los que no se enteran': 0,
    'Los del último asiento': 0,
    'Los despistados': 0,
    'Los de la bombilla fundida': 0,
    'Los del disfraz olvidado': 0,
    'El jardín secreto': 0,
    'Los guardianes del tiempo': 0,
    'La melodía perdida': 0,
    'El alma de Cádiz': 0,
    'Los viajeros del sur': 0,
    'La sombra de la luna': 0,
    'Los eternos soñadores': 0,
    'La voz del silencio': 0,
  };
  
  // Función para votar
  function votar(agrupacion) {
    if (ranking[agrupacion] !== undefined) {
      ranking[agrupacion] += 1;
  
      // Guarda el ranking actualizado en localStorage
      localStorage.setItem('ranking', JSON.stringify(ranking));
  
      alert(`¡Has votado por "${agrupacion}"!`);
      actualizarRanking();
    } else {
      alert('Agrupación no encontrada.');
    }
  }
  
  // Actualizar el ranking en la página
  function actualizarRanking() {
    const rankingSection = document.getElementById('ranking');
    const rankingList = rankingSection.querySelector('ul');
    rankingList.innerHTML = ''; // Limpiar la lista
  
    // Ordenar por puntos
    const sortedRanking = Object.entries(ranking).sort((a, b) => b[1] - a[1]);
    sortedRanking.forEach(([agrupacion, puntos]) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${agrupacion}: ${puntos} puntos`;
      rankingList.appendChild(listItem);
    });
  }
  
  // Inicializar el ranking
  actualizarRanking();