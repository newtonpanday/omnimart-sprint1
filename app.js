
const formContainer = document.getElementById('dynamic-form-container');

if (formContainer) {
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
}

const secureForm = document.getElementById('secure-form');
const emailField = document.getElementById('email-field');
const emailAlert = document.getElementById('email-alert');
const passwordField = document.getElementById('password-field');
const strengthBar = document.getElementById('strength-bar');
const strengthLabel = document.getElementById('strength-label');


if (emailField && emailAlert) {
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
}

if (passwordField && strengthBar && strengthLabel) {
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
}


const analyticsData = [
    { title: "Total Revenue", value: "$24,500", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Active Orders", value: "142", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Low Stock Items", value: "12", color: "text-rose-600", bg: "bg-rose-50" }
];

const dashboardGrid = document.getElementById('dashboard-grid');

if (dashboardGrid) {
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
}



if (secureForm) {
    secureForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const isEmailOk = emailField ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value) : false;
        const isPassOk = passwordField ? passwordField.value.length >= 8 : false;

        if (isEmailOk && isPassOk) {
            formContainer.innerHTML = `
                <div class="text-center py-4">
                    <div class="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 class="text-lg font-bold text-slate-800">Credentials Synchronized!</h4>
                    <p class="text-sm text-slate-500 mt-1">System tokens updated safely. Initializing modules...</p>
                    <div id="metric-sub-grid" class="grid grid-cols-2 gap-4 mt-6"></div>
                </div>
            `;
            renderDynamicSystemMetrics();
        } else {
            alert('Security Audit Failed: Please satisfy validation criteria.');
        }
    });
}


function ModularMetricCard(title, diagnosticMetric, indicatorStyle) {
    const wrapper = document.createElement('div');
    wrapper.className = "bg-slate-50 p-4 rounded-xl border border-slate-100 text-left";
    
    wrapper.innerHTML = `
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">${title}</span>
        <span class="text-xl font-black text-slate-800 mt-1 block" id="val-node"></span>
        <div class="flex items-center mt-2 text-[11px] text-slate-500">
            <span class="h-2 w-2 rounded-full ${indicatorStyle} mr-1.5 animate-pulse"></span>
            Operational
        </div>
    `;
    wrapper.querySelector('#val-node').textContent = diagnosticMetric;
    return wrapper;
}

const liveDataLog = [
    { label: "SSL Handshake", read: "0.42 ms", nodeStyle: "bg-emerald-500" },
    { label: "Session Tokens", read: "Active (2)", nodeStyle: "bg-indigo-500" }
];

function renderDynamicSystemMetrics() {
    const targetGrid = document.getElementById('metric-sub-grid');
    if (targetGrid) {
        liveDataLog.forEach(dataItem => {
            const generatedCardNode = ModularMetricCard(dataItem.label, dataItem.read, dataItem.nodeStyle);
            targetGrid.appendChild(generatedCardNode);
        });
    }
}