document.addEventListener('DOMContentLoaded', function() {
  const toggleBar = document.querySelector('.toggle-icon');
  const closeBar = document.querySelector('.close-icon');
  const navbar = document.querySelector('.navbar');

  toggleBar.addEventListener('click', function() {
    navbar.style.display = 'block';
    toggleBar.style.display = 'none';
    closeBar.style.display = 'block';
  });

  closeBar.addEventListener('click', function() {
    navbar.style.display = 'none';
    closeBar.style.display = 'none';
    toggleBar.style.display = 'block';
  });

  // Reset navbar and toggle bar visibility on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 770) {
      navbar.style.display = 'block'; // Always show navbar above 770px
      toggleBar.style.display = 'none';
      closeBar.style.display = 'none';
    } else {
      navbar.style.display = 'none'; // Hide navbar below 770px
      toggleBar.style.display = 'block'; // Show toggle bar below 770px
      closeBar.style.display = 'none';
    }
  });
});
