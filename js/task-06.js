const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", onValidButtonBlur);

// -------- First version-----

function onValidButtonBlur(event) {
    if (inputRef.value.length === parseInt(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };

    if (inputRef.value.length === 0) {
        inputRef.classList.remove('invalid', 'valid');
    };
};


// -------- Second version-----

// function onValidButtonBlur(event) {
//     inputRef.value.length === parseInt(inputRef.dataset.length) ? isValueValid() : isValueInvalid();
// };

// function isValueValid() {
//     inputRef.classList.contains('invalid') ? inputRef.classList.replace('invalid', 'valid') : inputRef.classList.add('valid');
// };

// function isValueInvalid() {
//     inputRef.classList.contains('valid') ? inputRef.classList.replace('valid', 'invalid') : inputRef.classList.add('invalid');
// };