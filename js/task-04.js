const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnInrementRef = document.querySelector('[data-action="increment"]');
const couneterRef = document.querySelector('#value');

let counterValue = 0;

btnDecrementRef.addEventListener("click", () => {
    counterValue -= 1;
    couneterRef.textContent = counterValue;
});

btnInrementRef.addEventListener("click", () => {
    counterValue += 1;
    couneterRef.textContent = counterValue;
})



