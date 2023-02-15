
function printWindowWidth () {
  let windowWidth = window.innerWidth;
  const header = document.querySelector("header");
  const desktopNav = document.querySelector(".desktop-nav-bar");
  const burgerMenu = document.querySelector(".menu-burger");
  const logoMobile = document.querySelector("#logo-mobile");
  const logoDesktop = document.querySelector("#logo");
  if (windowWidth <= 800) {
    desktopNav.classList.add("hidden");
    burgerMenu.classList.add("active");
    logoMobile.classList.add("active");
    logoDesktop.classList.add("hidden");
    header.style.alignItems = "center";
  } else {
    desktopNav.classList.remove("hidden");
    burgerMenu.classList.remove("active");
    logoMobile.classList.remove("active");
    logoDesktop.classList.remove("hidden");
    unfoldingMenu.classList.remove("active");
    header.style.alignItems = "initial";
  }
}

window.addEventListener("resize", printWindowWidth)

const unfoldingMenu = document.querySelector(".menu-mobile");
const burgerMenuOpenSvg = document.querySelector(".burger-menu-svg");
const burgerMenuCloseSvg = document.querySelector(".burger-menu-close-svg");

burgerMenuOpenSvg.addEventListener("click", () => {
  unfoldingMenu.classList.add("active");
})

burgerMenuCloseSvg.addEventListener("click", () => {
  unfoldingMenu.classList.remove("active");
})
