const form = document.querySelector('form');
const email = document.querySelector('.input')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', event => {
    event.preventDefault();

    validateEmail(email);
})

const validateEmail = (email) => {
    if(isValidEmail(email.value)){
        // setSuccess(email);
        errorMessage.textContent = ""
        // errorMessageDisplayErase(email);
    } else if(email.value === '') {
        // setError(email);        
        // const outlineInput = email.parentElement;
        // const inputContainer = outlineInput.parentElement;
        errorMessage.textContent = "Oops! Please check your email"
        // inputContainer.querySelector('.error-message').textContent = 'Email cannot be empty'
    } else {
        setError(email)
        // const outlineInput = email.parentElement;
        // const inputContainer = outlineInput.parentElement;
        // inputContainer.querySelector('.error-message').textContent = 'Looks like this is not an email'
        errorMessage.textContent = "Oops! Please check your email"
    }
}

// const setSuccess = (element) => {
//     element.parentElement.classList.remove('error');
//     element.parentElement.classList.add('success');
// }

// const setError = (element) => {
//     const inputControl = element.parentElement;
//     inputControl.classList.remove('success');
//     inputControl.classList.add('error');
// }

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// const errorMessageDisplay = (element, message) => {
//     const outlineInput = element.parentElement;
//     const inputContainer = outlineInput.parentElement;
//     inputContainer.querySelector('.error-message').textContent = message
// }

// const errorMessageDisplayErase = (element) => {
//     const outlineInput = element.parentElement;
//     const inputContainer = outlineInput.parentElement;
//     inputContainer.querySelector('.error-message').textContent = ''
// }