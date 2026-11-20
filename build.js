/* Generates static pages for every app, plus sitemap.xml and robots.txt.
   Run after editing apps.js:   node build.js
   Set SITE to your real domain (no trailing slash). */
const fs = require('fs'), vm = require('vm');
const SITE = 'https://www.novanext.ca';

const ctx = vm.createContext({ document: {}, window: {}, console });
vm.runInContext(fs.readFileSync('apps.js', 'utf8') +
  '\n;this.__ = { APPS, appKey, appPageUrl, buildAppPageHtml };', ctx);
const { APPS, appKey, appPageUrl, buildAppPageHtml } = ctx.__;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const plain = s => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const tpl = fs.readFileSync('app.html', 'utf8');
const need = x => { if (!tpl.includes(x)) throw new Error('app.html is missing: ' + x); return x; };

for (const app of APPS) {
  const key = appKey(app), file = appPageUrl(app), url = `${SITE}/${file}`;
  const title = `${app.name} - iOS app by NovaNext`, desc = plain(app.description);
  const itunesId = (app.url.match(/id(\d+)/) || [])[1];
  const ld = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: app.name,
    description: desc, operatingSystem: 'iOS', applicationCategory: 'MobileApplication',
    url: app.url, image: `${SITE}/images/icon/${app.icon}.png`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@type': 'Organization', name: 'NovaNext' } };
  const head = `<link rel="canonical" href="${url}">
<meta property="og:site_name" content="NovaNext"><meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${SITE}/images/icon/${app.icon}.png">
<meta name="twitter:card" content="summary">${itunesId ? `\n<meta name="apple-itunes-app" content="app-id=${itunesId}">` : ''}
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>`;
  const html = tpl
    .replace(need('<title>App - NovaNext</title>'), `<title>${esc(title)}</title>`)
    .replace(need('<meta name="description" content="NovaNext iOS apps">'), `<meta name="description" content="${esc(desc)}">`)
    .replace('<meta name="robots" content="noindex">\n', '')
    .replace('</head>', () => head)
    .replace(need('<div class="container" id="app-page"></div>'), () => `<div class="container" id="app-page">${buildAppPageHtml(app)}</div>`)
    .replace(need("renderAppPage('app-page');"), `renderStaticAppPage('app-page', '${key}');`);
  fs.writeFileSync(file, html);
}

const pages = ['', 'product.html', 'about.html', 'support.html', /* SCHOOLS: add back when live 'schools.html', */ 'contact.html', 'privacy.html', 'terms.html', ...APPS.map(appPageUrl)];
fs.writeFileSync('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(p => `  <url><loc>${SITE}/${p}</loc></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`Built ${APPS.length} app pages, sitemap.xml and robots.txt`);