const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');



inputRef.addEventListener("input", (event) => {
    const valueWithoutSpace = event.currentTarget.value.trim();
    valueWithoutSpace === '' ? spanRef.textContent = 'Anonymous' : spanRef.textContent = valueWithoutSpace;
})