const appConfig = {
    languages: ['EN', 'AZ', 'RU', 'TR'],
    currentLang: 'EN'
};

function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'glass';
    nav.innerHTML = `
        <div class="container nav-container">
            <a href="index.html" class="logo text-gradient">ANTIGRAVITY.AI</a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="use-cases.html">Use Cases</a>
                <a href="pricing.html">Pricing</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="nav-actions flex-center" style="gap: 15px;">
                <div class="lang-switcher" style="cursor: pointer; font-weight: 600;">
                    <span id="current-lang">EN</span> ▼
                </div>
                <a href="login.html" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.9rem;">Login</a>
            </div>
        </div>
    `;
    document.body.prepend(nav);

    // Sticky Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3 class="text-gradient" style="margin-bottom: 20px;">ANTIGRAVITY.AI</h3>
                    <p style="color: var(--text-muted);">Empowering the future of finance with Open Banking and Artificial Intelligence.</p>
                </div>
                <div>
                    <h4>Platform</h4>
                    <ul style="list-style: none; margin-top: 15px; color: var(--text-muted);">
                        <li><a href="services.html">Services</a></li>
                        <li><a href="use-cases.html">Use Cases</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul style="list-style: none; margin-top: 15px; color: var(--text-muted);">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Connect</h4>
                    <div class="social-links" style="margin-top: 15px;">
                        <a href="#">🐦</a>
                        <a href="#">💼</a>
                        <a href="#">📸</a>
                    </div>
                </div>
            </div>
            <div style="text-align: center; color: var(--text-muted); padding-top: 20px; border-top: 1px solid var(--glass-border);">
                © 2024 Antigravity AI. Hackathon Project.
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

function renderChatbot() {
    // Create Chat Elements
    const chatContainer = document.createElement('div');
    chatContainer.innerHTML = `
        <div class="chatbot-toggle" id="chatToggle">
            🤖
        </div>
        <div class="chatbot-window" id="chatWindow">
            <div class="chat-header">
                <div style="font-weight: 600;">Antigravity Assistant</div>
                <div style="cursor: pointer;" id="chatClose">✕</div>
            </div>
            <div class="chat-body" id="chatBody">
                <div class="chat-message bot">
                    Hello! I'm your AI assistant. Ask me about our Open Banking APIs or Fraud Detection services.
                </div>
            </div>
            <div class="chat-input-area">
                <input type="text" class="chat-input" id="chatInput" placeholder="Type a message...">
                <button class="btn-primary" style="padding: 10px; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer;" id="chatSend">➤</button>
            </div>
        </div>
    `;
    document.body.appendChild(chatContainer);

    // Logic
    const toggle = document.getElementById('chatToggle');
    const window = document.getElementById('chatWindow');
    const close = document.getElementById('chatClose');
    const input = document.getElementById('chatInput');
    const send = document.getElementById('chatSend');
    const body = document.getElementById('chatBody');

    const toggleChat = () => window.classList.toggle('open');
    toggle.addEventListener('click', toggleChat);
    close.addEventListener('click', toggleChat);

    const sendMessage = () => {
        const text = input.value.trim();
        if (!text) return;

        // User Message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.textContent = text;
        body.appendChild(userMsg);
        input.value = '';
        body.scrollTop = body.scrollHeight;

        // Mock Bot Response
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-message bot';

            // Simple keyword matching
            const lower = text.toLowerCase();
            if (lower.includes('api')) {
                botMsg.textContent = "Our Open Banking APIs follow PSD2 standards. You can access 500+ banks via a single integration. Check the Services page for docs.";
            } else if (lower.includes('price') || lower.includes('cost')) {
                botMsg.textContent = "We offer a Free Starter plan and a Professional plan at $499/mo. Enterprise options are custom.";
            } else if (lower.includes('fraud') || lower.includes('risk')) {
                botMsg.textContent = "Our AI Risk Engine analyzes transaction patterns in real-time (<50ms) to detect anomalies with 99.9% accuracy.";
            } else {
                botMsg.textContent = "I'm still learning! Please contact our sales team for complex queries, or check the About page.";
            }

            body.appendChild(botMsg);
            body.scrollTop = body.scrollHeight;
        }, 1000);
    };

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    renderChatbot();
});
