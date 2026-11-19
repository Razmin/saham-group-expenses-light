/* =====================================================================
   NovaNext — Single Source of Truth (Apps, Shared Navigation & Renderers)
   ===================================================================== */

const MEDIA = {
  iconDir:  'images/icon/',
  iconExt:  '.png',
  videoDir: 'videos/',
  videoExt: '.mp4'
};

const iconSrc  = app => MEDIA.iconDir  + app.icon + MEDIA.iconExt;
const videoSrc = app => MEDIA.videoDir + app.icon + MEDIA.videoExt;

const APPS = [
  {
    name: "Aiden Connects",
    icon: "aiden",
    screenshots: "aidenconnects",
    screenshotCount: 1,
    howItWorks: [
      "Choose a difficulty, or turn on Kids Mode for a gentler game.",
      "Take turns dropping a piece into a column.",
      "Connect 4 of your pieces in a row, in any direction.",
      "Play against the AI, or with a friend on the same device or online."
    ],
    offlineNote: "Online play needs an internet connection.",
    category: "Puzzle",
    description: "Drop, Connect, Win.",
    features: [
      "Smart AI, Real Challenge",
      "Kids Mode: A gentler mode designed for younger players",
      "Two-Player Mode: Play with a friend on the same device or online"
    ],
    url: "https://apps.apple.com/us/app/aiden-connects/id6798768340",
    featured: 1,
    showcase: true,
    homeDescription: "Try to connect 4 in any direction. Kids get their own Kids Mode, which makes the game a little easier. You can set the difficulty, and play with a friend on the same device or online."
  },
  {
    name: "Emma Slides",
    icon: "emma",
    screenshots: "emmaslides",
    screenshotCount: 1,
    howItWorks: [
      "Look at the goal card to see the pattern you need to make.",
      "Slide the colorful pegs horizontally or vertically.",
      "Keep sliding until your pegs match the goal card.",
      "There are no timers, so take your time."
    ],
    category: "Puzzle",
    description: "Slide colorful pegs into place to match the goal.",
    features: [
      "Simple drag-and-slide controls, no timers or pressure",
      "A relaxing puzzle for quiet moments",
      "Colorful, calming design great for all ages"
    ],
    url: "https://apps.apple.com/us/app/emma-slides/id6793634660",
    featured: 4,
    showcase: true,
    homeDescription: "Match the pattern with the goal card. Slide and drop colorful pegs until the goal is reached."
  },
  {
    name: "Cast Connect",
    icon: "film",
    screenshots: "castconnect",
    screenshotCount: 1,
    howItWorks: [
      "Search for one person to see their movies and TV series.",
      "Search for two or more people to see the movies and TV series they have in common.",
      "Search for one movie or TV series to see its cast.",
      "Search for two or more movies or TV series to see the cast they have in common."
    ],
    needsInternet: true,
    category: "Movies & TV",
    description: "Find hidden links in film & TV – discover which actors, directors & crew worked together across your favorite movies. Connections revealed in seconds!",
    features: [
      "Search by People: Find all movies/shows featuring multiple actors or crew",
      "Search by Movies: Discover shared cast and crew across productions",
      "Perfect for film buffs and trivia lovers"
    ],
    url: "https://apps.apple.com/us/app/cast-connect/id6751820156",
    showcase: true
  },
  {
    name: "Hanoi Towers",
    icon: "hanoi",
    screenshots: "hanoitowers",
    screenshotCount: 1,
    howItWorks: [
      "Move all the disks from one tower to another.",
      "Move only one disk at a time.",
      "Only the top disk of a tower can be moved.",
      "A larger disk can never go on top of a smaller one."
    ],
    category: "Puzzle",
    description: "The classic puzzle game. Move all disks from one tower to another following simple but challenging rules.",
    features: [
      "Move one disk at a time",
      "Only move the top disk from each tower",
      "Larger disks cannot go on smaller ones"
    ],
    url: "https://apps.apple.com/us/app/hanoi-towers-puzzle/id6680199841",
    featured: 2,
    homeDescription: "The classic puzzle game, rebuilt with real depth and weight. Move all disks from one tower to another following simple but challenging rules."
  },
  {
    name: "Flip Match",
    icon: "flip",
    screenshots: "flipmatch",
    screenshotCount: 1,
    howItWorks: [
      "Tap two cards to flip them over.",
      "If they match, they stay face up.",
      "If they don't match, they flip back down, so remember where they were.",
      "Find all the pairs to finish the level."
    ],
    category: "Puzzle",
    description: "Find all matching pairs by flipping cards. If they match, they stay face-up. If not, they flip back down.",
    features: [
      "Progressive difficulty levels",
      "Challenge your friends",
      "Train your memory skills"
    ],
    url: "https://apps.apple.com/us/app/flip-match/id6478814519",
    featured: 3,
    homeDescription: "Find all matching pairs by flipping cards. If they match, they stay face-up. A polished, tactile take on a classic format."
  },
  {
    name: "Number Moves",
    icon: "move",
    screenshots: "numbermoves",
    screenshotCount: 1,
    howItWorks: [
      "Tap a block next to the empty space to move it there.",
      "Keep moving blocks to put the numbers in ascending order.",
      "The order runs from left to right and from bottom to top."
    ],
    category: "Puzzle",
    description: "Arrange numbers in ascending order from left to right and bottom to top. Tap blocks to move them into empty spaces.",
    features: [
      "Classic sliding puzzle mechanics",
      "Play with numbers or custom images",
      "Challenging and addictive"
    ],
    url: "https://apps.apple.com/us/app/number-moves/id6476934781"
  },
  {
    name: "Puzzly Photo",
    icon: "puzzle",
    screenshots: "puzzlyphoto",
    screenshotCount: 1,
    howItWorks: [
      "Pick a photo from your gallery, or take one with your camera.",
      "The app turns it into a jigsaw puzzle right away.",
      "Put the pieces together to complete your picture."
    ],
    category: "Puzzle",
    description: "Turn any image from your gallery or camera into an instant puzzle to solve. A classic game with your personal touch.",
    features: [
      "Use any photo from your gallery",
      "Take photos directly with your camera",
      "Instant puzzle generation"
    ],
    url: "https://apps.apple.com/us/app/puzzly-photo/id6476255688"
  },
  {
    name: "Peg Elimination",
    icon: "peg",
    screenshots: "pegelimination",
    screenshotCount: 1,
    howItWorks: [
      "Jump a peg over an adjacent peg into an empty spot.",
      "The peg you jumped over is removed.",
      "Keep jumping until only one peg remains.",
      "Think ahead, because every jump changes what you can do next."
    ],
    category: "Strategy",
    description: "Remove all pegs until only one remains. Jump over adjacent pegs into empty spots. Harder than it looks!",
    features: [
      "Classic strategy game",
      "Simple rules, challenging gameplay",
      "Test your planning skills"
    ],
    url: "https://apps.apple.com/us/app/peg-elimination/id6474193810"
  },
  {
    name: "Color Logic",
    icon: "master",
    screenshots: "colorlogic",
    screenshotCount: 1,
    howItWorks: [
      "Guess the hidden colors and the order they go in.",
      "A black dot means a correct color in the correct position.",
      "A white dot means a correct color in the wrong position.",
      "Use the dots to improve each guess until you find all the colors in the right order."
    ],
    category: "Strategy",
    description: "Find all colors in the right order. Black dots show correct color and position. White dots show correct color but wrong position.",
    features: [
      "Classic code-breaking game",
      "Logic and deduction challenges",
      "Multiple difficulty levels"
    ],
    url: "https://apps.apple.com/us/app/color-logic/id6471006415"
  },
  {
    name: "Number Guess",
    icon: "guess",
    screenshots: "numberguess",
    screenshotCount: 1,
    howItWorks: [
      "Place numbers and letters on the two sides of the scale.",
      "When the scale shows equality, you have found an equation.",
      "For example, A and B on one side and 2 and 1 on the other means A + B = 3.",
      "Use the equations you find to solve for the unknown letters."
    ],
    category: "Educational",
    description: "Learn to solve systems of equations in a fun way. Match numbers and letters on both sides to find equations and solve for unknowns.",
    features: [
      "Educational math game",
      "Solve systems of equations",
      "Interactive learning experience"
    ],
    url: "https://apps.apple.com/us/app/number-guess/id6466263744"
  },
  {
    name: "Dates",
    icon: "date",
    screenshots: "dates",
    screenshotCount: 1,
    howItWorks: [
      "Convert dates between the supported calendars.",
      "Find the difference between two dates in any supported calendar.",
      "Choose how the difference is shown: days, months, years, or any combination of these."
    ],
    category: "Utility",
    description: "Convert dates between calendars effortlessly and calculate differences between dates in any calendar system.",
    features: [
      "Supports Gregorian, Persian, Islamic, Hebrew, Japanese, and Indian calendars",
      "Calculate date differences",
      "Simple and intuitive interface"
    ],
    url: "https://apps.apple.com/us/app/dates-convert/id6459511463",
    featured: 5
  },
  {
    name: "Statistics Formula",
    icon: "stat",
    screenshots: "statisticsformula",
    screenshotCount: 1,
    category: "Utility",
    description: "Open CSV files and instantly calculate statistical formulas including mean, standard deviation, and more.",
    features: [
      "Import CSV files directly",
      "Common statistical calculations",
      "Fast and accurate results"
    ],
    url: "https://apps.apple.com/us/app/statistics-formulas/id6447047160"
  },
  {
    name: "Large Math",
    icon: "math",
    screenshots: "largemath",
    screenshotCount: 1,
    howItWorks: [
      "Find the factorial of large numbers in the fastest possible way.",
      "Find the combination and permutation of two numbers. This is fast too.",
      "Raise any number to any power and get the result almost instantly.",
      "Find Pascal numbers up to any row. Enter 100 to see the first 100 rows of Pascal's Triangle."
    ],
    category: "Educational",
    description: "Calculate Factorial, Power, Permutation, Combination, and Pascal Triangle for very large numbers. Try 200! and be amazed by the speed.",
    features: [
      "Handle extremely large numbers",
      "Lightning-fast calculations",
      "Multiple mathematical operations"
    ],
    url: "https://apps.apple.com/us/app/large-math/id1628885815"
  },
  {
    name: "TerraSol",
    icon: "earth",
    screenshots: "sunlighthours",
    screenshotCount: 1,
    category: "Educational",
    description: "View daylight hours at any latitude on any given day. Learn about Earth's orbit around the Sun, the Moon's orbit around Earth, and explore information about planets in our solar system.",
    features: [
      "Daylight calculation for any location",
      "Sun and Moon orbits",
      "Solar system planet information",
      "Educational and practical"
    ],
    url: "https://apps.apple.com/us/app/sun-light-hours/id6499107039",
    featured: 6,
    homeDescription: "View daylight hours at any latitude on any given day, and explore the planets of our solar system — built for landscape."
  },
  {
    name: "FastCam",
    supportName: "Fast Camera",
    icon: "cam",
    screenshots: "fastcam",
    screenshotCount: 1,
    category: "Utility",
    description: "Instant photo and video capture. The moment you open the app, it captures and saves to your gallery.",
    features: [
      "Instant capture on app launch",
      "Auto-save to gallery",
      "Configurable in settings"
    ],
    url: "https://apps.apple.com/us/app/fast-cam/id6449002428"
  },
  {
    name: "Nova Ads",
    icon: "ads",
    screenshots: "novaads",
    screenshotCount: 1,
    needsInternet: true,
    category: "Marketing",
    description: "Advertise your business across all NovaNext apps in one place. Upload your banner, add your website, and purchase a time slot.",
    features: [
      "Reach users across multiple apps",
      "Easy banner upload",
      "Flexible time slot purchases"
    ],
    url: "https://apps.apple.com/us/app/nova-ads/id6743174733"
  },
  {
    name: "GE Plus",
    icon: "plus",
    screenshots: "geplus",
    screenshotCount: 1,
    category: "Finance",
    description: "Designed for people with shared expenses. Track who owes whom and how much with ease.",
    features: [
      "Full group expense tracking",
      "Receipts can split unequally",
      "Each receipt can have its own currency",
      "Define your own currency",
      "You can hide or show receipts, groups and more"
    ],
    url: "https://apps.apple.com/us/app/group-expenses/id1443950401",
    showcase: true
  },

  /* Legacy apps go LAST */
  {
    name: "GE Light",
    icon: "light",
    screenshots: "gelight",
    screenshotCount: 1,
    category: "Finance",
    description: "Designed for people with shared expenses. Track who owes whom and how much with ease.",
    features: [
      "Manage group expenses",
      "Clear debt tracking",
      "Perfect for roommates and friends"
    ],
    url: "https://apps.apple.com/us/app/group-expenses-light/id1285557503",
    legacy: true,
    replacedBy: "GE Plus"
  }
];

/* =====================================================================
   Shared Layout & UI Helpers
   ===================================================================== */

const ARROW_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>';

function findApp(appName) {
  return APPS.find(app => app.name === appName);
}

const SCREENSHOTS_FOLDER = 'images/screenshots/';
const DEFAULT_MAX_SCREENSHOTS = 5;

function appKey(app) {
  return app.screenshots || app.name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* Shared Navigation & Footer Injection (eliminates 8-file duplication) */
function renderChrome(activePage = '') {
  const navTarget = document.getElementById('site-nav');
  if (navTarget) {
    const links = [
      { href: 'product.html', label: 'Products', id: 'products' },
      { href: 'about.html',   label: 'About',    id: 'about' },
      { href: 'support.html', label: 'Support',  id: 'support' },
      { href: 'privacy.html', label: 'Privacy',  id: 'privacy' },
      { href: 'terms.html',   label: 'Terms',    id: 'terms' }
    ];

    const linkHtml = links.map(l =>
      `<a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a>`
    ).join('');

    navTarget.innerHTML = `
      <nav>
        <div class="nav-inner">
          <a href="index.html" class="logo">
            <img src="images/icon/logo.png" alt="NovaNext logo">
            <span>NovaNext</span>
          </a>
          <div class="nav-links">
            ${linkHtml}
            <a href="contact.html" class="nav-cta ${activePage === 'contact' ? 'active' : ''}">Contact</a>
          </div>
          <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation" aria-expanded="false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
        <div class="mobile-drawer" id="mobile-drawer">
          ${linkHtml}
          <a href="contact.html" class="nav-cta">Contact</a>
        </div>
      </nav>`;

    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
      });
    }
  }

  const footerTarget = document.getElementById('site-footer');
  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer>
        <div class="footer-inner">
          <div class="copyright">© 2026 NovaNext · Crafted in Canada</div>
          <div class="footer-links">
            <a href="product.html">Products</a>
            <a href="about.html">About</a>
            <a href="support.html">Support</a>
            <a href="contact.html">Contact</a>
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
            <a href="https://buymeacoffee.com/novanext" target="_blank" rel="noopener" class="bmc-link">☕ Buy me a coffee</a>
          </div>
        </div>
      </footer>`;
  }
}

function renderAppCounts() {
  document.querySelectorAll('[data-app-count]').forEach(el => {
    el.textContent = APPS.length;
  });
}

/* Homepage Interactive Device Showcase */
function renderHeroShowcase(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const showcaseApps = APPS.filter(app => app.showcase);
  if (!showcaseApps.length) return;

  let activeIndex = 0;

  function renderPanel(index) {
    const app = showcaseApps[index];
    const key = appKey(app);
    const screenshotPath = `${SCREENSHOTS_FOLDER}${key}/iphone_01.jpg`;
    const videoPath = videoSrc(app);

    const tabsHtml = showcaseApps.map((item, i) => `
      <button type="button" class="showcase-tab ${i === index ? 'active' : ''}" data-idx="${i}">
        <img src="${iconSrc(item)}" alt="">
        <span>${item.name}</span>
      </button>`).join('');

    container.innerHTML = `
      <div class="showcase-tabs" role="tablist">${tabsHtml}</div>
      <div class="showcase-panel">
        <div class="showcase-info">
          <span class="app-category">${app.category}</span>
          <h3>${app.name}</h3>
          <p>${app.homeDescription || app.description}</p>
          <ul class="showcase-bullets">
            ${app.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="product-actions">
            <a href="${app.url}" class="download-button">Download on App Store</a>
            <a href="app.html?id=${key}" class="learn-button">Explore details</a>
          </div>
        </div>
        <div class="device-frame-wrap">
          <div class="iphone-frame">
            <div class="iphone-notch"></div>
            <img id="showcase-img" src="${screenshotPath}" alt="${app.name} on iPhone" onerror="this.src='${iconSrc(app)}'; this.style.objectFit='contain'; this.style.padding='24px';">
          </div>
        </div>
      </div>`;

    // Automatically swap to muted looping preview video if videos/<icon>.mp4 exists
    const probe = document.createElement('video');
    probe.preload = 'metadata';
    probe.muted = true;
    probe.addEventListener('loadedmetadata', () => {
      const frame = container.querySelector('.iphone-frame');
      if (frame) {
        const vid = document.createElement('video');
        vid.src = videoPath;
        vid.autoplay = true;
        vid.loop = true;
        vid.muted = true;
        vid.playsInline = true;
        const oldImg = frame.querySelector('img');
        if (oldImg) oldImg.replaceWith(vid);
      }
    });
    probe.src = videoPath;

    container.querySelectorAll('.showcase-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeIndex = Number(btn.dataset.idx);
        renderPanel(activeIndex);
      });
    });
  }

  renderPanel(activeIndex);
}

/* support.html: App routing pills */
function renderSupportPills(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = APPS.map(app => {
    const contactName = encodeURIComponent(app.supportName || app.name);
    const label = app.legacy
      ? `<span>${app.name}<small>No longer maintained</small></span>`
      : app.name;
    return `<a class="app-pill${app.legacy ? ' legacy' : ''}" href="contact.html?app=${contactName}">` +
           `<img class="swatch" src="${iconSrc(app)}" alt="">${label}</a>`;
  }).join('');
}

/* index.html: Featured apps cards */
function renderFeaturedApps(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const featuredApps = APPS
    .filter(app => app.featured)
    .sort((a, b) => a.featured - b.featured);

  container.innerHTML = featuredApps.map(app => `
    <div class="app-card">
      <div class="app-card-top">
        <img class="app-icon" src="${iconSrc(app)}" alt="${app.name} icon">
        <span class="app-category">${app.category}</span>
      </div>
      <div class="app-name">${app.name}</div>
      <p class="app-description">${app.homeDescription || app.description}</p>
      <div class="app-card-actions">
        <a class="app-link" href="${app.url}">App Store ${ARROW_ICON}</a>
        <a class="app-link secondary" href="app.html?id=${appKey(app)}">Details &rarr;</a>
      </div>
    </div>`).join('');
}

/* product.html: Full searchable + category-filtered catalog */
function buildProductHtml(app) {
  const replacement = app.replacedBy ? findApp(app.replacedBy) : null;
  const categoryText = app.legacy ? `${app.category} · No longer maintained` : app.category;
  const legacyNote = app.legacy && replacement
    ? `<p class="legacy-note">${app.name} is no longer updated. Try <a href="${replacement.url}">${replacement.name}</a> instead.</p>`
    : '';
  return `
<div class="product${app.legacy ? ' legacy' : ''}">
  <div class="product-image">
    <img class="product-icon" src="${iconSrc(app)}" alt="${app.name}">
  </div>
  <div class="product-content">
    <span class="product-category">${categoryText}</span>
    <h2>${app.name}</h2>
    ${legacyNote}
    <p class="product-description">${app.description}</p>
    <ul class="product-features">
      ${app.features.map(feature => `<li>${feature}</li>`).join('
      ')}
    </ul>
    <div class="product-actions">
      <a href="${app.url}" class="download-button">Download on App Store</a>
      <a href="app.html?id=${appKey(app)}" class="learn-button">Learn more</a>
    </div>
  </div>
</div>`;
}

function renderProductList() {
  const header = document.querySelector('.header');
  const listContainer = document.getElementById('product-list');
  if (!header || !listContainer) return;

  const ALL_LABEL = 'All';
  const categories = [...new Set(APPS.map(app => app.category))];
  let selectedCategory = ALL_LABEL;
  let searchQuery = '';

  function showProducts() {
    const q = searchQuery.trim().toLowerCase();
    const visibleApps = APPS.filter(app => {
      const matchesCat = selectedCategory === ALL_LABEL || app.category === selectedCategory;
      const matchesQuery = !q ||
        app.name.toLowerCase().includes(q) ||
        app.category.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.features.some(f => f.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });

    if (!visibleApps.length) {
      listContainer.innerHTML = `<div class="empty-state">No apps matched "<strong>${searchQuery}</strong>". Try another keyword or reset the category filter.</div>`;
      return;
    }

    listContainer.innerHTML = visibleApps.map(buildProductHtml).join('');
  }

  const controls = document.createElement('div');
  controls.className = 'catalog-controls';

  // Search bar
  const searchBox = document.createElement('div');
  searchBox.className = 'search-box';
  searchBox.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    <input type="search" id="app-search" placeholder="Search 18 apps by name, feature, or topic…" aria-label="Search apps">`;
  controls.appendChild(searchBox);

  // Segmented category control
  const control = document.createElement('div');
  control.className = 'segmented';
  control.setAttribute('role', 'group');
  control.setAttribute('aria-label', 'Filter apps by category');

  [ALL_LABEL, ...categories].forEach(label => {
    const segment = document.createElement('button');
    segment.type = 'button';
    segment.className = 'segment' + (label === ALL_LABEL ? ' active' : '');
    segment.textContent = label;
    segment.setAttribute('aria-pressed', label === ALL_LABEL ? 'true' : 'false');
    segment.addEventListener('click', () => {
      selectedCategory = label;
      control.querySelectorAll('.segment').forEach(other => {
        other.classList.toggle('active', other === segment);
        other.setAttribute('aria-pressed', other === segment ? 'true' : 'false');
      });
      showProducts();
    });
    control.appendChild(segment);
  });

  controls.appendChild(control);
  header.appendChild(controls);

  const searchInput = searchBox.querySelector('input');
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    showProducts();
  });

  showProducts();
}

/* Demo video lightbox for app.html */
const VIDEO_CSS = `
.hero-actions-left{display:flex;flex-wrap:wrap;align-items:center;gap:12px;}
.demo-button{
    display:inline-flex;align-items:center;gap:8px;
    padding:12px 22px;border-radius:12px;
    border:1px solid var(--border);background:var(--surface);
    color:var(--text);font:inherit;font-weight:600;font-size:14.5px;
    cursor:pointer;transition:.2s;
}
.demo-button:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);}
.demo-button .demo-play{color:var(--blue);font-size:12px;}
.video-overlay{
    position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.85);
    display:flex;align-items:center;justify-content:center;padding:24px;
}
.video-overlay video{
    max-width:92vw;max-height:85vh;border-radius:14px;background:#000;
    box-shadow:0 20px 60px rgba(0,0,0,.5);
}
.video-close{
    position:absolute;top:16px;right:16px;width:44px;height:44px;border-radius:50%;
    border:0;background:rgba(255,255,255,.15);color:#fff;font-size:22px;cursor:pointer;
}
.video-close:hover{background:rgba(255,255,255,.3);}
`;

function openVideo(app) {
  const overlay = document.createElement('div');
  overlay.className = 'video-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', `${app.name} demo video`);

  const player = document.createElement('video');
  player.controls = true;
  player.autoplay = true;
  player.playsInline = true;
  player.src = videoSrc(app);

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'video-close';
  closeButton.setAttribute('aria-label', 'Close video');
  closeButton.innerHTML = '&times;';

  function close() {
    player.pause();
    player.removeAttribute('src');
    player.load();
    overlay.remove();
    document.removeEventListener('keydown', onKey);
    document.body.style.overflow = '';
  }
  function onKey(event) { if (event.key === 'Escape') close(); }

  overlay.addEventListener('click', event => { if (event.target === overlay) close(); });
  closeButton.addEventListener('click', close);
  document.addEventListener('keydown', onKey);

  overlay.appendChild(player);
  overlay.appendChild(closeButton);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function addDemoVideo(app, actions) {
  const url = videoSrc(app);
  let added = false;

  function addButton() {
    if (added) return;
    added = true;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'demo-button';
    button.innerHTML = '<span class="demo-play">&#9654;</span> Watch demo';
    button.addEventListener('click', () => openVideo(app));
    actions.appendChild(button);
  }

  fetch(url, { method: 'HEAD' })
    .then(response => {
      const type = response.headers.get('content-type') || '';
      if (response.ok && !type.includes('text/html')) addButton();
    })
    .catch(() => {});

  const probe = document.createElement('video');
  probe.preload = 'metadata';
  probe.muted = true;
  probe.addEventListener('loadedmetadata', () => {
    addButton();
    probe.removeAttribute('src');
    probe.load();
  });
  probe.src = url;
}

/* app.html: App landing page */
function renderAppPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const requestedKey = new URLSearchParams(window.location.search).get('id');
  const app = APPS.find(candidate => appKey(candidate) === requestedKey);

  if (!app) {
    document.title = 'App not found - NovaNext';
    container.innerHTML = `
      <div class="app-missing">
        <h1>App not found</h1>
        <p>We could not find that app. <a href="product.html">See all products</a></p>
      </div>`;
    return;
  }

  const replacement = app.replacedBy ? findApp(app.replacedBy) : null;
  const legacyNote = app.legacy && replacement
    ? `<p class="legacy-note">${app.name} is no longer updated. Try <a href="${replacement.url}">${replacement.name}</a> instead.</p>`
    : '';
  const contactName = encodeURIComponent(app.supportName || app.name);
  const offlineText = app.needsInternet
    ? 'Needs an internet connection.'
    : `Works offline.${app.offlineNote ? ' ' + app.offlineNote : ''}`;

  if (!document.getElementById('video-css')) {
    const videoStyle = document.createElement('style');
    videoStyle.id = 'video-css';
    videoStyle.textContent = VIDEO_CSS;
    document.head.appendChild(videoStyle);
  }

  document.title = `${app.name} - NovaNext`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.content = app.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  container.innerHTML = `
    <a class="back-link" href="product.html">&larr; All products</a>
    <section class="app-hero">
      <img class="app-hero-icon" src="${iconSrc(app)}" alt="${app.name} icon">
      <div>
        <span class="product-category">${app.category}</span>
        <h1>${app.name}</h1>
        ${legacyNote}
        <p class="app-hero-description">${app.description}</p>
        <div class="hero-actions-left">
          <a href="${app.url}" class="download-button">Download on App Store</a>
        </div>
        <p class="app-offline">${offlineText}</p>
      </div>
    </section>
    <section class="screenshots-section" hidden>
      <div class="screenshots"></div>
    </section>
    ${app.longDescription ? `
    <section class="app-about">
      <h2>About ${app.name}</h2>
      <p>${app.longDescription}</p>
    </section>` : ''}
    <section class="app-features">
      <h2>What it does</h2>
      <ul class="product-features">
        ${app.features.map(feature => `<li>${feature}</li>`).join('
        ')}
      </ul>
    </section>
    ${app.howItWorks && app.howItWorks.length ? `
    <section class="app-how">
      <h2>How it works</h2>
      <ol>
        ${app.howItWorks.map(step => `<li>${step}</li>`).join('
        ')}
      </ol>
    </section>` : ''}
    <section class="app-links">
      <a href="contact.html?app=${contactName}">Get support</a>
      <a href="privacy.html">Privacy policy</a>
      <a href="product.html">More apps</a>
    </section>`;

  const screenshotSection = container.querySelector('.screenshots-section');
  const screenshotStrip = container.querySelector('.screenshots');
  const maxScreenshots = app.screenshotCount || DEFAULT_MAX_SCREENSHOTS;
  const devices = ['iphone', 'ipad'];
  let screenshotsLeftToCheck = maxScreenshots * devices.length;

  function screenshotChecked() {
    screenshotsLeftToCheck -= 1;
    if (screenshotsLeftToCheck === 0 && screenshotStrip.children.length > 0) {
      screenshotSection.hidden = false;
    }
  }

  for (let screenshotNumber = 1; screenshotNumber <= maxScreenshots; screenshotNumber++) {
    const paddedNumber = String(screenshotNumber).padStart(2, '0');
    const pair = document.createElement('div');
    pair.className = 'shot-pair';
    screenshotStrip.appendChild(pair);

    devices.forEach(device => {
      const screenshotImage = document.createElement('img');
      screenshotImage.alt = `${app.name} ${device === 'iphone' ? 'iPhone' : 'iPad'} screenshot ${screenshotNumber}`;
      screenshotImage.addEventListener('load', screenshotChecked);
      screenshotImage.addEventListener('error', () => {
        screenshotImage.remove();
        if (pair.children.length === 0) pair.remove();
        screenshotChecked();
      });
      screenshotImage.src = `${SCREENSHOTS_FOLDER}${appKey(app)}/${device}_${paddedNumber}.jpg`;
      pair.appendChild(screenshotImage);
    });
  }

  addDemoVideo(app, container.querySelector('.hero-actions-left'));
}
