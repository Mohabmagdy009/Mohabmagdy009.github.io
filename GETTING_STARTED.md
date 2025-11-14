# 🚀 Getting Started - Visual Guide

## Your Portfolio in 5 Minutes

Follow this visual guide to get your portfolio running locally and deployed to the web.

---

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ Git installed - [Download here](https://git-scm.com/)
- ✅ A GitHub account - [Sign up here](https://github.com/)
- ✅ A code editor (VS Code recommended) - [Download here](https://code.visualstudio.com/)

Check your Node.js version:
```bash
node --version
# Should show v18.x.x or higher
```

---

## 🎯 Step-by-Step Guide

### Step 1: Navigate to Your Project ✅ DONE
```bash
cd /Users/mohab/code/mohab/Mohabmagdy009.github.io
```

**Status:** ✅ You're already here!

---

### Step 2: Install Dependencies ✅ DONE
```bash
npm install
```

**What this does:** Downloads all required packages (React, Vite, Tailwind, etc.)

**Status:** ✅ Already completed! (node_modules folder exists)

**Expected output:**
```
added 134 packages, and audited 135 packages in 15s
```

---

### Step 3: Start Development Server ⏭️ NEXT
```bash
npm run dev
```

**What this does:** Starts a local development server with hot-reload

**Expected output:**
```
VITE v5.2.11  ready in 421 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**Action:** Open your browser and visit `http://localhost:5173`

---

### Step 4: View Your Portfolio 🎉
Your portfolio should now be running locally!

**What you'll see:**
1. 🏠 Hero section with your name "Mohab Abbas"
2. 📖 About section with bio
3. 💻 Skills section with tech stack
4. 🚀 Projects section with 3 sample projects
5. 📧 Contact form
6. 🌓 Dark/Light mode toggle in the header

**Try these:**
- Click the theme toggle (sun/moon icon) in the header
- Scroll smoothly between sections using the navigation
- Test the mobile view (resize your browser or use DevTools)
- Click the CTA buttons
- Test the contact form

---

### Step 5: Customize Your Content 🎨

Now that it's running, let's make it yours!

#### 5.1 Update Your Name and Title
**File:** `src/components/Hero.jsx`

Find and update:
```jsx
<h1>Mohab Abbas</h1>
<h2>Senior Full-Stack Developer</h2>
```

**Hot reload:** Changes appear instantly! 🔥

---

#### 5.2 Update Your Bio
**File:** `src/components/About.jsx`

Update the bio paragraphs with your own story.

---

#### 5.3 Update Your Skills
**File:** `src/components/Skills.jsx`

Modify the `skillCategories` array:
```jsx
skills: [
  { name: 'React', icon: <FaReact />, level: 95 },
  // Add or modify your skills here
]
```

---

#### 5.4 Add Your Projects
**File:** `src/components/Projects.jsx`

Update the `projects` array with your actual projects:
```jsx
{
  title: 'Your Project Name',
  description: 'Project description...',
  image: 'https://your-image-url.com',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/yourusername/repo',
  demo: 'https://your-demo-url.com',
}
```

---

#### 5.5 Update Contact Info
**File:** `src/components/Contact.jsx`

Update your email and location:
```jsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

<p>Your City, Your Country</p>
```

---

#### 5.6 Update Social Links
**Files:** `src/components/Hero.jsx` and `src/components/Contact.jsx`

Update GitHub, LinkedIn, and Twitter URLs with your profiles.

---

### Step 6: Test Your Changes ✅

After customizing, test everything:
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Dark/Light mode toggles correctly
- [ ] All your links are correct
- [ ] Mobile view looks good
- [ ] All sections display properly

---

### Step 7: Build for Production 🏗️

Once you're happy with your changes:
```bash
npm run build
```

**Expected output:**
```
✓ 46 modules transformed.
dist/index.html                   0.89 kB
dist/assets/index-XXXXX.css      21.46 kB
dist/assets/index-XXXXX.js      197.36 kB
✓ built in 834ms
```

**What this does:** Creates optimized production files in the `dist` folder

**Preview your production build:**
```bash
npm run preview
```
Visit `http://localhost:4173` to see the production version.

---

### Step 8: Deploy to GitHub Pages 🚀

#### 8.1 Initialize Git (if not already done)
```bash
git status
# If you see "not a git repository", run:
git init
```

#### 8.2 Add Your GitHub Remote
```bash
git remote add origin https://github.com/Mohabmagdy009/Mohabmagdy009.github.io.git

# Or use your own repository:
# git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

#### 8.3 Commit Your Changes
```bash
git add .
git commit -m "Initial commit: Personal portfolio website"
```

#### 8.4 Push to GitHub
```bash
git push -u origin main
```

**Note:** If your default branch is `master`, use:
```bash
git push -u origin master
```

---

### Step 9: Enable GitHub Pages 🌐

1. **Go to your GitHub repository**
2. **Click on "Settings"** (top right)
3. **Scroll down to "Pages"** (left sidebar)
4. **Under "Source":**
   - Select **"GitHub Actions"**
5. **Save**

---

### Step 10: Watch the Magic Happen! ✨

1. **Go to the "Actions" tab** in your repository
2. **Watch the workflow run** (takes 1-2 minutes)
3. **Wait for the green checkmark** ✅
4. **Visit your live site:**
   ```
   https://mohabmagdy009.github.io/
   ```

**Congratulations!** Your portfolio is now live! 🎉

---

## 🎨 Visual Checklist

### Before Deployment
```
✅ Dependencies installed (npm install)
✅ Project runs locally (npm run dev)
✅ Personal info updated
✅ Bio updated
✅ Skills updated
✅ Projects added
✅ Contact info updated
✅ Social links updated
✅ Tested on mobile view
✅ Dark mode works
✅ Build succeeds (npm run build)
```

### Deployment
```
✅ Git initialized
✅ Remote added
✅ Changes committed
✅ Pushed to GitHub
✅ GitHub Pages enabled
✅ Workflow completed
✅ Site is live!
```

---

## 🔄 Making Updates

Once deployed, updating is easy:

1. **Make your changes locally**
2. **Test with `npm run dev`**
3. **Commit and push:**
```bash
git add .
git commit -m "Update: Your change description"
git push
```
4. **Wait 1-2 minutes** for auto-deployment
5. **Refresh your live site!**

---

## 📊 What You've Built

### Features Overview
```
✨ Features Implemented:
├── 🎨 Responsive Design (Mobile → Desktop)
├── 🌓 Dark/Light Mode Toggle
├── 🧭 Smooth Scroll Navigation
├── 🚀 Fast Loading (Vite Optimization)
├── 📱 Mobile Menu
├── 💼 Professional Sections
├── 🔗 Social Media Integration
├── 📧 Contact Form UI
├── 🎯 Call-to-Action Buttons
└── 🤖 Auto-Deployment (GitHub Actions)
```

### Tech Stack
```
Frontend:
├── React 18.3.1
├── Vite 5.2.11
└── Tailwind CSS 3.4.3

Icons:
└── React Icons 5.0.1

Deployment:
├── GitHub Pages
└── GitHub Actions
```

---

## 🆘 Common Issues & Solutions

### Issue: Port 5173 is already in use
**Solution:**
```bash
# Option 1: Kill the process
lsof -ti:5173 | xargs kill

# Option 2: Use a different port
npx vite --port 3000
```

### Issue: Changes not showing
**Solution:**
```bash
# Hard refresh your browser
# Mac: Cmd + Shift + R
# Windows/Linux: Ctrl + Shift + R
```

### Issue: Build fails
**Solution:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: GitHub Pages shows 404
**Solutions:**
1. Wait 5-10 minutes for DNS propagation
2. Check Settings → Pages → Source is "GitHub Actions"
3. Check Actions tab for errors
4. Verify `vite.config.js` base path is correct

---

## 🎓 Learn More

### Project Files to Explore
- `src/App.jsx` - Main app structure
- `src/context/ThemeContext.jsx` - Dark mode implementation
- `tailwind.config.js` - Customize colors
- `.github/workflows/deploy.yml` - Deployment automation

### Documentation Files
- `README.md` - Comprehensive documentation
- `QUICKSTART.md` - Quick reference
- `PROJECT_STRUCTURE.md` - File structure details
- `DEPLOYMENT_CHECKLIST.md` - Deployment steps

---

## 🎉 You're All Set!

Your portfolio is now:
✅ Running locally
✅ Customized with your info
✅ Built and optimized
✅ Deployed to GitHub Pages
✅ Live on the internet!

### Share Your Portfolio
📧 Add it to your email signature
💼 Put it on your LinkedIn profile
📝 Include it in your resume
🐦 Tweet about it
👥 Share with friends and colleagues

---

## 🌟 Next Level

Want to enhance your portfolio further?

### Advanced Customization
- 🎨 Add custom fonts
- 🖼️ Add real project screenshots
- 📊 Integrate Google Analytics
- 🔗 Add a custom domain
- 📝 Add a blog section
- 🎥 Add video demos
- 📈 Add testimonials section

### Optimization
- 🚀 Implement lazy loading
- 📦 Optimize images with WebP
- 🎯 Add animations with Framer Motion
- 📱 Add PWA support

---

**Remember:** Your portfolio is a living document. Keep it updated with your latest projects and skills!

**Good luck with your job search and career! 🚀**

---

Built with ❤️ using React, Vite, and Tailwind CSS

