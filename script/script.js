console.log("connected to script");

const results = document.querySelector("input").innerHTML;
//console.log(results);
const myDiv = document.querySelector(".cont");
//console.log(design);

//myDiv.style.backgroundColor = "blue";

const form = document.getElementById("formId"); // Replace 'myList' with the ID of your list element

const inputVal = form.elements["myInput"];
console.log(inputVal);
//event listener
form.addEventListener("submit", validate);
//function declaration
function validate(evt) {
  evt.preventDefault();
  const input = inputVal.value;
  console.log(input);
  design = "100%";
  myDiv.style.backgroundColor = "blue";
  myDiv.style.height = "300px";
}

// results.forEach((result) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = inputVal.value; // Assuming each result in the array is a string
//   list.appendChild(listItem);
// });

// // importing data
// const inputElement = document.querySelector("myInput"); // Using name attribute
// //const currentValue = inputElement.value;
// const button = document.querySelector("button"); // importing the button
// console.log(button);
// button.addEventListener("submit", aHandler);

// function aHandler(evt) {
//     let label = document.querySelector('li');

// }
// aHandler();
//function declaration
//replace with functin head // function changeValue() {

// function aHandler(evt) {
//   const inputElement = document.getElementById("myInput");
//   val = inputElement.value;
//   console.log(val);
//   if (val == 5) {
//     console.log(
//       "good job! you won. you now have permission to explore the rest of my page"
//     );
//     // const button = document.querySelector("button");
//     // console.log(button);
//     button.style.backgroundColor = "red";
//   } else {
//     console.log("try again");
//   }

//   if (val == false) {
//     const list = document.querySelector("li");
//     console.log(list);
//     // let newList = document.createElement("li");
//     // let caList = document.querySelector("li");
//     // console.log(caList);
//     // caList = list.append(val);
//   }
//}
