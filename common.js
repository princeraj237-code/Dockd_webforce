(function () {
    // Toggle sidebar + overlay
    document.addEventListener('click', function (e) {
        const t = e.target;
        const btn = t.closest('[data-action="toggle-sidebar"]');
        if (btn) {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            const isOpen = sidebar && sidebar.hasAttribute('data-open');
            if (isOpen) { sidebar.removeAttribute('data-open'); overlay.classList.remove('show'); }
            else { sidebar && sidebar.setAttribute('data-open', ''); overlay.classList.add('show'); }
        }


        if (t.closest('[data-action="close-sidebar"]') || t.classList.contains('overlay') || t.closest('.overlay')) {
            const s = document.querySelector('.sidebar'); const o = document.querySelector('.overlay'); if (s) s.removeAttribute('data-open'); if (o) o.classList.remove('show');
        }
    });


    // ESC to close
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { const s = document.querySelector('.sidebar'); const o = document.querySelector('.overlay'); if (s) s.removeAttribute('data-open'); if (o) o.classList.remove('show'); } });


    // Auth toggle (login/register)
    document.addEventListener('DOMContentLoaded', function () {
        const toggleLink = document.getElementById('toggle-link');
        if (toggleLink) {
            toggleLink.addEventListener('click', function (evt) {
                evt.preventDefault();
                const login = document.getElementById('login-form');
                const reg = document.getElementById('register-form');
                const title = document.getElementById('form-title');
                if (login && reg && title) {
                    const showingLogin = !login.classList.contains('hidden');
                    login.classList.toggle('hidden'); reg.classList.toggle('hidden');
                    title.textContent = showingLogin ? 'Register' : 'Login';
                    toggleLink.textContent = showingLogin ? 'Login' : 'Register';
                }
            });
        }


        // Contact form handler
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) { e.preventDefault(); alert('Thanks! Your message was received (demo).'); contactForm.reset(); });
        }


        // Simple auth submit handlers
        const lf = document.getElementById('login-form');
        if (lf) { lf.addEventListener('submit', function (e) { e.preventDefault(); alert('Logging in (demo)'); window.location.href = 'dashboard.html'; }); }
        const rf = document.getElementById('register-form');
        if (rf) { rf.addEventListener('submit', function (e) { e.preventDefault(); alert('Registered (demo). Redirecting...'); window.location.href = 'dashboard.html'; }); }
    });
})();