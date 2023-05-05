const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');



inputRef.addEventListener("input", (event) => {
    event.currentTarget.value === '' ? spanRef.textContent = 'Anonymous' : spanRef.textContent = event.currentTarget.value;
})