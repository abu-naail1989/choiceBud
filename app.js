// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
const grocery = document.getElementById("grocery");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    // add class to element
    element.classList.add("grocery-item");

    // add attribute and it's value (id)
    const atrribute = document.createAttribute("data-id");
    atrribute.value = id;

    //  append atrribute to element

    element.setAttributeNode(atrribute);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

    // append child (element-article) to the div wit class of grocery-list
    list.appendChild(element);
    // display alert
    displayAlert(`${value} added to the lst`, "success");

    // show container( div with class of grocery-container) which has been hidden in css
    container.classList.add("show-container");
    setBackToDefault();
  } else if (value && editFlag) {
  } else {
    displayAlert("please enter value", "danger");
  }
}

// FUNCTIONS

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
}

// remove alert
setTimeout(function () {
  alert.textContent = "";
  alert.classList.remove(`alert-${action}`);
}, 3000);

// set back to default

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
