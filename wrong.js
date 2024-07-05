const header = document.getElementsByTagName("header");
header[0].style.justifyContent = "flex-start";
header[0].style.borderBottomColor = "lightgray";

const logoText = document.querySelector(".logo-text");
logoText.style.fontSize = "24px";
logoText.style.fontWeight = "700";
logoText.style.textTransform = "uppercase";
logoText.style.color = "#384241";

const recipeName = document.querySelector("#recipe-name");
recipeName.innerText = "Frozen Cheescake";

const timeContainer = document.querySelector(".time-container");
timeContainer
  .getElementsByTagName("span")[0]
  .setAttribute("class", "material-icons");

const time = document.querySelector(".time");
time.innerText = "60+ min";

const imageContainer = document.querySelector(".image-container");
imageContainer.getElementsByTagName("img")[0].src =
  "assets/frozen-cheesecake-slice.jpg";

const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";

const ingredientsListBottom = document.querySelector(
  ".ingredients-list-bottom"
);
const tillBottomString = `
 <li>15st digistivetex</li>
 <li>Lite smör</li>
`;

ingredientsListBottom.innerHTML = tillBottomString;

const ingredientsListPaste = document.querySelector(".ingredients-list-paste");
ingredientsListPaste.children[2].innerText = "3tsk vaniljsocker";
const li = document.createElement("li");
li.innerText = "400g naturell philadelphiaost";
ingredientsListPaste.appendChild(li);

const instructions = document.querySelector(".instructions");
instructions.classList.remove("shadow");

const instructionsList = document.querySelector(".instructions-list");

const li2 = document.createElement("li");
li2.innerText =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

instructionsList.replaceChild(li2, instructionsList.children[1]);

const li9 = document.createElement("li");
li9.innerText = "Ställ in i frysen över natten.";

instructionsList.replaceChild(li9, instructionsList.children[8]);
