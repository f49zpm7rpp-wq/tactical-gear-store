// script.js - діагностична версія

console.log("✅ script.js завантажився успішно!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM завантажено");

    const grid = document.getElementById('hits-grid');
    console.log("hits-grid елемент:", grid ? "знайдено" : "НЕ знайдено");

    if (!grid) {
        console.error("Помилка: елемент #hits-grid не знайдено в HTML");
        return;
    }

    if (!window.allProducts || window.allProducts.length === 0) {
        console.error("Помилка: window.allProducts не завантажено або порожній");
        grid.innerHTML = "<p style='color: red; grid-column: 1/-1; text-align: center;'>Помилка завантаження товарів. Перевір data.js</p>";
        return;
    }

    console.log("Товарів у allProducts:", window.allProducts.length);

    let html = '';
    window.allProducts.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/260x220?text=Фото'">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="rating">★ ${product.rating || '4.8'}</div>
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