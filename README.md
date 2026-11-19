# NovaNext website update

Copy these files over your existing site folder (your `images/` and `videos/` folders are untouched).

## Before you publish
1. **Set your domain.** The files assume `https://www.novanext.ca` (taken from your old privacy page). If that is wrong, search and replace it in `build.js` and in the `<head>` of the 7 main pages (canonical + og tags), then run `node build.js`.
2. **Review `privacy.html`.** I added Advertising and Contact Form sections based on your app-ads.txt, support FAQ and contact form. Check them against the SDKs your apps really use (AdMob? Unity? ATT prompt?). I'm not a lawyer.

## What changed
- **Mobile menu**: hamburger menu under 720px, with Escape to close.
- **Shared code**: `styles.css` holds the common CSS; `site.js` holds the nav, footer and analytics. Add or rename a nav link in `site.js` once.
- **Static app pages**: `node build.js` writes `app-<name>.html` for every app in `apps.js` (own title, description, social preview, Smart App Banner, structured data), plus `sitemap.xml` and `robots.txt`. Re-run it whenever you edit `apps.js`. `app.html?id=...` redirects to the new pages, so old links still work.
- **Cookie notice**: Google Analytics now loads only after a visitor clicks Accept. Footer has a "Cookie settings" link.
- **Privacy policy**: new Advertising and Contact Form sections, updated analytics wording, Contact section restored, new date.
- **Copy**: About page now uses "we" throughout; homepage hero now reads as an app publisher rather than a studio for hire.
- **Extras**: meta descriptions, favicon, canonical and Open Graph tags on every page, `404.html` (set it as your host's 404 page), skip link, visible keyboard focus, reduced-motion support, featured cards link to each app's page.

## Not done
- Official App Store badges and screenshots on the homepage (download Apple's badge artwork and add it to the cards).
- `product.html` still builds its list with JavaScript (each app page is static, and the sitemap lists them).
