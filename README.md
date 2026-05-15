# Oval Hotel Housekeeping Portfolio

This version is a **static website**. It has no `package.json`, no Node dependencies, and no npm install step. This avoids the Vercel error:

`npm error Exit handler never called!`

## Deploy on Vercel

1. Delete the old React/Vite files from your GitHub repo, especially:
   - `package.json`
   - `package-lock.json`
   - `node_modules` if it exists locally
   - `src/`
   - `vite.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`

2. Upload these files to the root of your GitHub repo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/`

3. In Vercel project settings:
   - Framework Preset: **Other**
   - Build Command: leave empty
   - Output Directory: leave empty or `.`
   - Install Command: leave empty

## Replacing images

Replace the files inside `/images` with your real logos and profile image. Keep the same filenames or update the paths in `index.html`.
