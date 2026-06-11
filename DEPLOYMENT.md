# Deployment Instructions

To make your latest code changes live on the website, you need to build the project and deploy it to Firebase Hosting.

Here are the step-by-step instructions you can run in your terminal:

## 1. Build the Project
First, compile your code into a production-ready build. Since we are using `pnpm` for this project, run:
```bash
pnpm run build
```
This will create (or update) the `dist` folder with all your optimized assets.

## 2. Deploy to Firebase
Once the build is complete, deploy the site to Firebase Hosting by running:
```bash
npx firebase-tools deploy --only hosting
```
*(Note: If you are not logged in to Firebase, it might prompt you to authenticate. If you need to log in manually, you can run `npx firebase-tools login` first).*

## 3. Push your changes to GitHub (Highly Recommended)
After deploying, make sure to save your work to your GitHub repository so your source code is up to date:
```bash
git add .
git commit -m "Update website with latest changes"
git push origin main
```
