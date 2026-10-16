# Vafa.co

Personal headquarters of Emod Vafa. Buildless public website with a small Python generator. No npm dependencies, tracking scripts, remote fonts, or application secrets.

## Content

Edit `content.json` for the public identity, ventures, and selected experience. Run `python3 build.py` to regenerate HTML, identity JSON, sitemap, and AI summary. Edit `public/style.css` for presentation. Generated output is committed so a static host can serve it without a build runtime.

## Vercel

Import `Emodv/Vafa.co`. Framework: Other. Output: `public`. The included configuration regenerates pages with Python. If the build image lacks Python, clear Build Command and deploy the committed `public` folder. Add vafa.co and www.vafa.co using the records shown in Vercel. Preserve Google Workspace MX, SPF, DKIM and DMARC records. Choose one canonical hostname and redirect the other.

## Verification and editorial standards

Only user-supplied roles and descriptions are included. These are self-published statements, not third-party credentials. CityVerified is marked in development. 416-Flowers is labeled client work. No employment dates, audited metrics, testimonials, or unconfirmed logos are published. Expand experience only with confirmed relationship, contribution, dates and evidence. Do not add private account inventories or financial information.

Public identity: `/identity.json`; schema.org Person is embedded on every page. Identity data identifies the site author; it does not cryptographically verify identity or imply brand endorsement.

Before production: visually review at mobile and desktop sizes, test email/phone/booking links and the deployed 404, verify DNS/HTTPS, and confirm venture descriptions. Conversion analytics are intentionally absent until a measurement provider and privacy requirements are selected.
