// Datos iniciales de productos
let products = [
    {
        id: '1',
        title: 'Auriculares Premium',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
    },
    {
        id: '2',
        title: 'Reloj Inteligente',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'
    }
];

// Elementos del DOM
const productForm = document.getElementById('productForm');
const clearBtn = document.getElementById('clearBtn');
const productsGrid = document.getElementById('productsGrid');

// Función para renderizar los productos
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" />
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <div class="product-footer">
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="delete-btn" onclick="deleteProduct('${product.id}')">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para limpiar el formulario
function clearForm() {
    productForm.reset();
}

// Función para eliminar un producto
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    renderProducts();
}

// Manejador del envío del formulario
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newProduct = {
        id: Date.now().toString(),
        title: document.getElementById('title').value,
        price: parseFloat(document.getElementById('price').value),
        image: document.getElementById('image').value
    };

    products.push(newProduct);
    renderProducts();
    clearForm();
});

// Manejador del botón de limpiar
clearBtn.addEventListener('click', clearForm);

// Renderizar productos iniciales
renderProducts();