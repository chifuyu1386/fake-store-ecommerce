const API_URL = "https://fakestoreapi.com";

async function getProducts() {

  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();
  return products;
}

async function getProductById(id) {

  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = response.json();
  return product;
}


export {
  getProducts,
  getProductById
};

