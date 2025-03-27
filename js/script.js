document.addEventListener('DOMContentLoaded', function() {
  const carrosselContainer = document.querySelector('.carrossel-container');
  const players = document.querySelectorAll('.players');
  const btnAnterior = document.querySelector('.anterior');
  const btnPosterior = document.querySelector('.posterior');
  const indicadoresContainer = document.querySelector('.carrossel-indicadores');
  
  let currentIndex = 0;
  const totalPlayers = players.length;
  
  // Criar indicadores
  for (let i = 0; i < totalPlayers; i++) {
      const indicador = document.createElement('span');
      indicador.classList.add('indicador');
      if (i === 0) indicador.classList.add('ativo');
      indicador.addEventListener('click', () => irParaPlayer(i));
      indicadoresContainer.appendChild(indicador);
  }
  
  const indicadores = document.querySelectorAll('.indicador');
  
  // Função para atualizar o carrossel
  function atualizarCarrossel() {
      // Remover a classe 'ativo' de todos os players
      players.forEach(player => {
          player.classList.remove('ativo');
      });
      
      // Adicionar classe 'ativo' apenas ao player atual
      players[currentIndex].classList.add('ativo');
      
      // Atualizar indicadores
      indicadores.forEach((ind, index) => {
          ind.classList.toggle('ativo', index === currentIndex);
      });
  }
  
  // Função para ir para um player específico
  function irParaPlayer(index) {
      currentIndex = index;
      atualizarCarrossel();
  }
  
  // Event listeners para os botões
  btnAnterior.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalPlayers) % totalPlayers;
      atualizarCarrossel();
  });
  
  btnPosterior.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalPlayers;
      atualizarCarrossel();
  });
  
  // Inicializar carrossel
  players.forEach(player => player.classList.remove('ativo'));
  players[0].classList.add('ativo');
});