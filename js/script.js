function debounce(func, wait = 100, immediate = false) {
    let timeout;
    
    return function() {
      const context = this;
      const args = arguments;
      
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  }

  // Função que será executada após o debounce
function handleScroll() {
    console.log('Scroll detectado (com debounce)');
    // Sua lógica de efeitos parallax ou animações aqui
  }
  
  // Aplicando debounce (executa 100ms após parar de scrollar)
  window.addEventListener('scroll', debounce(handleScroll, 100));

  function handleResize() {
    console.log('Tamanho da janela alterado:', window.innerWidth);
    // Atualize layouts responsivos aqui
  }
  
  window.addEventListener('resize', debounce(handleResize, 150));

  const tiltElements = document.querySelectorAll('.tilt-element');

function handleMouseMove(e) {
  // Sua lógica de inclinação 3D aqui
  console.log('Mouse move:', e.clientX, e.clientY);
}

tiltElements.forEach(el => {
  el.addEventListener('mousemove', debounce(handleMouseMove, 50));
});
