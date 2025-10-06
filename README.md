# Sahana Santhosh - Portfolio Website

A modern, responsive portfolio website built with React and Material-UI showcasing ML/AI engineering projects and experience.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps


 **Install Dependencies**
   ```
   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-scroll
   ```

 **Copy All Files**
   - Copy all files from the artifacts into their respective locations
   - Ensure the folder structure matches the project structure below

 **Run Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

 **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
sahana-portfolio/
├── public/
│   └── indehtml
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── theme.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 📦 Dependencies

```json
{
  "@mui/material": "^5.14.19",
  "@mui/icons-material": "^5.14.19",
  "@emotion/react": "^11.11.1",
  "@emotion/styled": "^11.11.0",
  "react-scroll": "^1.9.0"
}
```

## ✨ Features

- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Material-UI Components** - Professional, modern UI
- ✅ **Smooth Scrolling** - Seamless navigation experience
- ✅ **Dark Theme** - Eye-friendly gradient design
- ✅ **Animated Sections** - Engaging user experience
- ✅ **Mobile Menu** - Responsive navigation drawer
- ✅ **Professional Timeline** - Experience section with visual timeline
- ✅ **Project Showcase** - Card-based project display
- ✅ **Contact Section** - Easy-to-access contact information

## 🎨 Customization

### Colors
Edit `src/theme.js` to change the color scheme:
```javascript
primary: {
  main: '#8b5cf6', // Change primary color
},
secondary: {
  main: '#ec4899', // Change secondary color
},
```

### Content
Update content in respective component files:
- **Personal Info**: `src/components/Hero.js`
- **Skills**: `src/components/Skills.js`
- **Experience**: `src/components/Experience.js`
- **Projects**: `src/components/Projects.js`
- **Contact**: `src/components/Contact.js`

### Add LinkedIn/GitHub URLs
In `src/components/Contact.js`, update the links:
```javascript
{
  icon: <LinkedInIcon />,
  title: 'LinkedIn',
  value: 'Connect on LinkedIn',
  link: 'https://linkedin.com/in/your-profile', // Add your URL
},
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/sahana-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Run:
```bash
npm run deploy
```

## 📱 Mobile Responsive

The portfolio is fully responsive with:
- Mobile navigation drawer
- Responsive grid layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🎯 SEO Optimized

- Semantic HTML structure
- Meta tags in `public/index.html`
- Descriptive section IDs
- Clean URL structure

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sahana Santhosh**
- Email: santhoshsahana99@gmail.com
- Phone: +1 (520) 230-6890

---

Built with ❤️ using React and Material-UI