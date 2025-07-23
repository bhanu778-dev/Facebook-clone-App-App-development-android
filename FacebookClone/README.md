# Facebook Clone

A pixel-perfect clone of Facebook's login page built with React.js.

## 🚀 Features

- **Exact Facebook UI replica** - Matches the original Facebook login page design
- **Responsive design** - Works perfectly on desktop, tablet, and mobile devices
- **Form validation** - Email/phone and password field validation
- **Interactive elements** - Hover effects, focus states, and button interactions
- **Language selector** - Multi-language support dropdown
- **Complete footer** - All Facebook links and services
- **Modern React** - Built with React 18 and modern hooks

## 📦 Installation

1. **Clone or download** this project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open your browser** and navigate to `http://localhost:3000`

## 🛠️ Build for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## 📁 Project Structure

```
FacebookClone/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   ├── LoginScreen.js   # Main login page component
│   │   ├── LoginScreen.css  # Login page styles
│   │   ├── LoginForm.js     # Login form component
│   │   ├── LoginForm.css    # Login form styles
│   │   ├── LanguageSelector.js  # Language dropdown
│   │   ├── LanguageSelector.css # Language styles
│   │   ├── FooterLinks.js   # Footer navigation
│   │   └── FooterLinks.css  # Footer styles
│   ├── App.js              # Main App component
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Styling

The project uses pure CSS with:
- **Facebook's official color scheme** (#1877F2 blue)
- **Responsive breakpoints** for mobile compatibility
- **Hover and focus effects** for better UX
- **Google Fonts** for typography

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## 📱 Screenshots

The application perfectly replicates Facebook's login page with:
- Facebook logo and branding
- Login form with email/phone and password fields
- "Log In" and "Create new account" buttons
- Language selector with multiple languages
- Complete footer with all Facebook links
- Responsive design for all screen sizes

## 🔧 Customization

You can easily customize:
- **Colors** in the CSS files
- **Languages** in `LanguageSelector.js`
- **Footer links** in `FooterLinks.js`
- **Form validation** in `LoginForm.js`

## 📄 License

This project is for educational purposes only. Facebook and its logo are trademarks of Meta Platforms, Inc.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Note**: This is a frontend clone for demonstration purposes. It does not include actual authentication functionality.
