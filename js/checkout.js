import { getCart } from "./cart.js";


const checkoutForm = document.getElementById("checkoutForm");

const checkoutItems = document.getElementById("checkoutItems");

const checkoutTotal = document.getElementById("checkoutTotal");


const isLoggedIn = localStorage.getItem("isLoggedIn");


if (isLoggedIn !== "true") {

    window.location.href = "./login.html";

}


const cart = getCart();


if (cart.length === 0) {

    window.location.href = "./cart.html";

}


function displayCheckout() {

    checkoutItems.innerHTML = "";


    cart.forEach((product) => {

        checkoutItems.innerHTML += `
            <div class="checkout-item">

                <span class="checkout-item-title">
                    ${product.title}
                </span>

                <span>
                    ${product.quantity} × $${product.price}
                </span>

            </div>
        `;

    });


    const total = cart.reduce((sum, product) => {

        return sum + product.price * product.quantity;

    }, 0);


    checkoutTotal.textContent = `$${total.toFixed(2)}`;

}


checkoutForm.addEventListener("submit", (event) => {

    event.preventDefault();


    localStorage.removeItem("cart");


    window.location.href = "./success.html";

});


displayCheckout();