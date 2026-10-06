/* =====================================================================
   NovaNext apps - SINGLE SOURCE OF TRUTH
   Edit apps here only. index.html, product.html, support.html and
   about.html all read from this file.

   Fields
   ------
   name         App name (shown everywhere)
   icon         Icon path
   category     Category label (product page and home page cards)
   description  Product page description (HTML like <br> is allowed)
   features     Bullet list on product.html
   url          App Store link
   supportName  (optional) Name sent to the contact form if different from name
   featured     (optional) Position on the home page. Leave out to hide it there
   homeDescription
                (optional) Home page card text, if different from product page
   legacy       (optional) true = no longer maintained, grayed out
   replacedBy   (optional) name of the app that replaces a legacy app
   screenshots  (optional) folder name under images/screenshots/ , e.g. "aidenconnect".
                Also used as the landing page id: app.html?id=aidenconnect
                Leave out to use the app name in lowercase letters and digits
                only ("Aiden Connects" -> "aidenconnects").
   screenshotCount
                (optional) how many ipad_01.jpg, ipad_02.jpg ... to show.
                Leave out to try the first 5; missing files are skipped.

   Order in this list = order on product.html and support.html.
   ===================================================================== */

const APPS = [
  {
    name: "Aiden Connects",
    icon: "images/icon/aiden.png",
    screenshots: "aidenconnects",
    screenshotCount: 5,
    category: "Puzzle",
    description: "Drop, Connect, Win.",
    features: [
      "Smart AI, Real Challenge",
      "Kids Mode: A gentler mode designed for younger players",
      "Two-Player Mode: Play with a friend on the same device or online"
    ],
    url: "https://apps.apple.com/us/app/aiden-connects/id6798768340",
    featured: 1,
    homeDescription: "Try to connect 4 in any direction. Kids get their own Kids Mode, which makes the game a little easier. You can set the difficulty, and play with a friend on the same device or online."
  },
  {
    name: "Emma Slides",
    icon: "images/icon/emma.png",
    screenshots: "emmaslides",
    screenshotCount: 5,
    category: "Puzzle",
    description: "Slide colorful pegs into place to match the goal",
    features: [
      "Simple drag-and-slide controls, no timers or pressure",
      "A relaxing puzzle for quiet moments",
      "Colorful, calming design great for all ages"
    ],
    url: "https://apps.apple.com/us/app/emma-slides/id6793634660",
    featured: 4,
    homeDescription: "Match the pattern with the goal card. Slide, Drop until the goal is reached."
  },
  {
    name: "Cast Connect",
    icon: "images/icon/film.png",
    screenshots: "castconnect",
    screenshotCount: 5,
    category: "Movies & TV",
    description: "Find hidden links in film & TV – discover which actors, directors & crew worked together across your favourite movies. Connections revealed in seconds!",
    features: [
      "Search by People: Find all movies/shows featuring multiple actors or crew",
      "Search by Movies: Discover shared cast and crew across productions",
      "Perfect for film buffs and trivia lovers"
    ],
    url: "https://apps.apple.com/us/app/cast-connect/id6751820156"
  },
  {
    name: "Hanoi Towers",
    icon: "images/icon/hanoi.png",
    screenshots: "hanoitowers",
    screenshotCount: 5,
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
    icon: "images/icon/flip.png",
    screenshots: "flipmatch",
    screenshotCount: 5,
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
    icon: "images/icon/move.png",
    screenshots: "numbermoves",
    screenshotCount: 5,
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
    icon: "images/icon/puzzle.png",
    screenshots: "puzzlyphoto",
    screenshotCount: 5,
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
    icon: "images/icon/peg.png",
    screenshots: "pegelimination",
    screenshotCount: 5,
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
    icon: "images/icon/master.png",
    screenshots: "colorlogic",
    screenshotCount: 5,
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
    icon: "images/icon/guess.png",
    screenshots: "numberguess",
    screenshotCount: 5,
    category: "Educational",
    description: "Learn to solve systems of equations in a fun way.<br>Match numbers and letters on both sides to find<br>equations and solve for unknowns.",
    features: [
      "Educational math game",
      "Solve systems of equations",
      "Interactive learning experience"
    ],
    url: "https://apps.apple.com/us/app/number-guess/id6466263744"
  },
  {
    name: "Dates",
    icon: "images/icon/date.png",
    screenshots: "dates",
    screenshotCount: 5,
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
    icon: "images/icon/stat.png",
    screenshots: "statisticsformula",
    screenshotCount: 5,
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
    icon: "images/icon/math.png",
    screenshots: "largemath",
    screenshotCount: 5,
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
    name: "GE Plus",
    icon: "images/icon/plus.png",
    screenshots: "geplus",
    screenshotCount: 5,
    category: "Finance",
    description: "Designed for people with shared expenses. Track who owes whom and how much with ease.",
    features: [
      "Full group expense tracking",
      "Receipts can split unequally",
      "Each receipt can have its own currency",
      "Define your own currency",
      "You can hide or show receipts, groups and more"
    ],
    url: "https://apps.apple.com/us/app/group-expenses/id1443950401"
  },
  {
    name: "Sunlight Hours",
    icon: "images/icon/earth.png",
    screenshots: "sunlighthours",
    screenshotCount: 5,
    category: "Educational",
    description: "View daylight hours at any latitude on any given day. Explore information about planets in our solar system.",
    features: [
      "Daylight calculation for any location",
      "Solar system planet information",
      "Educational and practical"
    ],
    url: "https://apps.apple.com/us/app/sun-light-hours/id6499107039",
    featured: 6,
    homeDescription: "View daylight hours at any latitude on any given day, and explore the planets of our solar system — built for landscape on iPad."
  },
  {
    name: "FastCam",
    supportName: "Fast Camera",
    icon: "images/icon/cam.png",
    screenshots: "fastcam",
    screenshotCount: 5,
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
    icon: "images/icon/ads.png",
    screenshots: "novaads",
    screenshotCount: 5,
    category: "Marketing",
    description: "Advertise your business across all NovaNext apps in one place.<br>Upload your banner, add your website, and purchase a time slot.",
    features: [
      "Reach users across multiple apps",
      "Easy banner upload",
      "Flexible time slot purchases"
    ],
    url: "https://apps.apple.com/us/app/nova-ads/id6743174733"
  },

  {
    name: "GE Light",
    icon: "images/icon/light.png",
    screenshots: "gelight",
    screenshotCount: 5,
    category: "Finance",
    description: "Designed for people with shared expenses. Track who owes whom<br>and how much with ease.",
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
   Render helpers - you normally never need to edit below this line
   ===================================================================== */

const ARROW_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>';

function findApp(appName) {
  return APPS.find(app => app.name === appName);
}

const SCREENSHOTS_FOLDER = 'images/screenshots/';
const DEFAULT_MAX_SCREENSHOTS = 5;

/* Folder name for screenshots, also used as the landing page id */
function appKey(app) {
  return app.screenshots || app.name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* Fills any <span data-app-count></span> with the number of apps */
function renderAppCounts() {
  document.querySelectorAll('[data-app-count]').forEach(element => {
    element.textContent = APPS.length;
  });
}

/* support.html: the "Need help with a specific app?" pills */
function renderSupportPills(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = APPS.map(app => {
    const contactName = encodeURIComponent(app.supportName || app.name);
    const label = app.legacy
      ? `<span>${app.name}<small>No longer maintained</small></span>`
      : app.name;
    return `<a class="app-pill${app.legacy ? ' legacy' : ''}" href="contact.html?app=${contactName}">` +
           `<img class="swatch" src="${app.icon}" alt="">${label}</a>`;
  }).join('');
}

/* index.html: the "Featured apps" cards */
function renderFeaturedApps(containerId) {
  const container = document.getElementById(containerId);
  const featuredApps = APPS
    .filter(app => app.featured)
    .sort((first, second) => first.featured - second.featured);

  container.innerHTML = featuredApps.map(app => `
    <div class="app-card">
        <img class="app-icon" src="${app.icon}" alt="${app.name} icon">
        <span class="app-category">${app.category}</span>
        <div class="app-name">${app.name}</div>
        <p class="app-description">${app.homeDescription || app.description}</p>
        <a class="app-link" href="${app.url}">
            View on App Store
            ${ARROW_ICON}
        </a>
    </div>`).join('');
}

/* product.html: the full alternating product list, with an iOS-style
   segmented control (All + one segment per category) inside the .header block.
   Products are removed and re-inserted right after .header on every change,
   so the page's even/odd layout styling keeps working exactly as before.
   The control brings its own CSS, so product.html needs no changes. */

const SEGMENTED_CONTROL_CSS = `
.segmented-wrap{display:flex;justify-content:center;margin-top:28px;}
.segmented{
    display:inline-flex;gap:2px;padding:3px;max-width:100%;
    background:rgba(118,118,128,.12);border-radius:10px;
    overflow-x:auto;scrollbar-width:none;
}
.segmented::-webkit-scrollbar{display:none;}
.segment{
    appearance:none;-webkit-appearance:none;border:0;background:transparent;
    font:inherit;font-size:13px;font-weight:500;color:#111827;
    padding:7px 16px;border-radius:8px;cursor:pointer;white-space:nowrap;
    transition:background .2s ease, box-shadow .2s ease;
}
.segment.active{
    background:#ffffff;font-weight:600;
    box-shadow:0 3px 8px rgba(0,0,0,.12), 0 3px 1px rgba(0,0,0,.04);
}
.product-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px;}
.learn-button{
    display:inline-block;padding:11px 22px;border-radius:12px;
    border:1px solid var(--border);background:#ffffff;
    color:var(--text) !important;text-decoration:none;
    font-weight:600;font-size:14px;transition:.2s;
}
.learn-button:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(17,24,39,.08);}
`;

function buildProductHtml(app) {
  const replacement = app.replacedBy ? findApp(app.replacedBy) : null;
  const categoryText = app.legacy ? `${app.category} · No longer maintained` : app.category;
  const legacyNote = app.legacy && replacement
    ? `<p class="legacy-note">${app.name} is no longer updated. Try <a href="${replacement.url}">${replacement.name}</a> instead.</p>`
    : '';
  return `
<div class="product${app.legacy ? ' legacy' : ''}">
    <div class="product-image">
        <img class="product-icon" src="${app.icon}" alt="${app.name}">
    </div>
    <div class="product-content">
        <span class="product-category">${categoryText}</span>
        <h2>${app.name}</h2>
        ${legacyNote}
        <p class="product-description">${app.description}</p>
        <ul class="product-features">
            ${app.features.map(feature => `<li>${feature}</li>`).join('\n            ')}
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
  const ALL_LABEL = 'All';
  const categories = [...new Set(APPS.map(app => app.category))];

  const styleElement = document.createElement('style');
  styleElement.textContent = SEGMENTED_CONTROL_CSS;
  document.head.appendChild(styleElement);

  function showProducts(selectedCategory) {
    document.querySelectorAll('.product').forEach(productElement => productElement.remove());
    const visibleApps = selectedCategory === ALL_LABEL
      ? APPS
      : APPS.filter(app => app.category === selectedCategory);
    header.insertAdjacentHTML('afterend', visibleApps.map(buildProductHtml).join(''));
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'segmented-wrap';
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
      control.querySelectorAll('.segment').forEach(other => {
        other.classList.toggle('active', other === segment);
        other.setAttribute('aria-pressed', other === segment ? 'true' : 'false');
      });
      showProducts(label);
    });
    control.appendChild(segment);
  });

  wrapper.appendChild(control);
  header.appendChild(wrapper);
  showProducts(ALL_LABEL);
}


/* app.html: one landing page for the app named in the URL (?id=aidenconnect).
   Screenshots are loaded from images/screenshots/<key>/ipad_01.jpg, ipad_02.jpg ...
   Files that do not exist are skipped, and the section hides if none load. */
function renderAppPage(containerId) {
  const container = document.getElementById(containerId);
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

  document.title = `${app.name} - NovaNext`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.content = app.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  container.innerHTML = `
    <a class="back-link" href="product.html">&larr; All products</a>
    <section class="app-hero">
        <img class="app-hero-icon" src="${app.icon}" alt="${app.name} icon">
        <div>
            <span class="product-category">${app.category}</span>
            <h1>${app.name}</h1>
            ${legacyNote}
            <p class="app-hero-description">${app.description}</p>
            <a href="${app.url}" class="download-button">Download on App Store</a>
        </div>
    </section>
    <section class="screenshots-section" hidden>
        <div class="screenshots"></div>
    </section>
    <section class="app-features">
        <h2>What it does</h2>
        <ul class="product-features">
            ${app.features.map(feature => `<li>${feature}</li>`).join('\n            ')}
        </ul>
    </section>
    <section class="app-links">
        <a href="contact.html?app=${contactName}">Get support</a>
        <a href="privacy.html">Privacy policy</a>
        <a href="product.html">More apps</a>
    </section>`;

  const screenshotSection = container.querySelector('.screenshots-section');
  const screenshotStrip = container.querySelector('.screenshots');
  const maxScreenshots = app.screenshotCount || DEFAULT_MAX_SCREENSHOTS;
  let screenshotsLeftToCheck = maxScreenshots;

  function screenshotChecked() {
    screenshotsLeftToCheck -= 1;
    if (screenshotsLeftToCheck === 0 && screenshotStrip.children.length > 0) {
      screenshotSection.hidden = false;
    }
  }

  for (let screenshotNumber = 1; screenshotNumber <= maxScreenshots; screenshotNumber++) {
    const paddedNumber = String(screenshotNumber).padStart(2, '0');
    const screenshotImage = document.createElement('img');
    screenshotImage.alt = `${app.name} screenshot ${screenshotNumber}`;
    screenshotImage.addEventListener('load', screenshotChecked);
    screenshotImage.addEventListener('error', () => {
      screenshotImage.remove();
      screenshotChecked();
    });
    screenshotImage.src = `${SCREENSHOTS_FOLDER}${appKey(app)}/ipad_${paddedNumber}.jpg`;
    screenshotStrip.appendChild(screenshotImage);
  }
}
