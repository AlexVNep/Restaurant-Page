const aboutPage = document.createElement("div");
aboutPage.classList.add = "about-page";

const aboutText = document.createElement("h1");
aboutText.textContent = "About The Protein Bar";
aboutPage.appendChild(aboutText);

const aboutText2 = document.createElement("p");
aboutText2.textContent =
  "We at The Protein Bar cannot get enough of our protein! We just have such a passion for protein that we made a bar dedicated to it.";
aboutPage.appendChild(aboutText2);

const contact = document.createElement("div");
contact.classList.add("contact");

const contactText = document.createElement("p");
contactText.textContent = "Contact Us";
contact.appendChild(contactText);
const phoneNumber = document.createElement("p");
phoneNumber.textContent = "Phone Number: 206-555-1212";
contact.appendChild(phoneNumber);
const email = document.createElement("p");
email.textContent = "Email: fakest@fakeGmail.com";
contact.appendChild(email);
const address = document.createElement("p");
address.textContent = "Address: 123 Fake Street, Fake City, Fake State";
contact.appendChild(address);

aboutPage.appendChild(contact);

function getAboutPage() {
  return aboutPage;
}

export { getAboutPage };
