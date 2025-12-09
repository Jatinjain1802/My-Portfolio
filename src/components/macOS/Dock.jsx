import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Dock = ({ onAppClick, activeApp }) => {
    const mouseX = useMotionValue(null);

    const apps = [
        { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
        { id: 'projects', name: 'Projects', icon: '/icons/safari.png' },
        // { id: 'about', name: 'About', icon: '/icons/user.svg' }, // Using Finder for About
        { id: 'contact', name: 'Contact', icon: '/icons/mail.svg' }, // Need to check if mail.svg exists or use fallback
        { id: 'terminal', name: 'Terminal', icon: '/icons/terminal.png' },
        { id: 'settings', name: 'Settings', icon: '/icons/settings.svg' }, // Check existence
    ];

    // Fallback for missing icons to lucide if needed, but we try to use images now.
    // Actually, let's stick to the ones we saw in list_dir:
    // finder.png, safari.png, terminal.png, contact.png (exists in images? or icons?)
    // list_dir of icons: github.svg, linkedin.svg, user.svg, wifi.svg, etc.
    // list_dir of images: finder.png, safari.png, terminal.png, contact.png

    const realApps = [
        { id: 'finder', name: 'Finder', icon: '/images/finder.png' },
        { id: 'projects', name: 'Safari', icon: '/images/safari.png' },
        { id: 'about', name: 'About', icon: '/icons/user.svg' },
        { id: 'contact', name: 'Contact', icon: '/images/contact.png' },
        { id: 'terminal', name: 'Terminal', icon: '/images/terminal.png' },
        { id: 'github', name: 'Github', icon: '/icons/github.svg', action: 'link', url: 'https://github.com' },
    ];

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-3 px-3 py-2 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 z-50 overflow-visible shadow-2xl">
            <div
                className="flex gap-3 items-end"
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(null)}
            >
                {realApps.map((app) => (
                    <DockItem
                        key={app.id}
                        mouseX={mouseX}
                        app={app}
                        onClick={() => onAppClick(app.id)}
                        isActive={activeApp === app.id}
                    />
                ))}
            </div>
        </div>
    );
};

const DockItem = ({ mouseX, app, onClick, isActive }) => {
    const ref = React.useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="flex flex-col items-center gap-1">
            <motion.div
                ref={ref}
                style={{ width }}
                onClick={onClick}
                whileTap={{ scale: 0.8 }}
                className="aspect-square rounded-2xl cursor-pointer relative"
            >
                <img src={app.icon} alt={app.name} className="w-full h-full object-contain drop-shadow-lg" />
            </motion.div>
            <div className={`w-1 h-1 rounded-full bg-black/50 dark:bg-white/50 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
    );
};

export default Dock;
