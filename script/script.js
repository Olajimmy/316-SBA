console.log("connected to script");

const results = document.querySelector("input").innerHTML;
//console.log(results);
const myDiv = document.querySelector(".cont");
const h2tag = document.getElementById("h2tag");
const h3tag = document.getElementById("h3tag");
//console.log(design);

//myDiv.style.backgroundColor = "blue";

const form = document.getElementById("formId"); // Replace 'myList' with the ID of your list element

const inputVal = form.elements["myInput"];
console.log(inputVal);
//create element
const para = document.createElement("div");
const para2 = document.createElement("div");
const para3 = document.createElement("div");
const mainDiv = document.createElement("div");
mainDiv.style.border = "1px solid, black";
mainDiv.style.height = "200px";
mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "space-around";

//div tag inner text.
para.innerText = "this is a div tag.";
para2.innerText = "This is a div tag.";
para3.innerText = "This is a div tag.";
//setting border and order attributes to div tags

para.style.border = "1px solid, black";
para2.style.border = "1px solid, black";
para3.style.border = "1px solid, black";
//appending to body
mainDiv.appendChild(para);
mainDiv.appendChild(para2);
mainDiv.appendChild(para3);
document.body.appendChild(mainDiv);

//event listener
form.addEventListener("submit", validate);

//main function declaration
function validate(evt) {
  evt.preventDefault();
  const input = inputVal.value;
  console.log(input);
  game();
  design = "100%";

  // h2tag.innerText = "welcome to my webpage";
  //h2tag.style.color = "green";
}

//game
function game() {
  const input = inputVal.value;

  if (input > 0 && input <= 10) {
    myDiv.style.backgroundColor = "blue";
    myDiv.style.height = "300px";
    h2tag.innerText = "welcome to my webpage";
    h2tag.style.color = "green";
    console.log("congratulations, you get to explore my webpage");
  } else {
    console.log("try again");
    h2tag.innerText = "Try Again!";
    h2tag.style.color = "red";
  }
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
