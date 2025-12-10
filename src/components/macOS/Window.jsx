import React from 'react';

import { X, Minus, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';

const Window = ({
    id,
    title,
    children,
    isOpen,
    isMaximized,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
    zIndex
}) => {
    const nodeRef = React.useRef(null);
    const dragControls = useDragControls();

    return (
        <AnimatePresence>
            {isOpen && (

                <motion.div
                    ref={nodeRef}
                    drag={!isMaximized}
                    dragControls={dragControls}
                    dragListener={false}
                    dragMomentum={false}
                    dragElastic={0}

                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        x: isMaximized ? 0 : undefined,
                        y: isMaximized ? 0 : undefined,
                        width: isMaximized ? '100%' : 800,
                        height: isMaximized ? '100%' : 500,
                        top: isMaximized ? 0 : undefined,
                        left: isMaximized ? 0 : undefined,
                        borderRadius: isMaximized ? 0 : '0.75rem'
                    }}
                    exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
                    className={`absolute ${!isMaximized ? 'top-20 left-20' : ''} bg-[#f5f5f5] dark:bg-[#1e1e1e] flex flex-col overflow-hidden border border-black/10 transition-shadow duration-200 ${zIndex >= 10 ? 'shadow-2xl shadow-black/50 ring-1 ring-black/5' : 'shadow-xl shadow-black/20'
                        }`}
                    style={{ zIndex }}
                    onPointerDown={onFocus}
                >
                    {/* Window Header */}
                    <div
                        className="window-header h-10 bg-[#e8e8e8] dark:bg-[#2d2d2d] border-b border-gray-300 dark:border-black/50 flex items-center justify-between px-4 cursor-default w-full shrink-0"
                        onDoubleClick={onMaximize}
                        onPointerDown={(e) => {
                            onFocus();
                            dragControls.start(e);
                        }}
                    >
                        <div className="flex gap-2 group">
                            <button
                                onClick={(e) => { e.stopPropagation(); onClose(); }}
                                className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:bg-[#ff5f57]/80 flex items-center justify-center text-black/50 overflow-hidden"
                            >
                                <X size={8} className="opacity-0 group-hover:opacity-100" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                                className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d8a123] hover:bg-[#febc2e]/80 flex items-center justify-center text-black/50 overflow-hidden"
                            >
                                <Minus size={8} className="opacity-0 group-hover:opacity-100" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); onMaximize(); }}
                                className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:bg-[#28c840]/80 flex items-center justify-center text-black/50 overflow-hidden"
                            >
                                <Maximize2 size={8} className="opacity-0 group-hover:opacity-100" />
                            </button>
                        </div>

                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex-1 text-center pointer-events-none opacity-80">
                            {title}
                        </span>

                        {/* Spacer to balance traffic lights */}
                        <div className="w-14"></div>
                    </div>

                    {/* Window Content */}
                    <div className="flex-1 overflow-auto bg-white/50 backdrop-blur-3xl dark:bg-[#1e1e1e]/90">
                        {children}
                    </div>
                </motion.div>

            )}
        </AnimatePresence>
    );
};

export default Window;
