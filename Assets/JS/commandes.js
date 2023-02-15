const burgersURL = "https://titi.startwin.fr/products/type/burger";
const sideDishesURL = "https://titi.startwin.fr/products/type/accompagnement";
const drinksURL = "https://titi.startwin.fr/products/type/boisson";
const dessertsURL = "https://titi.startwin.fr/products/type/dessert";



fetch(burgersURL)
  .then((response) => response.json())
  .then((data) => {
    const burgersList = document.querySelector(".burgers-list");
    let i = 0;
    for (i = 0; i < 4; i++) {
      burgersList.innerHTML += `<section class="choixMenu">
    <div>
    <input class="radioButton" type="radio" name="choixMenu">
    <img class="menuImg" src="${data[i].image}" alt="">
    </div>
    <h2>${data[i].name} - ${data[i].price.$numberDecimal}$</h2>
    <p>
      ${data[i].description}
    </p>
  </section>
  <img class="line" src="img\\Line 5.png" alt="">`;
    }
  });

fetch(sideDishesURL)
  .then((response) => response.json())
  .then((data) => {
    const sideDishesList = document.querySelector(".side-dishes-list");
    let i = 0;
    for (i = 0; i < 4; i++) {
      sideDishesList.innerHTML += `<section class="choixMenu">
    <div>
    <input class="radioButton" type="radio" name="choixMenu">
    <img class="menuImg" src="${data[i].image}" alt="">
    </div>
    <h2>${data[i].name} - ${data[i].price.$numberDecimal}$</h2>
    <p>
      ${data[i].description}
    </p>
  </section>
  <img class="line" src="img\\Line 5.png" alt="">`;
    }
  });

fetch(dessertsURL)
  .then((response) => response.json())
  .then((data) => {
    const desertsList = document.querySelector(".deserts-list");
    let i = 0;
    for (i = 0; i < 4; i++) {
      desertsList.innerHTML += `<section class="choixMenu">
    <div>
    <input class="radioButton" type="radio" name="choixMenu">
    <img class="menuImg" src="${data[i].image}" alt="">
    </div>
    <h2>${data[i].name} - ${data[i].price.$numberDecimal}$</h2>
    <p>
      ${data[i].description}
    </p>
  </section>
  <img class="line" src="img\\Line 5.png" alt="">`;
    }
  });

fetch(drinksURL)
  .then((response) => response.json())
  .then((data) => {
    const drinksList = document.querySelector(".drinks-list-1");
    let i = 0;
    for (i = 0; i < 2; i++) {
      drinksList.innerHTML += `<div class="section">
      <img class="line" src="img\\Line 5.png" alt="">
        <div>
        <input class="radioButton" type="radio" name="choixMenu">
        <img class="menuImg" src="${data[i].image}" alt="Image ${data[i].name}">
        <h2>${data[i].name}</h2>
        </div>
    </div>`;
    }
  });

fetch(drinksURL)
  .then((response) => response.json())
  .then((data) => {
    const drinksList = document.querySelector(".drinks-list-2");
    let i;
    for (i = 2; i <= 3; i++) {
      drinksList.innerHTML += `<div class="section">
      <div>
        <input class="radioButton" type="radio" name="choixMenu">
        <img class="menuImg" src="${data[i].image}" alt="Image ${data[i].name}">
        <h2>${data[i].name}</h2>
      </div>
      <img class="line" src="img\\Line 5.png" alt="">
    </div>`;
    }
  });
