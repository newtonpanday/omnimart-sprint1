// ১. DOM এলিমেন্ট সিলেক্ট ও ক্যাশ করা (Rubric 30% এর জন্য)
const formContainer = document.getElementById('dynamic-form-container');

// ২. ডাইনামিকালি সুরক্ষিত ফর্ম ইনজেক্ট করা
formContainer.innerHTML = `
    <h3 class="text-xl font-bold text-slate-800 mb-2">Account Security Settings</h3>
    <p class="text-xs text-slate-500 mb-6">Update credentials with real-time strength auditing.</p>
    
    <form id="secure-form" class="space-y-5" novalidate>
        <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Admin Email</label>
            <input type="email" id="email-field" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="admin@omnimart.com">
            <p id="email-alert" class="text-rose-500 text-xs mt-1 hidden">Please enter a valid administrative email format.</p>
        </div>
        <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">New Token Password</label>
            <input type="password" id="password-field" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="Min 8 chars, numbers, uppercase">
            <div class="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                <div id="strength-bar" class="h-full w-0 bg-rose-500 transition-all duration-300"></div>
            </div>
            <p id="strength-label" class="text-[11px] text-slate-500 mt-1 font-medium">Strength: Missing</p>
        </div>
        <button type="submit" class="w-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-sm transition">Update Credentials</button>
    </form>
`;

// ইনজেক্ট করা এলিমেন্টগুলোর রেফারেন্স ক্যাশ করা
const secureForm = document.getElementById('secure-form');
const emailField = document.getElementById('email-field');
const emailAlert = document.getElementById('email-alert');
const passwordField = document.getElementById('password-field');
const strengthBar = document.getElementById('strength-bar');
const strengthLabel = document.getElementById('strength-label');

// ৩. রিয়েল-টাইম ইমেইল ভ্যালিডেশন (Standard RegEx)
emailField.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailField.value)) {
        emailField.className = "w-full px-4 py-2.5 border border-emerald-500 bg-emerald-50/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition";
        emailAlert.classList.add('hidden');
    } else {
        emailField.className = "w-full px-4 py-2.5 border border-rose-500 bg-rose-50/30 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none transition";
        emailAlert.classList.remove('hidden');
    }
});

// ৪. রিয়েল-টাইম পাসওয়ার্ড স্ট্রেন্থ ট্র্যাকার
passwordField.addEventListener('input', () => {
    const val = passwordField.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    if (val.length === 0) {
        strengthBar.style.width = '0%';
        strengthLabel.textContent = 'Strength: Missing';
        strengthLabel.className = 'text-[11px] text-slate-500 mt-1 font-medium';
    } else if (score < 2) {
        strengthBar.style.width = '25%';
        strengthBar.className = 'h-full bg-rose-500 transition-all duration-300';
        strengthLabel.textContent = 'Strength: Weak (Dangerous)';
        strengthLabel.className = 'text-[11px] text-rose-500 mt-1 font-bold';
    } else if (score <= 3) {
        strengthBar.style.width = '65%';
        strengthBar.className = 'h-full bg-amber-500 transition-all duration-300';
        strengthLabel.textContent = 'Strength: Moderate';
        strengthLabel.className = 'text-[11px] text-amber-600 mt-1 font-bold';
    } else {
        strengthBar.style.width = '100%';
        strengthBar.className = 'h-full bg-emerald-500 transition-all duration-300';
        strengthLabel.textContent = 'Strength: Strong (Secure)';
        strengthLabel.className = 'text-[11px] text-emerald-600 mt-1 font-bold';
    }
});


const productsData = [
    { id: 1, name: "Wireless Gaming Mouse", category: "Electronics", price: "৳ 1,850", tag: "Popular" },
    { id: 2, name: "Mechanical Keyboard (Red Switch)", category: "Electronics", price: "৳ 3,200", tag: "Best Seller" },
    { id: 3, name: "Minimalist Leather Wallet", category: "Fashion", price: "৳ 950", tag: "New" },
    { id: 4, name: "Ergonomic Desk Chair", category: "Furniture", price: "৳ 12,500", tag: "Hot" }
];

const mainDashboardContainer = document.getElementById('dashboard-grid');

if (mainDashboardContainer) {
    const catalogSection = document.createElement('div');
    catalogSection.className = "col-span-full mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200";

    catalogSection.innerHTML = `
        <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <div>
                <h3 class="text-lg font-bold text-slate-800">🛍️ Product Catalog</h3>
                <p class="text-xs text-slate-500">Explore trending items available on OmniMart</p>
            </div>
            <span class="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                4 Items Displayed
            </span>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="catalog-grid">
            ${productsData.map(product => `
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                ${product.category}
                            </span>
                            <span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                                ${product.tag}
                            </span>
                        </div>
                        <h4 class="font-bold text-slate-800 text-sm mt-1">${product.name}</h4>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-200/60 flex justify-between items-center">
                        <span class="font-black text-indigo-600 text-sm">${product.price}</span>
                        <button class="add-cart-btn text-xs bg-slate-900 hover:bg-indigo-600 text-white font-medium px-3 py-1.5 rounded-lg transition">
                            + Add
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    mainDashboardContainer.appendChild(catalogSection);

    // Event Listener for Add to Cart Buttons
    const addBtns = catalogSection.querySelectorAll('.add-cart-btn');
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('🛒 Item added to your active cart!');
        });
    });
}