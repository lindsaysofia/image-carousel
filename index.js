const index = (function() {
  const previous = document.querySelector('.previous');
  const imageContainer = document.querySelector('.image-container');
  const currentImage = document.querySelector('.current-image');
  const next = document.querySelector('.next');
  const navigationDotsContainer = document.querySelector('.navigation-dots-container');
  let navigationDots;
  let interval;
  let currentIndex = 0;

  images = [
    {
      src: 'https://images.unsplash.com/photo-1570297605084-1393da7eabf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      alt: 'number one',
    },
    {
      src: 'https://images.unsplash.com/photo-1559757742-654d5da2eaab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'number two',
    },
    {
      src: 'https://images.unsplash.com/photo-1567775454604-cd5542d4ebb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
      alt: 'number three',
    },
    {
      src: 'https://images.unsplash.com/photo-1587642667788-5c994cf1efee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'number four',
    },
    {
      src: 'https://images.unsplash.com/photo-1618487113651-a8604c0fd3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      alt: 'number five',
    },
    {
      src: 'https://images.unsplash.com/photo-1619252872371-c82ac4d9e86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'number six',
    },
    {
      src: 'https://images.unsplash.com/photo-1557246830-821ff26b01b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'number seven',
    },
    {
      src: 'https://images.unsplash.com/photo-1617623641633-5b1da2f1a7c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'number eight',
    },
    {
      src: 'https://images.unsplash.com/photo-1529267605921-4b6cc01165a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      alt: 'number nine',
    },
    {
      src: 'https://images.unsplash.com/photo-1581954804624-5d0cf4cc9dde?}ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'number ten',
    },
  ];

  const createNavigationDots = (images, navigationDotsContainer) => {
    for (let i = 0; i < images.length; i += 1) {
      let navigationDot = document.createElement('div');
      navigationDot.dataset.index = i;
      navigationDot.classList.add('navigation-dot');
      navigationDotsContainer.appendChild(navigationDot);
    }
  };

  const goToImage = (e) => {
    clearInterval(interval);
    navigationDots[currentIndex].classList.remove('active');
    if (e === undefined) {
      currentIndex = (currentIndex === (images.length - 1)) ? 0 : currentIndex + 1;
    } else if (e.target.classList.contains('next')) {
      currentIndex = (currentIndex === (images.length - 1)) ? 0 : currentIndex + 1;
    } else if (e.target.classList.contains('previous')) {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    } else if (e.target.classList.contains('navigation-dot')) {
      currentIndex = Number(e.target.dataset.index);
    } 
    currentImage.src = images[currentIndex].src;
    currentImage.alt = images[currentIndex].alt;
    navigationDots[currentIndex].classList.add('active');
    startAutomaticScrolling();
  };

  const startAutomaticScrolling = () => {
    interval = setInterval(goToImage, 5000);
  }


  createNavigationDots(images, navigationDotsContainer);
  navigationDots = document.querySelectorAll('.navigation-dot');
  currentImage.src = images[currentIndex].src;
  currentImage.alt = images[currentIndex].alt;
  navigationDots[currentIndex].classList.add('active');

  previous.addEventListener('click', goToImage);
  next.addEventListener('click', goToImage);
  navigationDots.forEach(dot => dot.addEventListener('click', goToImage));

  startAutomaticScrolling();
})();