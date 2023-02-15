const menu = document.querySelector("#menu");

document.querySelector("#flecheDroite").addEventListener("click", () => {
  const elementsMenu = menu.querySelectorAll(".menu");
  const last = elementsMenu[elementsMenu.length - 1];
  last.remove();
  document.querySelector("#flecheDroite").after(last);
});

document.querySelector("#flecheGauche").addEventListener("click", () => {
  const elementsMenu = menu.querySelectorAll(".menu");
  const first = elementsMenu[0];
  first.remove();
  document.querySelector("#flecheGauche").before(first);
});


