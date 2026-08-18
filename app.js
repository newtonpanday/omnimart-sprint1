
const dynamicContainer = document.getElementById('dynamic-form-container');

if (dynamicContainer) {
    dynamicContainer.innerHTML = `
        <!-- Authentication Tabs -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div class="flex border-b border-slate-200 mb-6">
                <button id="tab-login" class="flex-1 py-3 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 transition">Sign In</button>
                <button id="tab-register" class="flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition">Create Account</button>
            </div>

            <!-- LOGIN FORM -->
            <form id="form-login" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                    <input type="email" required id="login-email" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="customer@omnimart.com">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
                    <input type="password" required id="login-pass" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="••••••••">
                </div>
                <div class="flex justify-between items-center text-xs">
                    <label class="flex items-center gap-2 text-slate-600">
                        <input type="checkbox" class="rounded text-indigo-600"> Remember me
                    </label>
                    <a href="#" class="text-indigo-600 font-semibold hover:underline">Forgot password?</a>
                </div>
                <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-sm transition">Sign In to OmniMart</button>
            </form>

            <!-- REGISTER FORM (Hidden by default) -->
            <form id="form-register" class="space-y-4 hidden">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                    <input type="text" required id="reg-name" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="Anulipa Mistry">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                    <input type="email" required id="reg-email" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="anulipamistry142@gmail.com">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
                    <input type="password" required id="reg-pass" class="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="Minimum 8 characters">
                </div>
                <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-sm transition">Register Account</button>
            </form>
        </div>

        <!-- USER PROFILE & ORDER SUMMARY CARD -->
        <div class="mt-6 bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Active User Profile</h4>
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-lg">AM</div>
                <div>
                    <p class="font-bold text-sm">Anulipa Mistry</p>
                    <p class="text-xs text-slate-400">anulipamistry142@gmail.com</p>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-3 flex justify-between text-xs">
                <span class="text-slate-400">Account Role: <strong class="text-emerald-400">Verified Customer</strong></span>
                <span class="text-slate-400">Total Orders: <strong class="text-indigo-400">5 Orders</strong></span>
            </div>
        </div>
    `;

    // Tab Switching Logic
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    tabLogin.addEventListener('click', () => {
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
        tabLogin.className = "flex-1 py-3 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 transition";
        tabRegister.className = "flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition";
    });

    tabRegister.addEventListener('click', () => {
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
        tabRegister.className = "flex-1 py-3 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 transition";
        tabLogin.className = "flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition";
    });

    // Form Event Handlers
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Login successful! Session initialized.");
    });

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Account registered successfully! Please sign in.");
    });
}