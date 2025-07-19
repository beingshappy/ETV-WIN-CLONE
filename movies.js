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
  const drawerCloseBtn = modal.querySelector('.close-btn');
  const overlay = modal.querySelector('.modern-overlay');

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  drawerCloseBtn.addEventListener('click', function () {
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






const sliderTrack = document.getElementById("sliderTrack");
const heroBg = document.getElementById("heroBg");
const heroTitle = document.getElementById("heroTitle");
const heroGenres = document.getElementById("heroGenres");
const heroDescription = document.getElementById("heroDescription");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const thumbnailsData = [
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/exclusives/shows42655/air/images/air-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/4vPj0tNDiMFeqDNLMenQe9zYsms.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/originalmovies/anaganaga/66589/anaganaga-Anaganaga_4K-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/l7owE1G6oPFZ5bFlZXB5ET7H8CA.jpg",
    title: "Anaganaga",
    genres: ["Romance", "Fantasy"],
    description: "A magical love story that spans across time and dreams.",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/originalmovies/23iravaimoodu/50355/23-iravai-moodu-23_Iravai_Moodu_4K-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://s3-ap-southeast-1.amazonaws.com/etv-win-image/etvwin/exclusives/shows68045/-90-s-a-middle-class-biopic/images/-90-s-a-middle-class-biopic-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/2MaumbgBlW1NoPo3ZJO38A6v7OS.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/originalmovies/akkadaammayiikkadaabbayi/86643/akkada-ammayi-ikkada-abbayi--AAIA_4K_Dolby-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/bI37vIHSH7o4IVkq37P8cfxQGMx.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/originalmovies/akkadaammayiikkadaabbayi/86643/akkada-ammayi-ikkada-abbayi--AAIA_4K_Dolby-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/l8v3gJDlASN0lNn51gR8zQJsu5O.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/serials/shows56781/vasundhara/images/vasundhara-384x216.png",
    bg: "https://image.tmdb.org/t/p/original/2gFbvyd3gy1tXOBWgQQnYRnkI2B.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/originalmovies/okabrundavanam/27579/oka-brundavanam-OKA_BRUNDAVANAM_MOVIE-384x216.png",
    bg: "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/962KXsr09uK8wrmUg9TjzmE7c4e.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://s3-ap-southeast-1.amazonaws.com/etv-win-image/etvwin/shows/shows40641/sridevi-drama-company/images/sridevi-drama-company-384x216.png",
    bg: "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/fQOV47FHTJdaSuSUNlzP3zXUZWE.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  {
    thumb:
      "https://etv-win-image.akamaized.net/etvwin/originalmovies/aaokkatiadakku/11469/aa-okkati-adakku-AOA_Movie-384x216.png",
    bg: "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/xABhldZaMb6wfCH5oigV333OYnb.jpg",
    title: "AIR - All India Rankers",
    genres: ["Drama", "Comedy", "Coming of Age"],
    description:
      "Three boys. One elite college. A system that demands perfection. Arjun, Imran, and Raju...",
  },
  // ... Add 9 more items similarly
];

thumbnailsData.forEach((data, index) => {
  const img = document.createElement("img");
  img.src = data.thumb;
  img.alt = data.title;
  img.dataset.index = index;
  if (index === 0) img.classList.add("active");
  sliderTrack.appendChild(img);
});

// Initial load
updateHero(0);

// Scroll logic
let scrollIndex = 0;
const visibleCount = 5;
const thumbWidth = 120;

leftBtn.addEventListener("click", () => {
  scrollIndex = Math.max(0, scrollIndex - 1);
  updateScroll();
});

rightBtn.addEventListener("click", () => {
  const maxIndex = thumbnailsData.length - visibleCount;
  scrollIndex = Math.min(maxIndex, scrollIndex + 1);
  updateScroll();
});

function updateScroll() {
  const scrollValue = scrollIndex * thumbWidth;
  sliderTrack.style.transform = `translateX(-${scrollValue}px)`;
}

sliderTrack.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const index = parseInt(e.target.dataset.index);
    updateHero(index);

    // update active
    document
      .querySelectorAll(".slider-track img")
      .forEach((img) => img.classList.remove("active"));
    e.target.classList.add("active");
  }
});

function updateHero(index) {
  const data = thumbnailsData[index];
  heroBg.style.backgroundImage = `url('${data.bg}')`;
  heroTitle.textContent = data.title;
  heroGenres.innerHTML = data.genres
    .map((g) => `<span>${g}</span>`)
    .join(" • ");
  heroDescription.textContent = data.description;
}

const trendnowScroll = document.getElementById("trendnowScrollContainer");
const trendnowLeft = document.getElementById("trendnowLeft");
const trendnowRight = document.getElementById("trendnowRight");

trendnowLeft.addEventListener("click", () => {
  trendnowScroll.scrollBy({ left: -300, behavior: "smooth" });
});

trendnowRight.addEventListener("click", () => {
  trendnowScroll.scrollBy({ left: 300, behavior: "smooth" });
});

// Popular / Most Watched

const popularTrack = document.querySelector(".popular-slider-track");
const popularLeft = document.querySelector(".popular-slider-arrow.left");
const popularRight = document.querySelector(".popular-slider-arrow.right");

popularLeft.addEventListener("click", () => {
  popularTrack.scrollBy({ left: -300, behavior: "smooth" });
});

popularRight.addEventListener("click", () => {
  popularTrack.scrollBy({ left: 300, behavior: "smooth" });
});

// Summer Special
const summerTrack = document.querySelector(".summer-track");
const summerLeft = document.querySelector(".summer-arrow.left");
const summerRight = document.querySelector(".summer-arrow.right");

summerLeft.addEventListener("click", () => {
  summerTrack.scrollBy({ left: -300, behavior: "smooth" });
});

summerRight.addEventListener("click", () => {
  summerTrack.scrollBy({ left: 300, behavior: "smooth" });
});


// Win Originals
const winTrack = document.querySelector(".win-track");
const winLeft = document.querySelector(".win-arrow.left");
const winRight = document.querySelector(".win-arrow.right");

winLeft.addEventListener("click", () => {
  winTrack.scrollBy({ left: -300, behavior: "smooth" });
});

winRight.addEventListener("click", () => {
  winTrack.scrollBy({ left: 300, behavior: "smooth" });
});
// Evergreen Hits
const track = document.querySelector(".evergreen-track");
const btnLeft = document.querySelector(".evergreen-arrow.left");
const btnRight = document.querySelector(".evergreen-arrow.right");

btnLeft.addEventListener("click", () => {
  track.scrollBy({ left: -300, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  track.scrollBy({ left: 300, behavior: "smooth" });
});
// Musical Hits
const musicalTrack = document.querySelector(".musical-track");
const musicalLeft = document.querySelector(".musical-arrow.left");
const musicalRight = document.querySelector(".musical-arrow.right");

musicalLeft.addEventListener("click", () => {
  musicalTrack.scrollBy({ left: -300, behavior: "smooth" });
});

musicalRight.addEventListener("click", () => {
  musicalTrack.scrollBy({ left: 300, behavior: "smooth" });
});




// login page 


  const openLogin = document.getElementById("openLogin");
  const loginModal = document.getElementById("loginModal");
  const loginCloseBtn = document.querySelector(".close-btn");

  openLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
  });

  loginCloseBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });