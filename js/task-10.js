function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', onButtonClickCreateBoxes);
btnDestroyRef.addEventListener('click', onButtonClickDestroyBoxes);

function createElement(size) {
  const elementRef = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 12px; margin-top: 12px"></div>`;
  return elementRef;
}

function onButtonClickCreateBoxes(event) {
  const numberBox = inputRef.value;
  const boxesOfElements = [];
  let size = 30;

  let allElementRef = '';

  for (let i = 0; i < numberBox; i++) {
    allElementRef += createElement(size);
    size += 10;
  }

  divBoxesRef.insertAdjacentHTML('afterbegin', allElementRef);
};

function onButtonClickDestroyBoxes(event) {
  divBoxesRef.innerHTML = '';
}

// --------------- Second version -----------

// function createElement(size) {
//   const elementRef = document.createElement('div');
//   elementRef.style.width = `${size}px`;
//   elementRef.style.height = `${size}px`;
//   elementRef.style.backgroundColor = getRandomHexColor();
//   elementRef.style.marginBottom = '12px';
//   elementRef.style.marginTop = '12px';
//   return elementRef;
// }
  
// function onButtonClickCreateBoxes(event) {
//   const numberBox = inputRef.value;
//   const boxesOfElements = [];
//   let size = 30;

//   for (let i = 0; i < numberBox; i++) {
//     boxesOfElements.push(createElement(size));
//     size += 10;
//   }

//   divBoxesRef.append(...boxesOfElements);
// }





