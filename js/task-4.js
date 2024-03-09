const regForm = document.querySelector(".login-form");
regForm.addEventListener("submit", checkForm);
const formData = {};
function checkForm (event){
    event.preventDefault();
    const formA = event.target;
    const emailForm = formA.elements.email.value.trim();
    const passwForm = formA.elements.password.value.trim();
    if (emailForm === "" || passwForm === "") {
        return alert('All form fields must be filled in');
        
    } else {
        formData.email = emailForm;
        formData.password = passwForm;
        formA.reset();
    }
    console.log(formData);
}

