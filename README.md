# Mohab Abbas - Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Mohabmagdy009/Mohabmagdy009.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Mohabmagdy009/Mohabmagdy009.github.io/actions/workflows/deploy.yml)

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with dark mode support and smooth animations.

> **📚 Additional Documentation:** This project includes comprehensive local documentation in the `docs/` folder (not tracked in git). Check the `docs/` directory for detailed guides including:
> - **GETTING_STARTED.md** - Step-by-step visual guide
> - **QUICKSTART.md** - 3-minute quick start
> - **PROJECT_STRUCTURE.md** - Detailed file structure
> - **DEPLOYMENT_CHECKLIST.md** - Pre-deployment checklist
> - **SUMMARY.md** - Project overview
> - **DOCS_INDEX.md** - Documentation navigator

## ✨ Features

- 🎨 Modern and responsive design
- 🌓 Light/Dark mode toggle
- ⚡ Built with Vite for fast development and optimized builds
- 💅 Styled with Tailwind CSS
- 📱 Mobile-first responsive layout
- 🎯 Smooth scroll navigation
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- ♿ Accessible and SEO-friendly

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/Mohabmagdy009/Mohabmagdy009.github.io.git
cd Mohabmagdy009.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to Main Branch:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once completed, your site will be live at `https://mohabmagdy009.github.io/`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Install the `gh-pages` package:
```bash
npm install -D gh-pages
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
Mohabmagdy009.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light mode context
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update bio and professional highlights

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Update proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your own projects
   - Update GitHub links and descriptions

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email and location
   - Configure form submission (see below)

### Configure Contact Form

The contact form is currently UI-only. To make it functional, you have several options:

1. **Formspree:**
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action in `Contact.jsx`

2. **EmailJS:**
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Install EmailJS SDK
   - Configure in `Contact.jsx`

3. **Netlify Forms:**
   - If deploying to Netlify, add `netlify` attribute to form

### Customize Theme Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3b82f6',  // Your primary color
        dark: '#60a5fa',   // Dark mode variant
      },
    },
  },
}
```

## 🐛 Troubleshooting

### Deployment Issues

1. **404 Error after deployment:**
   - Ensure GitHub Pages is set to use GitHub Actions as the source
   - Check that the `base` in `vite.config.js` matches your repository name

2. **Workflow not running:**
   - Check that workflows are enabled in repository settings
   - Ensure the workflow file is in `.github/workflows/`

3. **Build failures:**
   - Check the Actions tab for error logs
   - Ensure all dependencies are listed in `package.json`

### Development Issues

1. **Port already in use:**
   - Change the port in `vite.config.js` or stop other services using port 5173

2. **Dark mode not working:**
   - Clear browser cache and localStorage
   - Check that `darkMode: 'class'` is set in `tailwind.config.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mohabmagdy009/Mohabmagdy009.github.io/issues).

## 👤 Author

**Mohab Abbas**

- GitHub: [@Mohabmagdy009](https://github.com/Mohabmagdy009)
- LinkedIn: [mohab-abbas](https://linkedin.com/in/mohab-abbas)
- Email: mohab.abbas@example.com

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React, Vite, and Tailwind CSS
