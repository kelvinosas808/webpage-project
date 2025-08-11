  // Product data
        const products = [
            {
                model: "iPhone 11 Pro",
                storage: "64GB",
                price: "₦240,000",
                availability: "in-stock",
                image: "images/ Iphone11pro240k.jpg"
            },
            {
                model: "iPhone 11 Pro max",
                storage: "64GB",
                price: "₦220,000",
                availability: "in-stock",
                image: "images/11promax200k.jpg"
            },
            {
                model: "iPhone 12 pro max",
                storage: "128GB",
                color: "Pink",
                price: "₦375,000",
                availability: "in-stock",
                image:  'images/12promax375k.jpg'
            },
            {
                model: "iPhone 12 Pro max",
                storage: "256GB",
                color: "Deep Purple",
                price: "₦395,000",
                availability: "in-stock",
                image: "images/12promax395k.jpg"
            },
            {
                model: "iPhone 14 pro max",
                storage: "128GB",
                color: "Midnight",
                price: "₦760,000",
                availability: "in-stock",
                image: "images/14promax760kWhatsApp.jpg"
            },
            {
                model: "iPhone 14 Pro max (eSIM Locked)",
                storage: "128GB",
                color: "Graphite",
                price: "₦690,000",
                availability: "in-stock",
                image: "images/Esimlockediphone14promax690k.jpg"
            },
            {
                model: "iPhone 11",
                storage: "128GB",
                color: "Blue",
                price: "₦180,000",
                availability: "in-stock",
                image: "images/Iphone11180k.jpg"
            },
            {
                model: "iPhone 11",
                storage: "64GB",
                color: "Black",
                price: "₦195,000",
                availability: "in-stock",
                image: "images/Iphone11195k.jpg"
            },
            {
                model: "iPhone 11",
                storage: "64GB",
                color: "Starlight",
                price: "₦260,000",
                availability: "in-stock",
                image: "images/Iphone11260k.jpg"
            },
             {
                model: "iPhone 11 Pro max",
                storage: "64GB",
                color: "Starlight",
                price: "₦350,000",
                availability: "in-stock",
                image: "images/Iphone11promax350k.jpg"
            },
             {
                model: "iPhone 12 Pro",
                storage: "64GB",
                color: "Starlight",
                price: "₦380,000",
                availability: "in-stock",
                image: "images/Iphone12pro380k.jpg"
            },
             {
                model: "iPhone 12 pro max",
                storage: "64GB",
                color: "Starlight",
                price: "₦270,000",
                availability: "in-stock",
                image: "images/Iphone12promax270k.jpg"
            },
             {
                model: "iPhone 13",
                storage: "128",
                color: "Starlight",
                price: "₦680k,000",
                availability: "in-stock",
                image: "images/Iphone13.jpg"
            },
             {
                model: "iPhone 13",
                storage: "128GB",
                color: "Starlight",
                price: "₦340,000",
                availability: "in-stock",
                image: "images/Iphone13340k.jpg"
            },
            {
                model: "iPhone 13",
                storage: "256GB",
                color: "Sierra Blue",
                price: "₦520,000",
                availability: "in-stock",
                image: "images/Iphone13410k.jpg"
            },
    {
        model: "iPhone 14",
        storage: "128GB",
        color: "Various",
        price: "₦600,000",
        availability: "in-stock",
        image: "images/Iphone14600k.jpg"
    },
    {
        model: "iPhone 14 Pro",
        storage: "256GB",
        color: "Various",
        price: "₦780,000",
        availability: "in-stock",
        image: "images/Iphone14pro780k.jpg"
    },
    {
        model: "iPhone 14 Pro",
        storage: "512GB",
        color: "Various",
        price: "₦790,000",
        availability: "in-stock",
        image: "images/Iphone14pro790k.jpg"
    },
    {
        model: "iPhone 14 Pro Max",
        storage: "256GB",
        color: "Various",
        price: "₦690,000",
        availability: "in-stock",
        image: "images/Iphone14promaxesim690k.jpg"
    },
    {
        model: "iPhone 15 Pro Max",
        storage: "256GB",
        color: "Various",
        price: "₦950,000",
        availability: "in-stock",
        image: "images/Iphone15promax.jpg"
    },
    {
        model: "iPhone 16",
        storage: "256GB",
        color: "Various",
        price: "₦1,070,000",
        availability: "in-stock",
        image: "images/Iphone161.07k.jpg"
    },
    {
        model: "iPhone 16 Plus",
        storage: "512GB",
        color: "Various",
        price: "₦1,200,000",
        availability: "in-stock",
        image: "images/Iphone16plues1.2m.jpg"
    },
    {
        model: "iPhone XR",
        storage: "64GB",
        color: "Various",
        price: "₦180,000",
        availability: "in-stock",
        image: "images/Iphonexr180k.jpg"
    },
    {
        model: "iPhone XR",
        storage: "128GB",
        color: "Various",
        price: "₦220,000",
        availability: "in-stock",
        image: "images/Iphonexr220k.jpg"
    },
    {
        model: "iPhone XR",
        storage: "256GB",
        color: "Various",
        price: "₦225,000",
        availability: "in-stock",
        image: "images/Iphonexr225k.jpg"
    },
    {
        model: "iPhone XS Max",
        storage: "256GB",
        color: "Various",
        price: "₦210,000",
        availability: "in-stock",
        image: "images/Iphonoesxmax210k.jpg"
    },
    {
        model: "iPhone 11 Pro",
        storage: "256GB",
        color: "Various",
        price: "₦240,000",
        availability: "in-stock",
        image: "images/ Iphone11pro240k.jpg"
    }
 ];
// Create product card
function createProductCard(product) {
    const inStock = product.availability === 'in-stock';
    const whatsappUrl = `https://wa.me/+2349015130233?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(product.model)}%20(${product.storage})%20for%20${encodeURIComponent(product.price)}.%20Is%20it%20available?`;
    
    return `
        <div class="iphone-card ${inStock ? 'in-stock' : ''}" data-model="${product.model}">
            <img src="${product.image}" alt="${product.model}" class="iphone-image" loading="lazy">
            <h3 class="iphone-name">${product.model}</h3>
            <p class="iphone-storage">${product.storage}</p>
            ${inStock ? '<div class="availability-badge in-stock">✅ In Stock</div>' : ''}
            <div class="iphone-price">${product.price}</div>
            <a href="${whatsappUrl}" class="buy-button ${!inStock ? 'disabled' : ''}" target="_blank">
                ${inStock ? '💬 Order on WhatsApp' : '❌ Out of Stock'}
            </a>
        </div>
    `;
}

// Render products
function renderProducts(productsToShow = products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = productsToShow.map(createProductCard).join('');
    
    // Update count
    const countEl = document.querySelector('.products-count .count');
    if (countEl) countEl.textContent = productsToShow.length;
}

// Filter products
function filterProducts(filter) {
    const filtered = filter === 'all' ? products : 
        products.filter(p => p.model.toLowerCase().includes(filter));
    renderProducts(filtered);
}

// Sort products
function sortProducts(type) {
    const sorted = [...products].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[₦,]/g, ''));
        const priceB = parseInt(b.price.replace(/[₦,]/g, ''));
        return type === 'price-low' ? priceA - priceB : priceB - priceA;
    });
    renderProducts(sorted);
}

// Setup controls
function setupControls() {
    const container = document.querySelector('.products-section .container');
    const title = container.querySelector('.section-title');
    
    if (!container.querySelector('.products-controls')) {
        title.insertAdjacentHTML('afterend', `
            <div class="products-controls">
                <button class="filter-button active" data-filter="all">All Models</button>
                <button class="filter-button" data-filter="11">iPhone 11</button>
                <button class="filter-button" data-filter="12">iPhone 12</button>
                <button class="filter-button" data-filter="13">iPhone 13</button>
                <button class="filter-button" data-filter="14">iPhone 14</button>
                <button class="filter-button" data-filter="15">iPhone 15</button>
                <button class="sort-button" data-sort="price-low">Price: Low to High</button>
                <button class="sort-button" data-sort="price-high">Price: High to Low</button>
            </div>
            <div class="products-count">Showing <span class="count">${products.length}</span> iPhone models</div>
        `);
        
        // Add event listeners
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                filterProducts(e.target.dataset.filter);
            });
        });
        
        document.querySelectorAll('.sort-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.sort-button').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                sortProducts(e.target.dataset.sort);
            });
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupControls();
    renderProducts();
});