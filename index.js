const index = (function() {
  const previous = document.querySelector('.previous');
  const imageContainer = document.querySelector('.image-container');
  const currentImage = document.querySelector('.current-image');
  const next = document.querySelector('.next');
  const navigationDotsContainer = document.querySelector('.navigation-dots-container');

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

  currentImage.src = images[0].src;
  currentImage.alt = images[0].alt;
})();