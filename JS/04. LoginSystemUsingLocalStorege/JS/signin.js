const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEle = e.target.elements["email"];
    const passwordEle = e.target.elements["password"];
    const password = passwordEle.value;
    const email = emailEle.value;
    if (validation(emailEle, "emailMsg") &&
        validation(passwordEle, "passwordMsg")) {
        if (login({ email, password })) {
            alert("Success ...")
            window.location.href = "home.html";
        }
    }
})

for (let i = 0; i < inputs.length; ++i) {
    inputs[i].addEventListener("blur", () => {
        validation(inputs[i], `${inputs[i].name}Msg`);
    })
}

function validation(element, msgId) {
    const msg = document.getElementById(msgId);
    const regex = {
        email: /^\w{3,15}@gmail\.com$/,
        password: /^.+$/
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

function login(user) {
    console.log(user)
    const users = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
    const selectedUser = users.find((u) => u.email === user.email);
    if (selectedUser?.email == user.email) {
        if (selectedUser?.password == user.password) {
            localStorage.setItem("sessionUsername", selectedUser.name)
            return true;
        } else {
            alert("Invalid Password ...");
            return false;
        }
    } else {
        alert("Invalid Email ...");
        return false;
    }
}