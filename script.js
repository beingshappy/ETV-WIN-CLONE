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
  const closeBtn = modal.querySelector('.close-btn');
  const overlay = modal.querySelector('.modern-overlay');

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', function () {
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

// new
const slider = document.getElementById("beforeTvSlider");
const leftArrow = document.getElementById("beforeTvLeft");
const rightArrow = document.getElementById("beforeTvRight");
leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});
rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

// recently-added.js
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("recent-slider");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const scrollAmount = 200;

  leftArrow.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

// treanding

document.addEventListener("DOMContentLoaded", function () {
  const trendingSlider = document.getElementById("trending-slider");
  const leftArrow = document.querySelector(
    ".slider-container-trending .left-arrow"
  );
  const rightArrow = document.querySelector(
    ".slider-container-trending .right-arrow"
  );

  const cardWidth = document.querySelector(
    ".slider-container-trending .card"
  ).offsetWidth;
  const gap = 16;
  const scrollAmount = cardWidth + gap;

  leftArrow.addEventListener("click", () => {
    trendingSlider.scrollBy({
      left: -scrollAmount * 5,
      behavior: "smooth",
    });
  });

  rightArrow.addEventListener("click", () => {
    trendingSlider.scrollBy({
      left: scrollAmount * 5,
      behavior: "smooth",
    });
  });
});

// Katha Sudha - Sunday Stories

document.addEventListener("DOMContentLoaded", function () {
  const sundaySlider = document.getElementById("sunday-slider");
  const leftArrow = document.querySelector(".slider-container-2 .left-arrow");
  const rightArrow = document.querySelector(".slider-container-2 .right-arrow");

  const cardWidth = document.querySelector(
    ".slider-container-2 .card"
  ).offsetWidth;
  const gap = 16;
  const scrollAmount = cardWidth + gap;

  leftArrow.addEventListener("click", () => {
    sundaySlider.scrollBy({
      left: -scrollAmount * 5,
      behavior: "smooth",
    });
  });

  rightArrow.addEventListener("click", () => {
    sundaySlider.scrollBy({
      left: scrollAmount * 5,
      behavior: "smooth",
    });
  });
});

// Raining Entertainers

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("raining-slider");
  const left = document.querySelector(".slider-container-raining .left-arrow");
  const right = document.querySelector(
    ".slider-container-raining .right-arrow"
  );
  const card = document.querySelector(".slider-container-raining .card");

  const scrollAmount = card.offsetWidth + 16;

  left.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount * 5,
      behavior: "smooth",
    });
  });

  right.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount * 5,
      behavior: "smooth",
    });
  });
});

const originalsTrack = document.getElementById("originalsTrack");
const prev = document.querySelector(".originals-prev");
const next = document.querySelector(".originals-next");

prev.addEventListener("click", () => {
  originalsTrack.scrollBy({
    left: -originalsTrack.offsetWidth,
    behavior: "smooth",
  });
});

next.addEventListener("click", () => {
  originalsTrack.scrollBy({
    left: originalsTrack.offsetWidth,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("cult-slider");
  const left = document.querySelector(".slider-container-cult .left-arrow");
  const right = document.querySelector(".slider-container-cult .right-arrow");
  const card = document.querySelector(".slider-container-cult .card");

  if (card) {
    const scrollAmount = card.offsetWidth + 16;

    left.addEventListener("click", () => {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    right.addEventListener("click", () => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("hits-slider");
  const left = document.querySelector(".slider-container-hits .left-arrow");
  const right = document.querySelector(".slider-container-hits .right-arrow");
  const card = document.querySelector(".slider-container-hits .card");

  if (card) {
    const scrollAmount = card.offsetWidth + 16;

    left.addEventListener("click", () => {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    right.addEventListener("click", () => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("award-slider");
  const left = document.querySelector(".award-slider-container .left-arrow");
  const right = document.querySelector(".award-slider-container .right-arrow");
  const card = document.querySelector(".award-slider-container .card");

  if (card) {
    const scrollAmount = card.offsetWidth + 16;

    left.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    right.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("kidsTrack");
  const left = document.querySelector(".kids-left");
  const right = document.querySelector(".kids-right");
  const card = document.querySelector(".kids-card");

  const scrollAmount = card.offsetWidth + 16;

  left.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("tvshowsTrack");
  const leftBtn = document.querySelector(".tvshows-left");
  const rightBtn = document.querySelector(".tvshows-right");
  const card = document.querySelector(".tvshows-card");

  const scrollAmount = card.offsetWidth + 16;

  leftBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

const latestSlider = document.getElementById("latestNewsSlider");
const latestLeft = document.querySelector(".latest-news-left");
const latestRight = document.querySelector(".latest-news-right");

const latestScrollAmount = () => latestSlider.clientWidth * 0.8;

latestLeft.addEventListener("click", () => {
  latestSlider.scrollBy({ left: -latestScrollAmount(), behavior: "smooth" });
});

latestRight.addEventListener("click", () => {
  latestSlider.scrollBy({ left: latestScrollAmount(), behavior: "smooth" });
});

const liveSlider = document.getElementById("liveTvSlider");
const liveLeft = document.querySelector(".live-tv-left");
const liveRight = document.querySelector(".live-tv-right");

const scrollAmount = () => liveSlider.clientWidth * 0.8;

liveLeft.addEventListener("click", () => {
  liveSlider.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
});

liveRight.addEventListener("click", () => {
  liveSlider.scrollBy({ left: scrollAmount(), behavior: "smooth" });
});

const recoSlider = document.getElementById("recoSlider");
const recoLeft = document.querySelector(".reco-left");
const recoRight = document.querySelector(".reco-right");

recoLeft.addEventListener("click", () => {
  recoSlider.scrollBy({
    left: -recoSlider.clientWidth * 0.8,
    behavior: "smooth",
  });
});

recoRight.addEventListener("click", () => {
  recoSlider.scrollBy({
    left: recoSlider.clientWidth * 0.8,
    behavior: "smooth",
  });
});

const comedyTrack = document.querySelector(".comedy-carousel-track");
const comedyLeftBtn = document.querySelector(".comedy-left");
const comedyRightBtn = document.querySelector(".comedy-right");

comedyLeftBtn.addEventListener("click", () => {
  comedyTrack.scrollBy({ left: -300, behavior: "smooth" });
});

comedyRightBtn.addEventListener("click", () => {
  comedyTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const romanceTrack = document.querySelector(".romance-carousel-track");
const romanceLeftBtn = document.querySelector(".romance-left");
const romanceRightBtn = document.querySelector(".romance-right");

romanceLeftBtn.addEventListener("click", () => {
  romanceTrack.scrollBy({ left: -300, behavior: "smooth" });
});

romanceRightBtn.addEventListener("click", () => {
  romanceTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const classicsTrack = document.querySelector(".classics-slider-track");
const classicsLeft = document.querySelector(".classics-arrow-left");
const classicsRight = document.querySelector(".classics-arrow-right");

classicsLeft.addEventListener("click", () => {
  classicsTrack.scrollBy({ left: -300, behavior: "smooth" });
});

classicsRight.addEventListener("click", () => {
  classicsTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const folkloreTrack = document.querySelector(".folklore-slider-track");
const folkloreLeft = document.querySelector(".folklore-arrow-left");
const folkloreRight = document.querySelector(".folklore-arrow-right");

folkloreLeft.addEventListener("click", () => {
  folkloreTrack.scrollBy({ left: -300, behavior: "smooth" });
});

folkloreRight.addEventListener("click", () => {
  folkloreTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const familyTrack = document.querySelector(".family-slider-track");
const familyLeft = document.querySelector(".family-arrow-left");
const familyRight = document.querySelector(".family-arrow-right");

familyLeft.addEventListener("click", () => {
  familyTrack.scrollBy({ left: -300, behavior: "smooth" });
});

familyRight.addEventListener("click", () => {
  familyTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const thrillerTrack = document.querySelector(".thriller-slider-track");
const thrillerLeft = document.querySelector(".thriller-arrow-left");
const thrillerRight = document.querySelector(".thriller-arrow-right");

thrillerLeft.addEventListener("click", () => {
  thrillerTrack.scrollBy({ left: -300, behavior: "smooth" });
});

thrillerRight.addEventListener("click", () => {
  thrillerTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const ugadiTrack = document.querySelector(".ugadi-slider-track");
const ugadiLeft = document.querySelector(".ugadi-arrow-left");
const ugadiRight = document.querySelector(".ugadi-arrow-right");

ugadiLeft.addEventListener("click", () => {
  ugadiTrack.scrollBy({ left: -300, behavior: "smooth" });
});

ugadiRight.addEventListener("click", () => {
  ugadiTrack.scrollBy({ left: 300, behavior: "smooth" });
});

const classicsScrollContainer = document.querySelector(
  ".slider-classics-track"
);
const arrowLeft = document.querySelector(".slider-classics-arrow.left");
const arrowRight = document.querySelector(".slider-classics-arrow.right");

arrowLeft.addEventListener("click", () => {
  classicsScrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

arrowRight.addEventListener("click", () => {
  classicsScrollContainer.scrollBy({ left: 300, behavior: "smooth" });
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

// (Duplicate login modal logic removed to fix redeclaration error)