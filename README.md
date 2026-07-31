# QIZE Website

Static, responsive corporate website foundation for QIZE Intelligent Technology.

## Included

- Eight-page English website: Home, About, Products, Solutions, OEM, Projects, News and Contact
- Official QIZE logo asset
- Responsive desktop and mobile navigation
- Accessible page structure, reduced-motion support and keyboard skip link
- SEO titles, descriptions, canonical URLs, `robots.txt` and `sitemap.xml`
- Zero-build static architecture for direct GitHub Pages or Hostinger deployment
- Contact form that prepares an email to `info@qizezn.com` without storing visitor data

## Local preview

Run any static web server from the repository root. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Hostinger deployment

Connect this repository in hPanel and deploy the `main` branch to `public_html`.
The site is plain HTML, CSS and JavaScript, so no build command or Node runtime is required.

Recommended hPanel path:

`Websites → qizezn.com → Dashboard → Advanced → Git`

Before replacing the current production site, deploy to a temporary subdomain or backup the existing `public_html` directory.

## GitHub Pages

In repository settings, open **Pages**, choose **Deploy from a branch**, then select:

- Branch: `main`
- Folder: `/(root)`

For a project repository, GitHub Pages will normally publish at:

`https://huwanduf.github.io/qize-website/`

## Content notes

- The site deliberately excludes power tools from the product ecosystem.
- The Projects and News pages avoid fabricated cases or announcements. Approved project photography and verified editorial content can be added later.
- Replace the current CSS concept illustrations with approved QIZE product photography when production assets are ready.
