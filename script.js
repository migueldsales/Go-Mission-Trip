const toggleMenu = document.querySelector(".toggle-menu");
const headNav = document.querySelector(".header-nav");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
    header.classList.toggle("open");
});


// COFFEE TAB
const starNav = document.querySelectorAll(".star-nav-link");
const starContent = document.querySelectorAll(".coffee-tab-content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}

const links = document.querySelectorAll(".links-drop-item h4");

links.forEach((baba) => {
    baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
    });
});

const bannerfloat = document.querySelector(".banner-float");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 100) {
    header.classList.add("blue");
  } else {
    header.classList.remove("blue");
  }
});

