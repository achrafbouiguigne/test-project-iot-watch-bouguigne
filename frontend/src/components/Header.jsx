import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(() => {
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme") === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <header className="w-full bg-white shadow">
@@ -44,20 +27,10 @@ function Header() {
                    <li className="font-medium text-xl cursor-pointer"><Link to="/temperature">Temperature</Link></li>
                    <li className="font-medium text-xl cursor-pointer"><Link to="/humidity">Humidity</Link></li>
                </ul>
                {/* Buttons and light mode/dark mode toggle */}
                {/* Buttons */}
                <div className="hidden md:flex flex-row space-x-4 flex-1 justify-end items-center">
                    <button className="bg-green-500 rounded-b-xl text-white px-4 py-2"><span>Say Hello!</span></button>
                    <button className="bg-green-400 rounded-b-xl text-white px-4 py-2"><span>Contact Us!</span></button>
                    <button
                        className="ml-2 p-2 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-50 transition"
                        onClick={() => setDark((d) => !d)}
                        aria-label="Toggle dark mode"
                    >
                        {dark
                            ? <FiSun size={22} />
                            : <FiMoon size={22} />
                        }
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
@@ -79,4 +52,4 @@ function Header() {
    );
}

export default Header;
export default Header;
