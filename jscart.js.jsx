// jscart.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const product = window.allProducts.find(p => p.id === id);
    if (!product) return;

    // Уникаємо дублів
    if (cart.some(item => item.id === id)) {
        alert("Цей товар вже в кошику!");
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`✅ ${product.name} додано в кошик`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
}

function getCart() {
    return cart;
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) el.textContent = cart.length;
}

// Автоматичне оновлення лічильника при завантаженні
document.addEventListener('DOMContentLoaded', updateCartCount);