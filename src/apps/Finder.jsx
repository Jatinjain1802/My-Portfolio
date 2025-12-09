import React from 'react';
import { User, MapPin, Briefcase, Mail } from 'lucide-react';

const Finder = () => {
    return (
        <div className="flex h-full text-sm">
            {/* Sidebar */}
            <div className="w-48 bg-gray-100/50 dark:bg-[#1e1e1e]/50 backdrop-blur-md border-r border-gray-200 dark:border-white/10 p-4 flex flex-col gap-4">
                <div className="text-gray-500 text-xs font-semibold px-2">Favorites</div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded cursor-default">
                        <User size={14} /> <span>About Me</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-black/5 rounded cursor-default">
                        <Briefcase size={14} /> <span>Experience</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-black/5 rounded cursor-default">
                        <MapPin size={14} /> <span>Location</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 bg-white dark:bg-[#1e1e1e] overflow-auto">
                <div className="max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-2xl font-bold">Hello, I'm [Your Name]</h1>
                        <p className="text-gray-500">Full Stack Developer</p>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-white/10">Summary</h2>
                            <p className="leading-relaxed">
                                I build pixel-perfect, engaging, and accessible digital experiences.
                                Passionate about React, Design Systems, and creating software that matters.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-white/10">Contact</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Mail size={16} /> email@example.com
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin size={16} /> San Francisco, CA
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finder;
