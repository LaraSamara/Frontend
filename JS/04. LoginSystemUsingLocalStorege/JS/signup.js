const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const users = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameEle = e.target.elements["name"];
    const emailEle = e.target.elements["email"];
    const passwordEle = e.target.elements["password"];
    const name = nameEle.value;
    const email = emailEle.value;
    const password = passwordEle.value;

    if (validation(e.target.elements["name"], "nameMsg") &&
        validation(e.target.elements["email"], "emailMsg") &&
        validation(e.target.elements["password"], "passwordMsg")) {
        if (addUser({ name, email, password })) {
            alert("Success ...");
            clear({ name: nameEle, email: emailEle, password: passwordEle });
            window.location.href = "signin.html";
        }

    }
});

for (let i = 0; i < inputs.length; ++i) {
    inputs[i].addEventListener("blur", () => {
        validation(inputs[i], `${inputs[i].name}Msg`);
    });
}

function validation(element, msgId) {
    const msg = document.getElementById(msgId);
    const regex = {
        name: /^[a-zA-Z]{3,30}$/,
        email: /^\w{3,15}@gmail\.com$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/,
    }
    if (regex[element.id].test(element.value)) {
        msg.classList.add('d-none');
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        return true;
    } else {
        msg.classList.remove('d-none');
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        return false;
    }
}

function addUser(user) {
    if (users.find((u) => u.email == user.email)) {
        alert("User Email already Exists..");
        return false;
    }
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
    return true;
}

function clear(user) {
    user.name.value = null;
    user.email.value = null;
    user.password.value = null;
}

