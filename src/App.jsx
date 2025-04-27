import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import { FaSun, FaMoon, FaPrint } from 'react-icons/fa';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="app">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button className="print" title="Print the document in A4 with minimum margins"
              onClick={() => window.print()} aria-label="Print Resume">
                <FaPrint /> Print
            </button>
            <main className="main-content">
                <Resume />
            </main>
        </div>
    );
};

export default App;