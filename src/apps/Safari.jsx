import React from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Lock } from 'lucide-react';

const Safari = () => {
    return (
        <div className="flex flex-col h-full bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200">
            {/* Toolbar */}
            <div className="h-12 bg-gray-100 dark:bg-[#2d2d2d] border-b border-gray-300 dark:border-white/10 flex items-center px-4 gap-4">
                <div className="flex gap-4 text-gray-400">
                    <ArrowLeft size={18} />
                    <ArrowRight size={18} />
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-2xl mx-auto h-8 bg-gray-200 dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Lock size={12} />
                    <span>secure | portfolio.com/projects</span>
                    <RotateCcw size={12} className="ml-2 hover:text-black cursor-pointer" />
                </div>

                <div className="w-10"></div>
            </div>

            {/* Content (Projects Grid) */}
            <div className="flex-1 overflow-auto p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Project Card 1 */}
                    <div className="group relative aspect-video bg-gray-200 dark:bg-[#333] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                            Project 1
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                            <h3 className="font-bold text-lg">E-Commerce App</h3>
                            <p className="text-xs text-gray-300 mt-2">React, Node, MongoDB</p>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group relative aspect-video bg-gray-200 dark:bg-[#333] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                            Project 2
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                            <h3 className="font-bold text-lg">Chat Application</h3>
                            <p className="text-xs text-gray-300 mt-2">Socket.io, Express, React</p>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="group relative aspect-video bg-gray-200 dark:bg-[#333] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                            Project 3
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                            <h3 className="font-bold text-lg">Portfolio V1</h3>
                            <p className="text-xs text-gray-300 mt-2">HTML, CSS, JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safari;
