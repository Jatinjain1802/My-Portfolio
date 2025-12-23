import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const DesktopIcon = ({ title, icon, onOpen, defaultPosition }) => {
    const ref = useRef(null);

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={defaultPosition}
            whileDrag={{ scale: 1.1, zIndex: 50 }}
            className="absolute flex flex-col items-center gap-1 w-24 p-2 rounded hover:bg-white/10 dark:hover:bg-white/5 active:bg-white/20 dark:active:bg-white/10 transition-colors cursor-default group"
            onDoubleClick={(e) => {
                e.stopPropagation();
                onOpen();
            }}
        >
            <div className="text-blue-500 filter drop-shadow-lg">
                {icon}
            </div>
            <span className="text-white text-xs font-medium text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-1 rounded bg-black/0 group-hover:bg-black/20 group-active:bg-[#0061FD] group-active:text-white transition-colors select-none">
                {title}
            </span>
        </motion.div>
    );
};

export default DesktopIcon;
