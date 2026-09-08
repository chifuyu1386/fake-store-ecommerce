const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const loginMessage = document.getElementById("loginMessage");


loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();


    if (!email || !password) {

        loginMessage.textContent = "Please fill in all fields.";

        return;
    }


    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("userEmail", email);


    loginMessage.textContent = "Login successful!";


    setTimeout(() => {

        window.location.href = "./checkout.html";

    }, 1000);

});