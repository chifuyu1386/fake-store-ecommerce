function getCart()  {
  const cart = localStorage.getItem("cart");
  if (!cart){
    return [];
  }
  return JSON.parse(cart);
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart  =  getCart();
  const existingProduct = cart.find((item) => {
    return item.id === product.id;
  });

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  saveCart(cart)
}

function removeFromCart(productId) {
  const cart = getCart();
  const updatedCart = cart.filter((item) => {
    return item.id !== productId;
  });
  saveCart(updatedCart);
}

function updateQuantity(productId, quantity) {
  const cart =  getCart();
  const product = cart.find((item) => {
    return  item.id === productId;
  });
  if (product) {
    product.quantity = quantity;
  }
  saveCart(cart);
}

export {
  getCart,
  saveCart,
  addToCart,
  removeFromCart,
  updateQuantity
};
