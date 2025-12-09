import React from 'react';

const Desktop = ({ children }) => {
    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center select-none"
            style={{
                backgroundImage: "url('/images/wallpaper.png')"
            }}
        >
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Desktop Content Area */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
                {children}
            </div>
        </div>
    );
};

export default Desktop;
