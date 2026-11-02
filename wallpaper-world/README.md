# Wallpaper World

A responsive static wallpaper-gallery starter made with HTML, CSS, and JavaScript.

## Features
- Dark premium responsive design
- Search by title, category, and description
- Category filters and sorting
- Wallpaper preview dialog
- Opens the image source in a new tab (source hosts may restrict downloads)
- About, Privacy Policy, and Contact pages
- Basic title, description, Open Graph metadata, canonical URL placeholder, and JSON-LD
- No backend, database, API key, or build step required

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. For a more realistic local web server, open the folder in VS Code and use a local server extension, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish free with GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new **public** repository, e.g. `wallpaper-world`.
3. Upload the contents of this folder to the repository root. `index.html` must be at the root, not nested inside another folder.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then save.
7. Wait for the Pages deployment to complete. The site URL usually resembles `https://YOUR-USERNAME.github.io/wallpaper-world/`.
8. Update the canonical URL and JSON-LD URL in `index.html` to your real published URL.
9. Test every page and image on desktop and mobile.

## Add your own wallpapers
Edit the `wallpapers` array in `script.js`. Each item has:
- `id`: unique number
- `title`: title displayed on the card
- `category`: e.g. Nature, Gaming, Anime, Cars, Space, Animals, Architecture, Aesthetic, Flowers
- `resolution`: displayed label; only use a resolution you have verified
- `description`: short original description
- `image`: image URL or path to an image you have permission to use

For local files, create a folder such as `assets/images` and use paths like `assets/images/my-wallpaper.jpg`. Make sure filenames and letter case match exactly. Keep image sizes reasonable and use compressed WebP/JPEG where suitable.

## Important image licensing note
The initial demo data uses remote Unsplash image URLs as visual examples. Do not assume an image is free to redistribute or use as a downloadable wallpaper merely because it loads. Review the licence and provider terms for each image. Replace images with original work or properly licensed assets, and keep any required attribution.

## AdSense readiness (not approval)
Before applying:
- Publish original, useful content, not only a thin gallery of copied images.
- Add meaningful category pages or descriptive content.
- Replace all placeholder details in About, Privacy Policy, and Contact.
- Provide a working contact method.
- Ensure the site complies with current AdSense programme policies and privacy/consent requirements for your audience.
- Do not place ads in a way that encourages accidental clicks. Never click your own ads or ask others to click.
- Apply through the official Google AdSense website. Approval is not guaranteed.
- GitHub Pages is static hosting; this project has no admin panel, upload backend, user accounts, or database.

## Before launch checklist
- [ ] Replace `YOUR-USERNAME`, `YOUR-REPOSITORY`, and placeholder contact email
- [ ] Verify image licences and replace images if needed
- [ ] Check that all image URLs load
- [ ] Test search, filters, sorting, previews, and mobile navigation
- [ ] Review privacy policy and update it for any analytics/ad services
- [ ] Submit the site and sitemap through Google Search Console after launch
