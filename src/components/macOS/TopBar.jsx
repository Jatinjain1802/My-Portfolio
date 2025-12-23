import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Moon, Sun } from 'lucide-react';

const TopBar = ({ activeApp, isDark, toggleTheme }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="w-full h-8 bg-white/30 dark:bg-black/20 backdrop-blur-md text-black dark:text-white flex items-center justify-between px-4 text-xs select-none shadow-sm z-50 transition-colors duration-300">
            {/* Left Side: Apple Logo & Menus */}
            <div className="flex items-center gap-4">
                {/* <Apple size={16} className="fill-current" /> */}
                <span className="font-bold">Jatin's Portfolio</span>
            </div>

            {/* Right Side: Controls & Clock */}
            <div className="flex items-center gap-4">
                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="hover:bg-black/10 dark:hover:bg-white/20 p-1 rounded-md transition-colors">
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                <Wifi size={16} />
                <Battery size={16} />
                <div className="flex gap-2">
                    <span>{formatDate(time)}</span>
                    <span>{formatTime(time)}</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
