const hamburger = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerCloseBtn");

  hamburger.addEventListener("click", () => {
    drawer.classList.add("open");
  });

  drawerClose.addEventListener("click", () => {
    drawer.classList.remove("open");
  });

  // Optional: close drawer when link clicked
  document.querySelectorAll(".drawer-menu a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  });



// drawer-buttons

 const loginBtn = document.querySelector('.drawer-login');
  const modal = document.getElementById('loginModal');
  const modalCloseBtn = modal.querySelector('.close-btn');
  const overlay = modal.querySelector('.modern-overlay');

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  modalCloseBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  overlay.addEventListener('click', function () {
    modal.style.display = 'none';
  });




  // Automatically set active class on nav-menu and drawer-menu
  const currentPage = window.location.pathname.split('/').pop(); // e.g. 'movies.html'

  // For top desktop menu
  document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // For mobile drawer menu
  document.querySelectorAll('.drawer-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

// login page 


  const openLogin = document.getElementById("openLogin");
  const loginModal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".close-btn");

  openLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });


  