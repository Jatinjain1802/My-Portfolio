import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Desktop = ({ children }) => {
    const container = useRef();

    useGSAP(() => {
        // Initial Animation
        const tl = gsap.timeline();

        tl.from('.gsap-intro', {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5
        })
            .from('.gsap-name-char', {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.05,
                ease: 'power4.out'
            }, "-=0.5")
            .from('.gsap-subtitle', {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, "-=1");

    }, { scope: container });

    const handleMouseMove = (e) => {
        // Fluid hover effect like Dock for the name
        const chars = document.querySelectorAll('.gsap-name-char');
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        chars.forEach((char) => {
            const rect = char.getBoundingClientRect();
            const charCenterX = rect.left + rect.width / 2;
            const charCenterY = rect.top + rect.height / 2;

            const dist = Math.sqrt(Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2));
            const maxDist = 200; // Radius of influence

            if (dist < maxDist) {
                const scale = gsap.utils.mapRange(0, maxDist, 1.5, 1, dist);
                const y = gsap.utils.mapRange(0, maxDist, -20, 0, dist);

                gsap.to(char, {
                    scale: scale,
                    y: y,
                    duration: 0.2,
                    overwrite: 'auto'
                });
            } else {
                gsap.to(char, {
                    scale: 1,
                    y: 0,
                    duration: 0.2,
                    overwrite: 'auto'
                });
            }
        });
    };

    const handleMouseLeave = () => {
        gsap.to('.gsap-name-char', {
            scale: 1,
            y: 0,
            duration: 0.3
        });
    };

    return (
        <div ref={container}
            className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center select-none"
            style={{
                backgroundImage: "url('/images/wallpaper.png')"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* GSAP Text Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0 flex flex-col items-center gap-4 w-full">
                <p className="gsap-intro text-lg md:text-xl text-white/80 font-medium tracking-wide">
                    Hello, Welcome. Myself
                </p>

                <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mix-blend-overlay flex gap-4 pointer-events-auto">
                    {"Jatin Jain".split("").map((char, i) => (
                        <span key={i} className="gsap-name-char inline-block cursor-default origin-bottom">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                <p className="gsap-subtitle text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase">
                    Make things that matter
                </p>
            </div>

            {/* Desktop Content Area */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none">
                <div className="pointer-events-auto w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Desktop;
