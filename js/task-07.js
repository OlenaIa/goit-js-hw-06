const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onValueInput);

function onValueInput(event) {
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
}