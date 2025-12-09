import React from 'react';
import Draggable from 'react-draggable';
import { X, Minus, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Window = ({
    id,
    title,
    children,
    isOpen,
    onClose,
    onMinimize,
    onFocus,
    zIndex
}) => {
    const nodeRef = React.useRef(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <Draggable
                    handle=".window-header"
                    nodeRef={nodeRef}
                    onStart={onFocus}
                    bounds="parent"
                >
                    <motion.div
                        ref={nodeRef}
                        initial={{ scale: 0.8, opacity: 0, y: 100 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 500, transition: { duration: 0.3 } }}
                        className="absolute top-20 left-20 w-[800px] h-[500px] rounded-xl shadow-2xl overflow-hidden border border-black/10 bg-[#f5f5f5] dark:bg-[#1e1e1e] flex flex-col"
                        style={{ zIndex }}
                        onClick={onFocus}
                    >
                        {/* Window Header */}
                        <div className="window-header h-10 bg-[#e8e8e8] dark:bg-[#2d2d2d] border-b border-gray-300 dark:border-black/50 flex items-center justify-between px-4 cursor-default w-full">
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
                </Draggable>
            )}
        </AnimatePresence>
    );
};

export default Window;
