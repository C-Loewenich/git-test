const getBurgerNav = document.querySelector(".burger-nav");
const getMainNav = document.querySelector(".main-nav");
const getColorToggleNav = document.querySelector(".color-toggle-nav");
const bodyElement = getMainNav.parentElement;
const getBodyText = document.querySelector(".color-text");
const colorArray = document.querySelectorAll(".main-nav ul li");
const colorsToReset = document.querySelectorAll(".color-toggle-nav ul li div");

let currentColor = window.getComputedStyle(bodyElement).backgroundColor;
let checkColorToggleNavOpen = false;

// Setting keybord shortcuts
document.addEventListener("keyup", (pressedKey) => {
  if (pressedKey.key === "c") {
    if (checkColorToggleNavOpen === false) {
      toggleNavShow();
    } else {
      toggleNavHide();
    }
  }
  if (pressedKey.key === "1") {
    changeBackgroundColor(document.querySelector(".gray"));
  }
  if (pressedKey.key === "2") {
    changeBackgroundColor(document.querySelector(".red"));
  }
  if (pressedKey.key === "3") {
    changeBackgroundColor(document.querySelector(".blue"));
  }
  if (pressedKey.key === "4") {
    changeBackgroundColor(document.querySelector(".green"));
  }
  if (pressedKey.key === "5") {
    changeBackgroundColor(document.querySelector(".yellow"));
  }
  if (pressedKey.key === "6") {
    changeBackgroundColor(document.querySelector(".purple"));
  }
});

// indicate the selected color
const indicateSelectedColor = function (clickedArrayElement) {
  for (i = 0; i < 6; i++) {
    colorsToReset[i].style.borderRadius = "50%";
  }
  clickedArrayElement.children[0].style.borderRadius = "20%";
};

indicateSelectedColor(document.querySelector(".gray"));

// Display the color code for the choosen color
let setColorText = function () {
  getBodyText.innerHTML = "Color Code: " + currentColor + ".";
};

// Control main menu
getMainNav.addEventListener("mouseover", function () {
  toggleNavShow();
});

getMainNav.addEventListener("mouseout", function () {
  toggleNavHide();
});

let toggleNavShow = function () {
  getColorToggleNav.classList.add("color-toggle-nav-show");
  getBurgerNav.style.color = "#707070";
  getMainNav.classList.add("main-nav-active");
  checkColorToggleNavOpen = true;
};

let toggleNavHide = function () {
  getColorToggleNav.classList.remove("color-toggle-nav-show");
  getBurgerNav.style.color = "#505050";
  getMainNav.classList.remove("main-nav-active");
  checkColorToggleNavOpen = false;
};

// Control color menu
for (e = 0; e < colorArray.length; e++) {
  colorArray[e].addEventListener("click", function () {
    changeBackgroundColor(this);
  });
}

let changeBackgroundColor = function (clickedElement) {
  currentColor = window.getComputedStyle(
    clickedElement.children[0]
  ).backgroundColor; // gets the color of the div of the clicked element
  bodyElement.style.backgroundColor = currentColor; // Sets the body color to the choosen color
  indicateSelectedColor(clickedElement); // makes the rounded color sample to a squear to indicate the selected color
  setColorText(); // display the color code for the selected color
  toggleNavHide(); // closes the color menu once a color has been choosen.
};
