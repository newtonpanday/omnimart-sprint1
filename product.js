// Product Data List
const products = [
    {
        id: 1,
        title: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with blue switches.",
        price: "2500.00",
        stock: 15,
        category: "Computer Accessories",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Gaming Mouse",
        description: "Wireless RGB gaming mouse with adjustable DPI.",
        price: "1200.00",
        stock: 10,
        category: "Computer Accessories",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Smart Watch Ultra",
        description: "Waterproof smart watch with heart rate sensor and AMOLED display.",
        price: "3499.00",
        stock: 13,
        category: "Smart Gadgets",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
    }
];

// Render Products Function
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-slate-500 py-8">No products found matching your search.</p>`;
        return;
    }

    grid.innerHTML = items.map(product => `
        <div class="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
            <div>
                <div class="h-44 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-slate-50">
                    <img src="${product.image}" alt="${product.title}" class="max-h-full object-contain">
                </div>
                <h3 class="text-lg font-bold text-slate-800 mb-1">${product.title}</h3>
                <p class="text-xs text-slate-500 mb-4 h-10 overflow-hidden">${product.description}</p>
            </div>
            <div>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-rose-600 font-extrabold text-lg">৳${product.price}</span>
                    <span class="bg-slate-200 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded">Stock: ${product.stock}</span>
                </div>
                <button onclick="addToCart(${product.id})" class="w-full border-2 border-emerald-600 text-emerald-700 font-semibold py-2 rounded-lg hover:bg-emerald-50 text-sm flex items-center justify-center gap-1.5 transition">
                    👁 View Details
                </button>
            </div>
        </div>
    `).join('');
}

// Button Click Handler
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        alert(`Selected: ${product.title}`);
    }
}

// Initial Render & Search Setup
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);

    // Search Logic
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (searchInput && searchBtn) {
        const handleSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = products.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.description.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        };

        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
});

// Category Filter Function
function filterCategory(categoryName) {
    if (categoryName === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === categoryName);
        renderProducts(filtered);
    }
}