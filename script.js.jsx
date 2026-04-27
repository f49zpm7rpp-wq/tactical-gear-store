// script.js
function renderHits() {
    const grid = document.getElementById('hits-grid');
    if (!grid || !window.allProducts) return;

    grid.innerHTML = window.allProducts.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="rating">★ ${p.rating || '4.8'}</div>
                <div class="price">${p.price.toLocaleString('uk-UA')} ₴</div>
                <button class="add-btn" onclick="addToCart(${p.id}); event.stopImmediatePropagation();">
                    Додати в кошик
                </button>
            </div>
        </div>
    `).join('');
}

function goToShop(category = 'all') {
    // Тимчасово просто переходимо на shop.html (створи його пізніше)
    // Можна додати параметр: window.location.href = `shop.html?cat=${category}`;
    window.location.href = 'shop.html';
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    renderHits();
    // updateCartCount() вже є в jscart.js
});