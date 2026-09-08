import { getCart } from "./cart.js";


const cartCount = document.querySelector(".cart-count");


function updateCartCount() {

    const cart = getCart();

    const totalQuantity = cart.reduce((total, product) => {

        return total + product.quantity;

    }, 0);

    cartCount.textContent = totalQuantity;

}


updateCartCount();
window.addEventListener("cartUpdated", updateCartCount);