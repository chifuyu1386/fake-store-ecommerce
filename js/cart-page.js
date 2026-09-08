import {
  getCart,
  removeFromCart,
  updateQuantity
} from "./cart.js";

const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");

function displayCart() {

  const cart = getCart();
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    cartSubtotal.textContent = "$0";
    cartTotal.textContent = "$0";

    return;
  }

  cart.forEach(product => {
    cartItems.innerHTML += `
            <div class="cart-item">

                <img 
                    src="${product.image}" 
                    alt="${product.title}"
                >

                <div class="cart-item-info">

                    <h3>
                        ${product.title}
                    </h3>

                    <p>
                        $${product.price}
                    </p>

                </div>


                <div class="cart-item-actions">

                    <button 
                        class="quantity-btn"
                        data-action="decrease"
                        data-id="${product.id}"
                    >
                        -
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button 
                        class="quantity-btn"
                        data-action="increase"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                    <button 
                        class="remove-btn"
                        data-id="${product.id}"
                    >
                        Remove
                    </button>

                </div>

            </div>
        `;
  });

  calculateTotal(cart);
}

function calculateTotal(cart) {

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  cartSubtotal.textContent = `$${total.toFixed(2)}`;
  cartTotal.textContent = `$${total.toFixed(2)}`;

}

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const productId = Number(button.dataset.id);

  const cart = getCart();

  const product = cart.find((item) => {
    return item.id === productId;
  });

  if (!product) {
    return;
  }

  if (button.classList.contains("remove-btn")) {
    removeFromCart(productId)

    displayCart();

    return;
  }


  if (button.dataset.action === "increase") {
    updateQuantity(
      productId,
      product.quantity + 1
    );

    displayCart();

    return;
  }

  if (button.dataset.action === "decrease") {

    if (product.quantity > 1) {

      updateQuantity(
        productId,
        product.quantity - 1
      );

    } else {

      removeFromCart(productId);

    }

    displayCart();

  }
})

displayCart();