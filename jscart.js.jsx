let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Додано в корзину");
}

function getCart() {
  return cart;
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
}