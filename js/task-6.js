function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCr = document.querySelector("[data-create]");
const btnDel = document.querySelector("[data-destroy]")
const amount = document.querySelector("input[type='number']");
const text = document.querySelector("#controls");
const createdBoxes = document.querySelectorAll('[id^="box"]');
btnCr.addEventListener("click", () => {
  if (amount.value <= 100 && amount.value >= 1) {
    removeBoxes();
    adder();
    amount.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
    amount.value = '';
  }
});
function adder() {
  text.insertAdjacentHTML("afterend", createBoxes(amount));
}
function createBoxes(amount) {
  let code = [];
  let size = 30;
  if (amount.value <= 100 && amount.value >= 1) {
    for (let i = 0; i < amount.value; i++){
      code.push(`<div id="boxes${i}"><style>#boxes${i} {height: ${size}px;width:  ${size}px;background-color: ${getRandomHexColor()};}</style></div>`);
      size += 10;
    }
  return code.join('');
  } else {
    return code;
  } 
}

btnDel.addEventListener("click", () => {
  amount.value = '';
  removeBoxes();
});
function removeBoxes() {
  const createdBoxes = document.querySelectorAll('[id^="box"]');
  createdBoxes.forEach(box => {
    box.remove();
  });
}


