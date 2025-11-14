# Deployment Checklist

Use this checklist before deploying your portfolio to GitHub Pages.

## 📋 Pre-Deployment Checklist

### ✅ Content Updates

- [ ] Updated name in `src/components/Hero.jsx`
- [ ] Updated job title in `src/components/Hero.jsx`
- [ ] Updated bio in `src/components/About.jsx`
- [ ] Updated skills and proficiency levels in `src/components/Skills.jsx`
- [ ] Added your real projects in `src/components/Projects.jsx`
- [ ] Updated contact email in `src/components/Contact.jsx` and `src/components/Hero.jsx`
- [ ] Updated location in `src/components/Contact.jsx`
- [ ] Updated all GitHub links (replace `Mohabmagdy009` with your username)
- [ ] Updated LinkedIn link (replace with your profile)
- [ ] Updated social media links

### ✅ Configuration

- [ ] Updated `package.json` name field if needed
- [ ] Verified `vite.config.js` base path is correct
- [ ] Checked `index.html` title and meta description
- [ ] Customized theme colors in `tailwind.config.js` (optional)

### ✅ Testing

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and test locally
- [ ] Test all navigation links work
- [ ] Test smooth scrolling
- [ ] Test dark/light mode toggle
- [ ] Test on mobile viewport (Chrome DevTools)
- [ ] Test on tablet viewport
- [ ] Test all external links open in new tab
- [ ] Build successfully with `npm run build`
- [ ] Preview build with `npm run preview`

### ✅ GitHub Repository Setup

- [ ] Repository created on GitHub
- [ ] Repository name is `yourusername.github.io` for user site
  - OR repository name matches your project name for project site
- [ ] Added remote: `git remote add origin https://github.com/yourusername/repository.git`
- [ ] Initial commit made
- [ ] Pushed to main branch

### ✅ GitHub Pages Configuration

- [ ] Go to repository **Settings** → **Pages**
- [ ] Under **Source**, select **GitHub Actions**
- [ ] Save settings

### ✅ GitHub Actions

- [ ] `.github/workflows/deploy.yml` file exists
- [ ] Workflow has correct permissions in the file
- [ ] Push changes to trigger workflow
- [ ] Monitor deployment in **Actions** tab
- [ ] Wait for green checkmark (successful deployment)

### ✅ Post-Deployment

- [ ] Visit your site at `https://yourusername.github.io/`
- [ ] Test all features on live site
- [ ] Test on real mobile device
- [ ] Check browser console for errors
- [ ] Test sharing on social media (preview image works)
- [ ] Add custom domain (optional)

## 🚀 Deployment Commands

### First Time Deployment

```bash
# 1. Install dependencies
npm install

# 2. Build and test locally
npm run build
npm run preview

# 3. Initialize git (if not already done)
git init

# 4. Add remote
git remote add origin https://github.com/yourusername/repository.git

# 5. Add all files
git add .

# 6. Commit
git commit -m "Initial commit: Portfolio website"

# 7. Push to GitHub
git push -u origin main
```

### Updating Your Portfolio

```bash
# 1. Make your changes

# 2. Test locally
npm run dev

# 3. Build and preview
npm run build
npm run preview

# 4. Commit changes
git add .
git commit -m "Update: Description of changes"

# 5. Push to GitHub (auto-deploys)
git push origin main
```

## 🔧 Troubleshooting

### Issue: Workflow not running

**Solution:**
1. Check **Settings** → **Actions** → **General**
2. Ensure "Allow all actions and reusable workflows" is selected
3. Ensure workflow permissions are set to "Read and write permissions"

### Issue: 404 Error after deployment

**Solutions:**
1. Check GitHub Pages source is set to "GitHub Actions"
2. Verify `base` in `vite.config.js` matches your repo name
3. Wait 5-10 minutes for DNS propagation
4. Clear browser cache

### Issue: Build failing

**Solutions:**
1. Check **Actions** tab for error details
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check Node.js version (should be 18+)

### Issue: Dark mode not working

**Solutions:**
1. Clear browser localStorage
2. Check `tailwind.config.js` has `darkMode: 'class'`
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Contact form not working

**Note:** The contact form is UI-only. To make it functional:
1. Integrate with [Formspree](https://formspree.io)
2. Use [EmailJS](https://www.emailjs.com)
3. Add your own backend endpoint
4. Use Netlify Forms (if hosting on Netlify)

## 📊 Monitoring

After deployment, monitor:
- [ ] **Actions** tab for deployment status
- [ ] **Insights** → **Traffic** for visitor analytics
- [ ] Browser console for JavaScript errors
- [ ] Lighthouse score for performance

## 🎯 Optimization Tips

### Performance
- Optimize images (use WebP format)
- Enable Vite's build optimizations (already configured)
- Monitor bundle size: `npm run build -- --report`

### SEO
- Add meta tags in `index.html`
- Create a `sitemap.xml`
- Add `robots.txt`
- Use semantic HTML (already implemented)

### Accessibility
- Test with screen readers
- Check color contrast ratios
- Ensure keyboard navigation works
- Add ARIA labels where needed

## 🔄 Regular Maintenance

Weekly:
- [ ] Check for broken links
- [ ] Update projects section

Monthly:
- [ ] Update dependencies: `npm update`
- [ ] Test all functionality
- [ ] Review and update skills

Quarterly:
- [ ] Add new projects
- [ ] Update bio/experience
- [ ] Review analytics
- [ ] Update resume/CV

---

## ✨ Success Indicators

Your portfolio is successfully deployed when:
- ✅ Site loads at your GitHub Pages URL
- ✅ All sections display correctly
- ✅ Navigation works smoothly
- ✅ Dark/light mode toggles properly
- ✅ All links work (internal and external)
- ✅ Mobile responsive design works
- ✅ No console errors
- ✅ Forms display correctly

---

**Ready to deploy?** Follow the checklist above and you'll be live in minutes! 🚀

