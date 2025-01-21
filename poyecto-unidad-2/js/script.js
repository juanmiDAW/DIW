const carousel = document.getElementById('carousel');
    const slides = carousel.querySelector('.carousel-slides');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
      // Actualizar la posición del carrusel
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      // Actualizar los indicadores activos
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % indicators.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
      updateCarousel();
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Mover al siguiente slide manualmente
    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });

    // Mover al slide anterior manualmente
    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });

    // Ir al slide específico al hacer clic en un indicador
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        updateCarousel();
        startAutoSlide();
      });
    });

    // Iniciar el auto-slide al cargar
    startAutoSlide();

    var selectorLi = document.querySelectorAll('li[class="tabs-li"');
    
    selectorLi.addEventListener('click', function(){
        
    })