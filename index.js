const recipesNameTag = document.querySelector("#recipe-name");
const recipesName = recipesNameTag.textContent;
const recipesTagName = recipesNameTag.tagName;

console.log("Recipe name: " + recipesName);
console.log("Recipe tag Name: " + recipesTagName);

const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

const description = document.querySelector(".description");
const fontSize = getStyle(description, "font-size");
console.log("Font size: " + fontSize);

const imageContainer = document.querySelector(".image-container");
const imgAlt = imageContainer
  .getElementsByTagName("img")[0]
  .getAttribute("alt");
console.log("image alt: " + imgAlt);

const imgUrl = imageContainer
  .getElementsByTagName("img")[0]
  .getAttribute("src");

const imgHeight = getStyle(
  imageContainer.getElementsByTagName("img")[0],
  "height"
);

const imgWidth = getStyle(
  imageContainer.getElementsByTagName("img")[0],
  "width"
);

const image = {
  url: imgUrl,
  height: imgHeight,
  width: imgWidth,
};

console.log(image);

const firstList = document.querySelector(".ingredients-list-bottom");

const secondList = document.querySelector(".ingredients-list-paste");

const ingredientsCount =
  firstList.getElementsByTagName("li").length +
  secondList.getElementsByTagName("li").length;

console.log("Ingredients: " + ingredientsCount);

console.log("The fourth element: " + secondList.children[3].textContent);

const instructionsList = document.querySelector(".instructions-list");
const listItems = instructionsList.getElementsByTagName("li");

const instructionsListArray = [];

for (let i = 0; i < listItems.length; i++) {
  instructionsListArray.push({
    order: i + 1,
    text: listItems[i].innerText,
  });
}

console.log(instructionsListArray);
