# 🌟 Professional Resume Web App

## 👨‍💻 About Me

I am **Qaisar Tanvir**, a Senior Lead AI Architect passionate about artificial intelligence and software development. With over 10 years of experience in AI, ML, and deep learning, I've led numerous projects across various industries including Healthcare, Pharma, Finance, and Retail.

This project originated from my desire to maintain a single source of truth for my professional resume that is:
- Easy to update without relying on paid resume builders
- Accessible as a web portfolio
- Printable to PDF using browser's print function (Ctrl+P)
- Version controlled through Git
- Deployable as a website through GitHub Pages

---

A **modern, responsive, and interactive single-page web application** built with **React** that serves dual purposes:
1. A web-based portfolio that showcases my professional experience, projects, and achievements
2. A cleanly formatted resume that can be printed directly from the browser

The project is designed to be easily customizable and can be forked by others who want to maintain their resumes in a similar way.

---

## 🚀 Features

- **Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Dark Mode Support**: Toggle between light and dark themes for better readability.
- **Interactive Components**: Built with React and styled for a professional look.
- **Customizable**: Easily update content such as experience, projects, certifications, and more.
- **Print-Ready**: Automatically adjusts for printing, making it easy to generate a physical copy.
- **Deployment-Ready**: Pre-configured for deployment to GitHub Pages.

---

## 📂 Project Structure

```
resume
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── site.webmanifest
├── src
│   ├── components
│   │   └── Resume.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── data
│       └── resumeData.js
├── .gitignore
├── package.json
├── README.md
└── gh-pages-config.json
```

---

## 🎨 Technologies Used

- **Frontend**: React, CSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **Styling**: CSS Variables for light/dark themes

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/resume.git
   cd resume
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📦 Building for Production

To create a production build of the project, run:
```bash
npm run build
```
This will generate a `build` folder containing the optimized application.

---

## 🌐 Deployment to GitHub Pages

1. Ensure your `gh-pages-config.json` is correctly configured.
2. Deploy the project:
   ```bash
   npm run deploy
   ```
   Your resume will be published to GitHub Pages.

---

## ✨ Customization

- **Content**: Update the content in `src/components/Resume.jsx` or use `resumeData.js` for dynamic data.
- **Styling**: Modify `App.css` and `Resume.css` for custom styles.
- **Theme**: Adjust CSS variables in `App.css` for light/dark theme colors.

---

## 📖 Usage

This project is perfect for:
- Showcasing your professional experience and skills.
- Highlighting projects, certifications, and achievements.
- Sharing your resume online with a unique URL.

---

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📸 Screenshots

### Light Mode
![Light Mode Screenshot](public\light.png)

### Dark Mode
![Dark Mode Screenshot](public\dark.png)

---

## 👨‍💻 Author

**Qaisar Tanvir**  
[LinkedIn](https://linkedin.com/in/qaisartanvir) | [Medium](https://medium.com/@qaisartanvir)

Feel free to reach out for any questions or suggestions!