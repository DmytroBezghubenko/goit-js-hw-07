const regForm = document.querySelector(".login-form");
regForm.addEventListener("submit", checkForm);
const users = {};
function checkForm (event){
    event.preventDefault();
    const formA = event.target;
    const emailForm = formA.elements.email.value.trim();
    const passwForm = formA.elements.password.value.trim();
    if (emailForm === "" || passwForm === "") {
        return alert('All form fields must be filled in');
        
    } else {
        users[emailForm] = passwForm;
        formA.reset();
    }
    console.log(users);

}

