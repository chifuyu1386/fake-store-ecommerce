import { getProducts } from "./api.js";


const productGrid = document.getElementById("productsGrid");
const filterButtons = document.querySelectorAll(".category-filters button");

let allProducts = [];

async function loadProducts() {
  try {
    const products = await getProducts();
    
    allProducts = products;

    displayProducts(allProducts);

  } catch (error) {

    console.log(error);

  }
}

function displayProducts(products) {

  productGrid.innerHTML = "";

  products.forEach(product => {

    productGrid.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.title}">

                <h3>${product.title}</h3>

                <p>$${product.price}</p>

                <a href="./product.html?id=${product.id}">
                    View Product
                </a>

            </div>
        `;
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    const category = button.dataset.category;

    if (category  === "all") {

      displayProducts(allProducts);

      return;
    }

    const filteredProducts = allProducts.filter(product => {
      return product.category === category;
    })

    displayProducts(filteredProducts);
    
  });
});


loadProducts();