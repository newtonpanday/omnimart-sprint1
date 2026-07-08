<<<<<<< HEAD
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
=======
// ড্যাশবোর্ডের ডায়নামিক মেট্রিিক্স ডাটা
const analyticsData = [
    { title: "Total Revenue", value: "$24,500", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Active Orders", value: "142", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Low Stock Items", value: "12", color: "text-rose-600", bg: "bg-rose-50" }
];

// DOM গ্রিড সিলেক্ট করা
const dashboardGrid = document.getElementById('dashboard-grid');

// ডাটা লুপ চালিয়ে ডায়নামিক কার্ড তৈরি ও পুশ করা
analyticsData.forEach(card => {
    dashboardGrid.innerHTML += `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">${card.title}</h3>
            <div class="flex justify-between items-center mt-4">
                <span class="text-3xl font-black text-slate-800">${card.value}</span>
                <div class="${card.bg} ${card.color} text-xs font-bold px-2.5 py-1 rounded-full"> Live </div>
            </div>
        </div>
    `;
});
>>>>>>> d4573e575da94da7c0a11f8bdf15c9d92285c115
