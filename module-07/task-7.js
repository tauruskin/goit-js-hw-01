// const liItemRefArray = document.querySelectorAll(".item");

// console.log(`В списке ${liItemRefArray.length} категории.`);

// liItemRefArray.forEach((element) => {
//   console.log(element.children[0].textContent);
//   console.log(element.children[1].children.length);
// });

//
// --------------------------------------------
// Задание 2
// --------------------------------------------
//

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsRef = document.querySelector("#ingredients");
// const ingredientsRefArray = ingredients.map((ingredient) => {
//   const ingRef = document.createElement("li");
//   ingRef.textContent = ingredient;
//   return ingRef;
// });
// ingredientsRef.append(...ingredientsRefArray);

//
// --------------------------------------------
// Задание 3
// --------------------------------------------

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryRef = document.querySelector("#gallery");

// const imagesArray = images.reduce((acc, image) => {
//   return (acc += `<li class='item'>
//   <img class='item_img' src = "${image.url}" alt = "${image.alt}" width="250" height="250">
//   </li>`);
// }, "");

// galleryRef.insertAdjacentHTML("afterbegin", imagesArray);

// --------------------------------------------
// Задание 4
// --------------------------------------------
//
// const decrementButton = document.querySelector(`[data-action="decrement"]`);
// const incrementButton = document.querySelector(`[data-action="increment"]`);

// let counterValue = 0;

// let value = document.getElementById("value");

// function increment() {
//   updateCurentValue("increment");
//   updateNewValue();
// }
// function decrement() {
//   updateCurentValue("decrement");
//   updateNewValue();
// }
// const updateNewValue = () => {
//   value.innerHTML = counterValue;
// };
// const updateCurentValue = (str) => {
//   if (str === "increment") {
//     counterValue++;
//   } else {
//     counterValue--;
//   }
// };
// decrementButton.addEventListener("click", decrement);
// incrementButton.addEventListener("click", increment);

//
// --------------------------------------------
// Задание 5
// --------------------------------------------

// const inputIn = document.querySelector("#name-input");
// const inputOut = document.querySelector("#name-output");

// inputIn.addEventListener("input", (e) => {
//   inputOut.textContent = e.target.value;
//   if (inputOut.textContent === "") {
//     inputOut.textContent = "незнакомец";
//   }
// });
//

//
// --------------------------------------------
// Задание 6
// --------------------------------------------
//

// const input = document.querySelector("#validation-input");

// input.addEventListener("input", (e) => {
//   if (e.target.value.length < e.target.getAttribute("data-length")) {
//     input.setAttribute("class", "invalid");
//   } else {
//     input.setAttribute("class", "valid");
//   }
// });

//
// --------------------------------------------
// Задание 7
// --------------------------------------------
//

// const formSize = document.querySelector("#font-size-control");
// const formSpan = document.querySelector("#text");

// formSize.addEventListener("input", changeFont);

// function changeFont() {
//   formSpan.style.fontSize = `${formSize.value}px`;
// }

//
// --------------------------------------------
// Задание 8 (ще не зробив, колись дороблю:)) )
// --------------------------------------------
//

// const collection = document.querySelector("#boxes");
// const input = document.querySelector("#controls input");
// const createCollection = document.querySelector(`[data-action="render"]`);
// const deleteCollection = document.querySelector(`[data-action="destroy"]`);

// createCollection.addEventListener("click", createBoxes);
// deleteCollection.addEventListener("click", clearCollection);

// function createBoxes(amount) {
//   clearCollection();
// }

// if (amount >= 1) {
//   let boxArr = [];
//   let box;
// }
