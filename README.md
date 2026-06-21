# HOACalculator.com Deployment Guide

This project is built with React and Vite, optimized for high performance and SEO. Follow these steps to deploy your site to GitHub and Vercel.

## 1. Prepare Your GitHub Repository
1. Create a new repository on GitHub named `hoacalculator`.
2. Open your terminal in this project folder.
3. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HOA Calculator Launch"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hoacalculator.git
   git push -u origin main
   ```

## 2. Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** and select **"Project"**.
3. Import your `hoacalculator` repository.
4. Vercel will automatically detect Vite. Leave the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.

## 3. SEO & Monetization Tips
- **Google Search Console:** Submit your `sitemap.xml` (found at `hoacalculator.com/sitemap.xml`) once deployed.
- **AdSense:** Once you have some traffic, apply for AdSense. The placeholders are already in the code.
- **State Pages:** To add more states, simply add them to the `sitemap.xml` and they will be handled by the dynamic route in `App.tsx`.

## 4. Customizing Content
- All main content is located in `src/pages/Home.tsx`.
- State-specific logic is in `src/pages/StateTemplate.tsx`.
- Styling can be adjusted in `src/index.css` or via Tailwind classes in the components.

---
*Built for high-ranking performance and financial clarity.*
