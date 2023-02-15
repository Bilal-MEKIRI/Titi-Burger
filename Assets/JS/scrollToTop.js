/********************Scroll to top function Start******************* */
const arrowUp = document.querySelector(".scroll-to-top");
function checkWindowYscroll() {
  if (window.scrollY > 300) {
    arrowUp.classList.add("show");
  } else {
    arrowUp.classList.remove("show");
  }
}

window.addEventListener("scroll", checkWindowYscroll);

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
/********************Scroll to top function End******************* */
