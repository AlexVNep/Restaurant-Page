import meatShake from "./images/meatShake.jpg";
import bullyBeefSalad from "./images/bullyBeefSalad.jpg";
import pizzleStickSalad from "./images/pizzleStickSalad.jpg";
const menuPage = document.createElement("div");
menuPage.classList.add = "menu-page";

const items = [
  {
    dishName: "Steak Milkshake",
    dishDescription:
      "A-grade steak blended in a mouth watering mushroom sauce, spinach and protein powder. Add your choice of house veggies or chips. ",
    dishPrice: "R200",
    imagePath: meatShake,
  },
  {
    dishName: "Bulldog King Salad",
    dishDescription: "Bully beef in a can with a side of onion rings.",
    dishPrice: "R150",
    imagePath: bullyBeefSalad,
  },
  {
    dishName: "Salad Pizzle Stick",
    dishDescription: "A-grade pizzle sticks served with a summer salad.",
    dishPrice: "R300",
    imagePath: pizzleStickSalad,
  },
];

function getMenuPage() {
  return menuPage;
}

items.forEach((elem) => {
  const dishDiv = document.createElement("div");
  dishDiv.classList.add("dish-div");
  const dishName = document.createElement("h2");
  dishName.textContent = elem.dishName;
  dishDiv.appendChild(dishName);
  const dishDescription = document.createElement("p");
  dishDescription.textContent = elem.dishDescription;
  dishDiv.appendChild(dishDescription);
  const dishPrice = document.createElement("p");
  dishPrice.textContent = elem.dishPrice;
  dishDiv.appendChild(dishPrice);
  const dishImage = document.createElement("img");
  dishImage.src = elem.imagePath;
  dishDiv.appendChild(dishImage);
  menuPage.appendChild(dishDiv);
});

export { getMenuPage };
