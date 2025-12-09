import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery } from 'lucide-react';

const TopBar = ({ activeApp }) => {
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

    const getAppName = (id) => {
        switch (id) {
            case 'finder': return 'Finder';
            case 'projects': return 'Safari';
            case 'terminal': return 'Terminal';
            case 'contact': return 'Mail';
            case 'about': return 'Finder';
            default: return 'Finder';
        }
    };

    return (
        <div className="w-full h-8 bg-black/20 backdrop-blur-md text-white flex items-center justify-between px-4 text-xs select-none shadow-sm z-50">
            {/* Left Side: Apple Logo & Menus */}
            <div className="flex items-center gap-4">
                <Apple size={16} className="fill-current" />
                <span className="font-bold">{activeApp ? getAppName(activeApp) : 'Finder'}</span>
                <div className="hidden sm:flex gap-4">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
            </div>

            {/* Right Side: Controls & Clock */}
            <div className="flex items-center gap-4">
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
