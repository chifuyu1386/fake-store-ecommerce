import { getProductById } from "./api.js";
import { addToCart } from "./cart.js";

const productDetails = document.getElementById("productDetails");

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

async function loadProduct() {
    try {
        const product = await getProductById(productId);
        productDetails.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h1>${product.title}</h1>

                <p class="product-price">
                    $${product.price}
                </p>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-rating">
                    ⭐ ${product.rating.rate}
                    (${product.rating.count} reviews)
                </div>

                <button class="add-to-cart">
                    Add to Cart
                </button>

            </div>
        `;

        const addToCartButton = document.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () => {
            addToCart(product);
            window.dispatchEvent(new Event("cartUpdated"));
            alert("Product added to cart!");
        });

    } catch (error) {
        console.log(error);
    }
}

loadProduct();