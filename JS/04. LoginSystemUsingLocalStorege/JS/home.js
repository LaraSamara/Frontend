const button = document.querySelector("button");
const welcome = document.querySelector("p");

button.addEventListener("click", () => {
    localStorage.removeItem("sessionUsername");
    alert("Success...");
    setTimeout(() => {
        window.location.href = "signin.html";
    }, 1000);
})

if (!localStorage.getItem("sessionUsername")) {
    window.location.href = "signin.html";
} else {
    welcome.append(`Welcome ${localStorage.getItem("sessionUsername")}`);
}