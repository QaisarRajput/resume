# Resume

This is a single-page web resume built using React. It is designed to showcase professional experience and can be easily managed via npm. The project is prepared for deployment to GitHub Pages without any server-side code.

## Project Structure

```
resume
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   └── Header.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
├── .gitignore
├── README.md
└── gh-pages-config.json
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/resume.git
   cd resume
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm start
   ```
   This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build of the project, run:
```
npm run build
```
This will generate a `build` folder containing the optimized application.

## Deployment to GitHub Pages

To deploy the project to GitHub Pages, follow these steps:

1. Ensure that your `gh-pages-config.json` is correctly configured.
2. Run the deployment script:
   ```
   npm run deploy
   ```
   This will publish your resume to GitHub Pages.

## Usage

You can customize the resume by editing the components in the `src` directory. The main application logic is in `App.jsx`, and the header can be modified in `Header.jsx`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.