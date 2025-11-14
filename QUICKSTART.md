# Quick Start Guide

## 🚀 Getting Started in 3 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:5173`

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🎨 Quick Customization

### 1. Update Personal Info
Edit these files with your information:
- `src/components/Hero.jsx` - Name, title, social links
- `src/components/About.jsx` - Bio and highlights
- `src/components/Skills.jsx` - Your skills and proficiency
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

### 2. Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#your-color',
    dark: '#your-color',
  },
}
```

### 3. Deploy to GitHub Pages

#### Option A: Automatic (Recommended)
1. Go to **Settings** → **Pages** → Select **GitHub Actions**
2. Push your changes:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

#### Option B: Manual
```bash
npm run build
npm install -D gh-pages
npx gh-pages -d dist
```

## ✅ Checklist Before Deploying

- [ ] Update personal information in all components
- [ ] Replace placeholder email addresses
- [ ] Update GitHub and social media links
- [ ] Test dark/light mode toggle
- [ ] Test on mobile devices
- [ ] Enable GitHub Pages in repository settings

## 🆘 Need Help?

Check the main [README.md](./README.md) for detailed documentation.

## 🎯 What's Included

✅ Responsive design (mobile to desktop)
✅ Dark/Light mode with persistence
✅ Smooth scroll navigation
✅ Contact form UI
✅ Project showcase
✅ Skills section with progress bars
✅ Professional hero section
✅ Auto-deployment via GitHub Actions

---

Happy coding! 🎉

