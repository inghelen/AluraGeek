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
    },
    {
        id: '3',
        title: 'Auriculares inalámbricos',
        price: 100.00,
        image: 'https://acdn.mitiendanube.com/stores/001/349/927/products/f91-a3e4718b5d6593757416595501929038-1024-1024.jpeg'
    },
    {
        id: '4',
        title: 'Telefono movil ',
        price: 500.00,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFXW1XrHRrNtgwmuBsDnPOcwIWmfE4GkvyQ&s'
    },
    {
        id: '5',
        title: 'Auriculares inalámbricos',
        price: 100.00,
        image: 'https://acdn.mitiendanube.com/stores/001/349/927/products/f91-a3e4718b5d6593757416595501929038-1024-1024.jpeg'
    },
    {
        id: '6',
        title: 'Smart tv 4k',
        price: 2000.00,
        image: 'https://imgs.search.brave.com/BrKIQ2wCM3cJX_p7dJmHLjaHPS9Sl4GZCbs8YbSP7ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2VjaHNsZS5wZS9h/cnF1aXZvcy9ibHgt/bWVkaWRhcy1kZS10/di1jdWFudGFzLXB1/bGdhZGFzLXRlbmVy/Mi5qcGc_dj02Mzc1/MzM1NzI5ODIyMDAw/MDA'
    },
    {
        id: '7',
        title: 'Tablet inteligente',
        price: 600.00,
        image: 'https://imgs.search.brave.com/vurYyMswoAfLkiwuyOQuaNcMQGIndTk9jhAwcm8Kczw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/Mjk3NDkxL3Bob3Rv/L3RhYmxldC1jb21w/dXRlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UG9aYjhi/NDM1U0dWaHBEVjdH/TTFKM2NDNlJFeU41/QW1WWTNpUURuZ1ht/RT0'
    },
    {
        id: '8',
        title: 'Notebook',
        price: 900.00,
        image: 'https://imgs.search.brave.com/Dxj_zPHta5BaZgCanz6lGWDsWXSNHpQAhaJcpXp4B34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/MjQ4NTY5L3Bob3Rv/L21vZGVybi1sYXB0/b3AuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVp4YXM0YUhS/Ty1pRWdNVk1ud1h4/bUVpRGRmNTVLVVFy/V0ZhV1RUYjVKVlU9'
    },
];

// Elementos del DOM
const product = document.getElementById('products');
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


// Renderizar productos iniciales
renderProducts();