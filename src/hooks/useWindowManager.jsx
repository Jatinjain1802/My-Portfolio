import React, { useState } from 'react';
import Finder from '../apps/Finder';
import Safari from '../apps/Safari';
import Terminal from '../apps/Terminal';
import ProjectsFolder from '../apps/ProjectsFolder';

const useWindowManager = () => {
    const [windows, setWindows] = useState([
        { id: 'finder', title: 'Finder', content: <Finder />, isOpen: false, isMinimized: false, zIndex: 1 },
        { id: 'my-projects', title: 'My Projects', content: <ProjectsFolder />, isOpen: false, isMinimized: false, zIndex: 2 },
        { id: 'projects', title: 'Safari Browser', content: <Safari />, isOpen: false, isMinimized: false, zIndex: 3 },
        { id: 'about', title: 'About Me', content: <Finder />, isOpen: false, isMinimized: false, zIndex: 4 },
        { id: 'contact', title: 'Contact', content: <div className="p-4 bg-white h-full text-black">Contact info here...</div>, isOpen: false, isMinimized: false, zIndex: 5 },
        { id: 'terminal', title: 'Terminal', content: <Terminal />, isOpen: false, isMinimized: false, zIndex: 6 },
    ]);

    const [activeWindowId, setActiveWindowId] = useState(null);

    const openWindow = (id) => {
        setWindows(prev => prev.map(win => {
            if (win.id === id) {
                return { ...win, isOpen: true, isMinimized: false, zIndex: getNextZIndex() };
            }
            return win;
        }));
        setActiveWindowId(id);
    };

    const closeWindow = (id) => {
        setWindows(prev => prev.map(win => {
            if (win.id === id) {
                return { ...win, isOpen: false };
            }
            return win;
        }));
        if (activeWindowId === id) setActiveWindowId(null);
    };

    const maximizeWindow = (id) => {
        setWindows(prev => prev.map(win => {
            if (win.id === id) {
                return { ...win, isMaximized: !win.isMaximized, isOpen: true, isMinimized: false, zIndex: getNextZIndex() };
            }
            return win;
        }));
        setActiveWindowId(id);
    };

    const minimizeWindow = (id) => {
        setWindows(prev => prev.map(win => {
            if (win.id === id) {
                return { ...win, isMinimized: true };
            }
            return win;
        }));
        if (activeWindowId === id) setActiveWindowId(null);
    };

    const focusWindow = (id) => {
        setWindows(prev => prev.map(win => {
            if (win.id === id) {
                return { ...win, zIndex: getNextZIndex() };
            }
            return win;
        }));
        setActiveWindowId(id);
    };

    const getNextZIndex = () => {
        const maxZ = Math.max(...windows.map(w => w.zIndex), 0);
        return maxZ + 1;
    };

    return { windows, openWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow, activeWindowId };
};

export default useWindowManager;
