# hhnqqq.github.io — Personal Homepage

Haonan He's personal homepage, hosted on GitHub Pages. Bilingual (EN / 中文), dark-glassmorphism design with a live particle background.

- 🌐 URL: https://hhnqqq.github.io
- 🎓 Scholar: https://scholar.google.com/citations?user=6YRQTlQAAAAJ
- 🐙 GitHub: https://github.com/hhnqqq

## Structure

```
├── index.html      # Single-page site
├── css/style.css   # Styles (light theme)
├── js/main.js      # i18n, particles, publications data & animations
├── img/papers/     # Main figure of each paper (arXiv figures + generated SVGs)
└── papers.bib      # BibTeX of all publications
```

## Deploy to GitHub Pages

```bash
cd ~/hhnqqq.github.io
git init
git add -A
git commit -m "feat: personal homepage"
git remote add origin git@github.com:hhnqqq/hhnqqq.github.io.git
git branch -M main
git push -u origin main
```

Notes:

- This repo already exists on GitHub as a fork of an old Jekyll blog template.
  To **replace** its content, force push (`git push -u origin main --force`), or
  delete the old repo on GitHub first and recreate it.
- GitHub Pages settings → Source: **Deploy from a branch** → branch `main` / root.
  Your site will be live at `https://hhnqqq.github.io`.
- If SSH (port 22 / 443) is blocked on your network, use HTTPS instead:

```bash
git remote set-url origin https://github.com/hhnqqq/hhnqqq.github.io.git
git push -u origin main
# HTTPS push requires a Personal Access Token (classic, scope: repo)
```

## Customize

- Publications live in the `PAPERS` array in `js/main.js` — edit metadata and links there.
- Copy translations in `I18N.en` / `I18N.zh`.
- Toggle particles on/off: `N` constant in `js/main.js`.

## License

MIT © Haonan He