document.addEventListener('DOMContentLoaded', () => {
  const sideMenu = document.querySelector('aside');
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const navbar = document.getElementById('navbar');
  const darkMode = document.getElementById('dark-mode');

  //   menuBtn.addEventListener('click', () => {
  //     sideMenu.style.display = 'block';
  //   });

  //   closeBtn.addEventListener('click', () => {
  //     sideMenu.style.display = 'none';
  //   });

  darkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode-variables');

    navbar.style.boxShadow = '0px 0px 20px red';
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
  });
});

