const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", onValidButtonBlur);

function onValidButtonBlur(event) {
    inputRef.value.length >= parseInt(inputRef.dataset.length) ? isValueValid() : isValueInvalid();
};

function isValueValid() {
    inputRef.classList.contains('invalid') ? inputRef.classList.replace('invalid', 'valid') : inputRef.classList.add('valid');
};

function isValueInvalid() {
    inputRef.classList.contains('valid') ? inputRef.classList.replace('valid', 'invalid') : inputRef.classList.add('invalid');
};