// Button Click DOM Changes

const mainHeading = document.getElementById("main-heading");
const mainText = document.getElementById("main-text");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
    mainHeading.textContent = "JavaScript is Awesome!";
    mainText.textContent = "The DOM has been updated.";
    mainHeading.style.color = "blue";
    document.body.style.background = "lightyellow";
});

// Simple Counter

let countValue = 0;
const countDisplay = document.getElementById("count");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");

btnIncrease.addEventListener("click", () => {
    countValue++;
    countDisplay.textContent = countValue;
});

btnDecrease.addEventListener("click", () => {
    countValue--;
    countDisplay.textContent = countValue;
});