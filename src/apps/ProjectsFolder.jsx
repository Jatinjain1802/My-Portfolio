import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Company Website & AI Chatbot",
        description: "Company website with personalized AI chatbot using RAG & Groq. Features vector-based document search and real-time frontend-backend interaction.",
        tech: ["React", "Node.js", "MySQL", "Groq API", "RAG"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Shop Management System",
        description: "Dashboard for managing products, orders, and customers. Implemented CRUD operations and streamlined daily shop operations.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        link: "#",
        github: "#"
    }
];

const ProjectsFolder = () => {
    return (
        <div className="h-full bg-white dark:bg-[#1e1e1e] text-black dark:text-white flex font-sans">
            {/* Sidebar */}
            <div className="w-48 bg-gray-100/80 dark:bg-[#2d2d2d]/80 backdrop-blur-xl border-r border-gray-200 dark:border-black/20 p-4 pt-6 hidden md:flex flex-col gap-1">
                <div className="text-xs font-semibold text-gray-500 mb-2 px-2">Favorites</div>
                <div className="flex items-center gap-2 px-2 py-1 bg-black/10 rounded-md cursor-pointer">
                    <Folder size={14} className="text-blue-500 fill-blue-500" />
                    <span className="text-sm">All Projects</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                    <span className="text-sm">Web Apps</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                    <span className="text-sm">Mobile</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto p-6">
                <h2 className="text-2xl font-bold mb-6">All Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white dark:bg-[#2d2d2d] rounded-xl p-4 shadow-sm border border-gray-200 dark:border-black/20 hover:shadow-md transition-all cursor-default">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 text-blue-500">
                                <Folder size={24} className="fill-current" />
                            </div>

                            <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-black/30 rounded-full text-gray-600 dark:text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-2 mt-auto">
                                <a href={project.github} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 rounded-md text-xs font-medium transition-colors">
                                    <Github size={12} /> Code
                                </a>
                                <a href={project.link} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs font-medium transition-colors">
                                    <ExternalLink size={12} /> Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsFolder;
