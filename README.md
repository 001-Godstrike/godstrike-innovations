# Godstrike Innovations Portfolio

A mobile-first, static portfolio for Godstrike Innovations. Built with HTML, CSS and vanilla JavaScript so it can be edited and served directly from Termux.

## 1. Personalise the site

Open `js/config.js` and replace:

- `[Your Name]` in `index.html` and `js/config.js`
- `your-email@example.com` with your public contact email
- `https://github.com/your-username` with your GitHub profile

Also review every project description and status before publishing. Add only real screenshots, public repository links and working demos.

## 2. Run in Termux

Install a local web server:

```bash
pkg update && pkg upgrade
pkg install python
```

Move into the extracted project folder. For example:

```bash
cd ~/godstrike-innovations
python -m http.server 8080
```

Open this address in your phone browser:

```text
http://127.0.0.1:8080
```

Stop the server with `CTRL + C`.

If you want to serve the site from shared storage, copy the folder there first. Termux may need storage permission:

```bash
termux-setup-storage
```

## 3. Deploy

This is a static site. It can be deployed using GitHub Pages, Cloudflare Pages or Vercel. No database or server-side runtime is required for this first version.

## 4. Before public launch

- Replace the sample name, email and GitHub URL.
- Confirm your course and biography wording.
- Check project descriptions and status labels for accuracy.
- Remove any private data, credentials, student records or attendance codes.
- Add your own project screenshots and design work.
- Test all links on mobile.
- Add a privacy notice if you later add analytics or a contact form that collects data.

## 5. Current limitations

- The contact action opens the visitor's email application; it does not send messages into a database.
- Project cards are static and do not yet have individual case-study pages.
- No admin dashboard, authentication or database is included.
- External Google Fonts require an internet connection; system fonts provide a fallback.

## Folder structure

```text
godstrike-innovations/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   └── main.js
└── assets/
    └── images/
        └── favicon.svg
```
