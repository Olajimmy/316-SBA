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
//form function declaration

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
  confirmPass();
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
function confirmPass() {
  const comPassword = confirmPassword.value;
  const passwordVal = password.value;

  if (comPassword == passwordVal) {
    console.log("password matches");
    confirm("would you like us to save your informations?");
  } else {
    console.log("password doesnt match");
    alert("Password doesn't match!");
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

  //

  // h2tag.innerText = "welcome to my webpage";
  //h2tag.style.color = "green";
}

//game
function game() {
  const input = inputVal.value;

  if (input > 0 && input <= 10) {
    inside.innerText = "yes you're in for a treat.";
    myDiv.style.backgroundColor = "#3f88c5";
    myDiv.style.height = "300px";
    h2tag.innerText = "welcome to my webpage";
    h2tag.style.color = "green";
    console.log("congratulations, you get to explore my webpage");
    // div elements
    const para = document.createElement("div");
    const para2 = document.createElement("div");
    const para3 = document.createElement("div");
    const mainDiv = document.createElement("div");
    mainDiv.style.border = "0px solid, black";
    mainDiv.style.height = "200px";
    mainDiv.style.display = "flex";
    mainDiv.style.justifyContent = "space-around";

    //div tag inner text.
    para.innerText = "This can be a card.";
    para2.innerText = "This can be a card.";
    para3.innerText = "This cab also be a card.";
    //setting border and order attributes to div tags

    para.style.border = "0px solid, black";
    para.style.backgroundColor = "#e8cee4";

    para2.style.border = "0px solid, black";
    para2.style.backgroundColor = "#cfb3ec";

    para3.style.border = "0px solid, black";
    para3.style.backgroundColor = "#ac9cf6";

    //appending to main div
    mainDiv.appendChild(para);
    mainDiv.appendChild(para2);
    mainDiv.appendChild(para3);
    //appending main div to body
    document.body.appendChild(mainDiv);
    iterate();
  } else {
    console.log("try again");
    h2tag.innerText = "Try Again!";
    h2tag.style.color = "red";
    inside.innerText = "You need to pass the game!.";
  }
}

function iterate() {
  const elements = document.querySelectorAll(".my-class");
  const a = elements.length;
  //console.log(a);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "green";
    // elements[i].innerText = "can we be friends?";

    //console.log(elements[i]);
  }
}

// 1. Create a template element
const template = document.createElement("template");
template.innerHTML = `
  <div class="item">
    <h3>Item Title</h3>
    <p>Item Description</p>
  </div>
`;

// 2. Create a document fragment
const fragment = document.createDocumentFragment();

// 3. Clone the template content into the fragment
const clone = template.content.cloneNode(true);
fragment.appendChild(clone);

// 4. Manipulate the cloned content within the fragment
const itemTitle = fragment.querySelector(".item h3");
itemTitle.textContent = "New Item Title";

// 5. Append the fragment to the DOM
document.body.appendChild(fragment);
//confirm pop up
// function popup() {
//   if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }
// }
// popup();
