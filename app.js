
const loginFormContainer = document.getElementById('dynamic-form-container');

if (loginFormContainer) {
    loginFormContainer.innerHTML = `
        <h3 class="text-xl font-bold text-slate-800 mb-2">User Login & Security</h3>
        <p class="text-xs text-slate-500 mb-6">Enter credentials to access OmniMart Dashboard.</p>
        
        <form id="auth-form" class="space-y-4" novalidate>
            <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">User Email</label>
                <input type="email" id="auth-email" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="user@omnimart.com">
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
                <input type="password" id="auth-password" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="••••••••">
            </div>
            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-sm transition">Sign In</button>
        </form>
    `;
}

const authForm = document.getElementById('auth-form');
if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Authentication successful! Welcome to OmniMart.");
    });
}