/* Shared nav, footer, mobile menu and cookie consent. Edit links and the GA id here only. */
(function () {
  var GA_ID = 'G-P8B665RWVK', KEY = 'novanext-analytics';
  var LINKS = [['product.html', 'Products', 'products'], ['about.html', 'About', 'about'],
               ['support.html', 'Support', 'support'], /* SCHOOLS_HIDDEN: ['schools.html', 'Schools', 'schools'], */ ['privacy.html', 'Privacy', 'privacy'],
               ['terms.html', 'Terms', 'terms']];
  var me = document.currentScript, part = me && me.dataset.part;
  function store(v) { try { if (v === undefined) return localStorage.getItem(KEY); if (v === null) localStorage.removeItem(KEY); else localStorage.setItem(KEY, v); } catch (e) {} }

  if (part === 'nav') {
    var active = me.dataset.active;
    var links = LINKS.map(function (l) {
      return '<a href="' + l[0] + '"' + (l[2] === active ? ' class="active" aria-current="page"' : '') + '>' + l[1] + '</a>';
    }).join('') + '<a href="contact.html" class="nav-cta' + (active === 'contact' ? ' active' : '') + '">Contact</a>';
    me.insertAdjacentHTML('beforebegin',
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<nav aria-label="Main"><div class="nav-inner">' +
      '<a href="index.html" class="logo"><img src="images/icon/logo.png" alt="NovaNext logo"><span>NovaNext</span></a>' +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<div class="nav-links" id="nav-links">' + links + '</div></div></nav>');
    var nav = me.previousElementSibling, btn = nav.querySelector('.nav-toggle');
    function setOpen(o) { nav.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); btn.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); }
    btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    nav.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  }

  if (part === 'footer' || part === 'analytics') {
    if (part === 'footer') me.insertAdjacentHTML('beforebegin',
      '<footer><div class="footer-inner"><div class="copyright">© ' + new Date().getFullYear() + ' NovaNext</div>' +
      '<div class="footer-links">' + LINKS.slice(0, 2).map(function (l) { return '<a href="' + l[0] + '">' + l[1] + '</a>'; }).join('') +
      '<a href="support.html">Support</a>' + /* SCHOOLS_HIDDEN: '<a href="schools.html">Schools</a>' + */ '<a href="contact.html">Contact</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a>' +
      '<a role="button" tabindex="0" id="cookie-settings">Cookie settings</a>' +
      '<a href="https://buymeacoffee.com/novanext" target="_blank" rel="noopener" class="bmc-link">☕ Buy me a coffee</a>' +
      '</div></div></footer>');
    var loaded = false;
    function loadGA() {
      if (loaded) return; loaded = true;
      var s = document.createElement('script'); s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID; document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      gtag('js', new Date()); gtag('config', GA_ID);
    }
    function banner() {
      if (document.querySelector('.consent')) return;
      var b = document.createElement('div'); b.className = 'consent'; b.setAttribute('role', 'region'); b.setAttribute('aria-label', 'Cookie notice');
      b.innerHTML = '<p>We use Google Analytics cookies to count visits. Nothing loads unless you accept. <a href="privacy.html">Privacy policy</a></p>' +
        '<button type="button" data-c="denied">Decline</button><button type="button" data-c="granted">Accept</button>';
      b.addEventListener('click', function (e) {
        var c = e.target.getAttribute && e.target.getAttribute('data-c'); if (!c) return;
        store(c); b.remove(); if (c === 'granted') loadGA();
      });
      document.body.appendChild(b);
    }
    var choice = store();
    if (choice === 'granted') loadGA(); else if (choice !== 'denied') banner();
    var cs = document.getElementById('cookie-settings');
    function reopen() { store(null); banner(); }
    if (!cs) return;
    cs.addEventListener('click', reopen);
    cs.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reopen(); } });
  }
})();