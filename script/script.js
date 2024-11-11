console.log("connected to script");
const form2 = document.getElementById("registration");
console.log(form2);

uName = form2.elements["username"];
const email = form2.elements["email"];
const password = form2.elements["password"];
const confirmPassword = form2.elements["passwordCheck"];
const checkBox = form2.elements["terms"];

console.log(uName);
console.log(email);
console.log(password);
console.log(confirmPassword);
console.log(checkBox);

form2.addEventListener("submit", validate2);
//form2 function declaration

// further functions

function validate2(evt) {
  const name = uName.value;
  evt.preventDefault();
  //console.log(name);
  if (name !== "" && hasTwoUniqueChars(name)) {
    console.log("you entered", name);
  } else {
    console.log("enter unique characters");
    name.focus;
  } //else if (name == "") {
  //     // const charSet = new Set(name);
  //     // return charSet.size >= 2;
  //     console.log("username is required");
  //     uName.focus();
  //   }
  validateEmail(email);
  const emailVal = email.value;
  if (emailVal.includes("@example.com")) {
    console.log("email cannot include example.com");
  } else if (emailVal !== "") {
    console.log("good email");
  }
  //password invocation
  passwordValidation(password);

  //checkbox invocation
  //var dump

  //   let userName = document.getElementById("user").value;
  //   let email1 = document.getElementById("emailID").value;
  //   let password1 = document.getElementById("passwordId").value;
  //   // let terms = document.getElementById("termsId").value;

  localStorage.setItem("user", uName);
  localStorage.setItem("emailadd", email);
  localStorage.setItem("pass", password);
}

//username characters validation
function hasTwoUniqueChars(uName) {
  let newLength = uName.length;
  console.log(newLength);
  if (newLength >= 4) {
    const charSet = new Set(uName);
    return charSet.size >= 2;
  } else {
    console.log("enter minimum of 4 characters");
  }
}
//email validation
function validateEmail(email) {
  const checkMail = email;
  return console.log(checkMail);
}

//password validation
function passwordValidation(password) {
  const passwordVal = password.value;
  console.log(passwordVal);
  const hasUpperCase = /[A-Z]/.test(passwordVal);
  const hasLowerCase = /[a-z]/.test(passwordVal);
  //const hasUsername = [uName].test(passwordVal);
  const runThis = /[^A-Za-z0-9]/.test(passwordVal);

  if (passwordVal == "") {
    console.log("password cannot be empty");
  } else if (passwordVal.length < 12) {
    console.log("password cannot be less than 12 characters");
  } else if (passwordVal == "password") {
    console.log("password cannot contain thw word password");
  } else if (!runThis) {
    console.log(
      "Password must contain at least one number, uppercase letter, lowercase letter and special character"
    );
  } else {
    console.log("Password matches specification");
  }
}

//confirm password fuction
function confirm() {
  const comPassword = confirmPassword.value;
  if (comPassword == passwordVal) {
    console.log("password matches");
  } else {
    console.log("password doesnt match");
  }
}

//const results = document.querySelector("input").innerHTML;
//console.log(results);
const myDiv = document.querySelector(".cont");
//parent-child-sibling relationship
const body = document.querySelector("body");
const inside = body.firstElementChild;
console.log(inside);

const h2tag = document.getElementById("h2tag");
const h3tag = document.getElementById("h3tag");
//console.log(design);

//myDiv.style.backgroundColor = "blue";

const form = document.getElementById("formId"); // Replace 'myList' with the ID of your list element

const inputVal = form.elements["myInput"];
console.log(inputVal);
//create element

//event listener
form.addEventListener("submit", validate);

//main function declaration
function validate(evt) {
  evt.preventDefault();
  const input = inputVal.value;
  console.log(input);
  game();
  design = "100%";
  //body manipulation
  inside.style.color = "red";
  inside.innerText = "yes you're in for a treat.";

  //

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
    // div elements
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
    para.style.backgroundImage = "url(view.jpg)";

    para2.style.border = "1px solid, black";
    para3.style.border = "1px solid, black";
    //appending to body
    mainDiv.appendChild(para);
    mainDiv.appendChild(para2);
    mainDiv.appendChild(para3);
    document.body.appendChild(mainDiv);
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
