import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import { FaSun, FaMoon, FaPrint, FaInfoCircle } from 'react-icons/fa';
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
            <div className="toolbar">
                <div className="print-hint" tabIndex={0} aria-label="Printing tips">
                    <FaInfoCircle />
                    <span className="print-hint-text">
                        <strong>Printing to PDF?</strong> In the print dialog set <strong>Margins: Minimum</strong> (or None), enable <strong>Background graphics</strong>, and choose <strong>A4</strong> for a clean, full-content export.
                    </span>
                </div>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
                <button className="print" title="Print the document in A4 with minimum margins"
                  onClick={() => window.print()} aria-label="Print Resume">
                    <FaPrint /> Print
                </button>
            </div>
            <main className="main-content">
                <Resume />
            </main>
        </div>
    );
};

export default App;