
const number=document.querySelector("number")

const addButton = document.querySelector('[value="addition"]');
const subtractButton = document.querySelector('[value="subtraction"]');
const multiplyButton = document.querySelector('[value="multiplication"]');
const divideButton = document.querySelector('[value="division"]');
const equalButton = document.querySelector('equal');

addButton.addEventListener('click',calculate)
subtractButton.addEventListener('click',calculate)
multiplyButton.addEventListener('click',calculate)
divideButton.addEventListener('click',calculate)
equalButton.addEventListener('click',calculate)
window.onload = calculate;


function calculate () {

}


