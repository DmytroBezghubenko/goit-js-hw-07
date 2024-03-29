function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCr = document.querySelector("[data-create]");
const btnDel = document.querySelector("[data-destroy]")
const amount = document.querySelector("input[type='number']");
const boxes = document.querySelector('#boxes');

btnCr.addEventListener("click", () => {
  if (amount.value <= 100 && amount.value >= 1) {
    delBox();
    addBox();
    amount.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
    amount.value = '';
  }
});
function addBox() {
  boxes.insertAdjacentHTML("afterbegin", createBoxes(amount));
}
function createBoxes(amount) {
  let code = [];
  let size = 30;
    for (let i = 0; i < amount.value; i++){
      code.push(`<div id="boxes${i}" style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()};"></div>`);
      size += 10;
    }
  return code.join('');
}

btnDel.addEventListener("click", delBox);

function delBox() {
  const boxContainer = document.querySelector('#boxes');
  boxContainer.innerHTML = '';
}


