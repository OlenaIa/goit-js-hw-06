function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.body;

btnRef.addEventListener('click', onButtonClickColor);

function onButtonClickColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}

