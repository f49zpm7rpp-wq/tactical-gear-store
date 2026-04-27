// script.js

console.log("✅ script.js завантажився успішно!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM завантажено");

    const grid = document.getElementById('hits-grid');
    if (!grid) {
        console.error("Помилка: #hits-grid не знайдено");
        return;
    }

    if (!window.allProducts || window.allProducts.length === 0) {
        console.error("Помилка: allProducts порожній");
        return;
    }

    console.log("Товарів завантажено:", window.allProducts.length);

    let html = '';
    window.allProducts.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}" 
                     alt="${product.name}"
                     onerror="this.src='https://picsum.photos/id/237/600/400'; this.onerror=null;">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="rating">★ ${product.rating}</div>
                    <div class="price">${product.price.toLocaleString('uk-UA')} ₴</div>
                    <button class="add-btn" onclick="addToCart(${product.id}); event.stopImmediatePropagation();">
                        Додати в кошик
                    </button>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
    console.log("✅ Товари успішно відрендерені!");
});