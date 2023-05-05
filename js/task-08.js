const formRef = document.querySelector('.login-form');
const buttonRef = document.querySelector('button');

formRef.addEventListener('submit', onSubmitFormValid);

function onSubmitFormValid(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    const dataForm = {
    email: email.value,
    password: password.value
    }
    
    if (dataForm.email === "" || dataForm.password === "") {
      return alert('Please, fill in all gaps');
    }
    
    console.table(dataForm);

    event.currentTarget.reset();
}
