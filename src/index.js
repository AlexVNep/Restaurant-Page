import { getHomePage } from "./displayHome.js";
import { getMenuPage } from "./menuPage.js";
import { getAboutPage } from "./aboutPage.js";
import "./style.css";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", (event) => {
  content.replaceChildren();
  content.append(getHomePage());
});

menuBtn.addEventListener("click", (event) => {
  content.replaceChildren();
  content.append(getMenuPage());
});

aboutBtn.addEventListener("click", (event) => {
  content.replaceChildren();
  content.append(getAboutPage());
});

content.append(getHomePage());
console.log("I am updating");
