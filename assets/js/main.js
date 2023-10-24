/*=============== SEARCH ===============*/
const searchContent = document.getElementById("search-content"),
  searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close");

/*===== SEARCH SHOW =====*/
// Validate if constant exists
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

/*===== SEARCH CLOSE =====*/
// Validate if constant exists
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginContent = document.getElementById("login-content"),
  loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close");

/*===== LOGIN SHOW =====*/
// Validate if constant exist
if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("login-show");
  });
}

/*===== LOGIN HIDDEN =====*/
// Validate if constant exist
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("login-show");
  });
}

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the shadow
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is greater than 350 viewport height, add the show-scrollup class to the scrollUp tag
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scrollup")
    : scrollUp.classList.remove("show-scrollup");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
