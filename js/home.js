import { getProducts } from "./api.js";

const featuredProducts = document.getElementById("featuredProducts");

async function loadFeaturedProducts() {
  try {
    const products = await getProducts();

    const featured = products.slice(0, 4);

    featuredProducts.innerHTML = "";

    featured.forEach((product) => {
      featuredProducts.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}">

                    <h3>${product.title}</h3>

                    <p>$${product.price}</p>

                    <a href="./pages/product.html?id=${product.id}">
                        View Product
                    </a>
                </div>
            `;
    }); 
} catch(error) {
  console.log(error)
}}

loadFeaturedProducts();
