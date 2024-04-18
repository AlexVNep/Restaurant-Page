import muscleBullDog from "./images/muscleBullDog.jpg";

const homePage = document.createElement("div");
homePage.classList.add("home-page");

//create restaurant title
const name = document.createElement("h1");
name.classList.add("restaurant-title");
name.textContent = "The Protein Bar";
homePage.appendChild(name);

//create home page text div
const textDiv = document.createElement("div");
textDiv.classList.add("text-container");
textDiv.textContent = "We've got protein for dayz, boy!";
homePage.appendChild(textDiv);

//create home page image div
const imageDiv = document.createElement("div");
imageDiv.classList.add("image-container");
const image1 = new Image();
image1.src = muscleBullDog;

homePage.appendChild(imageDiv);
imageDiv.appendChild(image1);

export function getHomePage() {
  return homePage;
}
