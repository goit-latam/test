// const bodyEl = document.querySelector('body');
// const changeOfColor = document.querySelector('.change-color');
// const colorEl = document.querySelector('.color');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// let currentColor = null;

// changeOfColor.addEventListener('click', onButtonClick);

// function onButtonClick(event) {
//   event.preventDefault();
//   currentColor = getRandomHexColor();

//   bodyEl.style.backgroundColor = currentColor;
//   colorEl.textContent = currentColor;
// }

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', function () {
  const color1 = getRandomHexColor();
  document.body.style.backgroundColor = color1;
  color.textContent = color1;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
