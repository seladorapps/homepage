# Selador Apps Homepage

A beautiful one-page website showcasing Selador Apps, built with React and Vite.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations on scroll
- 📱 Mobile-friendly
- 🔗 App store links for Android and iOS
- 🚀 Optimized for GitHub Pages deployment

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` ?

### Build for production

```bash
npm run build
```

## Deploying to GitHub Pages

### Option 1: Manual deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Option 2: GitHub Actions (Recommended)

The repo includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Go to your repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push your code to the `main` branch

The site will be deployed automatically.

### Important Configuration

The `vite.config.js` is configured with `base: '/homepage/'` which assumes the repository is named `homepage`. If your repository has a different name, update this value accordingly:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

## Project Structure

```
homepage/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT License - see LICENSE file for details
