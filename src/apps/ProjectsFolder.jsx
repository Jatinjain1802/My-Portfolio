import React, { useState } from 'react';
import { Folder, Github, ExternalLink, ChevronLeft, LayoutGrid, FileText } from 'lucide-react';

const SidebarItem = ({ icon, label, active }) => (
    <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-default transition-colors ${active ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}>
        {icon}
        <span className="text-sm font-medium">{label}</span>
    </div>
);

const projects = [
    {
        id: 1,
        title: "Company Website & AI Chatbot",
        overview: "Company Website with Personalized AI Chatbot (RAG + Groq). A complete company website featuring a modern UI, fast navigation, and intelligent customer support.",
        features: [
            "Integrated a personalized AI Chatbot using RAG and Groq LPU for high-speed inference.",
            "Implemented vector-based document search for company-specific responses.",
            "Connected frontend chatbot UI with backend APIs for real-time interaction.",
            "Live: Geektheo details and integration."
        ],
        tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Groq API", "Nodemailer"],
        link: "https://geektheo.com"
    },
    {
        id: 2,
        title: "Shop Management System",
        overview: "Comprehensive dashboard for managing products, orders, and customers, designed to streamline daily shop operations.",
        features: [
            "Full CRUD operations for product and inventory management.",
            "Order tracking and customer management system.",
            "Real-time analytics and reporting dashboard."
        ],
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        link: "#",
        github: "#"
    }
];

const ProjectsFolder = ({ openWindow }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeSection, setActiveSection] = useState('all-projects');

    const handleSidebarClick = (section) => {
        setActiveSection(section);
        setSelectedProject(null);
    };

    return (
        <div className="h-full bg-white dark:bg-[#1e1e1e] text-black dark:text-white flex font-sans">
            {/* Sidebar */}
            <div className="w-56 bg-[#f5f5f5]/95 dark:bg-[#2d2d2d]/95 backdrop-blur-xl border-r border-gray-200 dark:border-black/20 p-4 pt-6 hidden md:flex flex-col gap-4 shadow-inner">

                <div>
                    <div className="text-[11px] font-bold text-gray-400 mb-2 px-2 uppercase tracking-wider">Favorites</div>
                    <div onClick={() => handleSidebarClick('all-projects')}>
                        <SidebarItem icon={<Folder size={14} className="text-blue-500" />} label="All Projects" active={activeSection === 'all-projects' && !selectedProject} />
                    </div>
                    <div onClick={() => handleSidebarClick('desktop')}>
                        <SidebarItem icon={<Folder size={14} className="text-blue-500" />} label="Desktop" active={activeSection === 'desktop'} />
                    </div>
                    <div onClick={() => handleSidebarClick('documents')}>
                        <SidebarItem icon={<Folder size={14} className="text-blue-500" />} label="Documents" active={activeSection === 'documents'} />
                    </div>
                </div>

                <div>
                    <div className="text-[11px] font-bold text-gray-400 mb-2 px-2 uppercase tracking-wider">Tags</div>
                    <SidebarItem icon={<div className="w-3 h-3 rounded-full bg-red-400" />} label="Important" />
                    <SidebarItem icon={<div className="w-3 h-3 rounded-full bg-orange-400" />} label="Work" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto bg-white dark:bg-[#1e1e1e]">
                {/* Header / Navigate Back */}
                {selectedProject && (
                    <div className="h-12 border-b border-gray-200 dark:border-white/10 flex items-center px-4 gap-2 bg-[#f9f9f9]/80 dark:bg-[#252525]/80 backdrop-blur-md sticky top-0 z-10">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <ChevronLeft size={16} />
                            Back
                        </button>
                        <div className="h-4 w-px bg-gray-300 dark:bg-white/20 mx-2"></div>
                        <span className="text-sm font-semibold truncate">{selectedProject.title}</span>
                    </div>
                )}

                <div className="p-8">
                    {/* Documents View */}
                    {activeSection === 'documents' && !selectedProject && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="text-2xl font-bold mb-6">Documents</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                <div
                                    onClick={() => openWindow && openWindow('resume-preview')}
                                    className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
                                >
                                    <div className="w-16 h-20 transition-transform group-hover:scale-105 duration-200 relative bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                                        <span className="font-bold text-[8px] uppercase text-red-500 absolute top-2 right-2">PDF</span>
                                        <div className="w-full text-[6px] text-gray-400 px-2 text-center mt-4">
                                            Jatin Jain Resume
                                            <br />
                                            <span className="text-[4px]">2025</span>
                                        </div>
                                        <FileText size={24} className="absolute bottom-2 left-2 text-gray-300" />
                                    </div>
                                    <span className="text-sm font-medium text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        Resume.pdf
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Projects Grid View */}
                    {activeSection === 'all-projects' && !selectedProject && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="text-2xl font-bold mb-6">All Projects</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        onClick={() => setSelectedProject(project)}
                                        className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
                                    >
                                        <div className="w-20 h-20 transition-transform group-hover:scale-105 duration-200">
                                            <img src="/images/folder.png" alt="folder" className="w-full h-full object-contain drop-shadow-sm" />
                                        </div>
                                        <span className="text-sm font-medium text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 max-w-[120px]">
                                            {project.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Detailed Project View */}
                    {selectedProject && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-4xl mx-auto pt-4">
                            <div className="flex flex-col items-center text-center mb-10 gap-6">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-500 shadow-sm mb-2">
                                        <LayoutGrid size={40} />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-bold leading-tight mb-2">{selectedProject.title}</h1>
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">Project ID: #{selectedProject.id}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2 max-w-2xl px-4">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="text-sm font-medium px-4 py-1.5 bg-gray-100 dark:bg-white/10 rounded-full text-gray-700 dark:text-gray-200 border border-transparent dark:border-white/5 shadow-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-4 mt-2">
                                    {selectedProject.github && selectedProject.github !== "#" && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-xl font-medium transition-all hover:scale-105 border border-transparent dark:border-white/5">
                                            <Github size={20} /> Code
                                        </a>
                                    )}

                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                </div>
                            </div>

                            <div className="prose dark:prose-invert max-w-none">
                                <div className="p-6 bg-gray-50 dark:bg-[#252525] rounded-2xl border border-gray-100 dark:border-black/50 shadow-sm">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">About this project</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                        {selectedProject.overview}
                                    </p>

                                    {selectedProject.features && (
                                        <>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Features</h4>
                                            <ul className="grid gap-3">
                                                {selectedProject.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                        <span className="leading-relaxed">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>

                                <div className="mt-8 p-6 bg-white dark:bg-[#252525] rounded-2xl border border-gray-100 dark:border-black/50 shadow-sm">
                                    <h4 className="font-semibold mb-6 flex items-center gap-2 text-lg">
                                        <Folder size={20} className="text-blue-500" />
                                        Project Details
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                                        <div>
                                            <div className="text-gray-500 dark:text-gray-400 mb-1">Status</div>
                                            <div className="font-medium text-green-500 flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                Completed
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-gray-500 dark:text-gray-400 mb-1">Platform</div>
                                            <div className="font-medium">Web Application</div>
                                        </div>

                                        <div>
                                            <div className="text-gray-500 dark:text-gray-400 mb-1">Role</div>
                                            <div className="font-medium">Full Stack Dev</div>
                                        </div>

                                        <div>
                                            <div className="text-gray-500 dark:text-gray-400 mb-1">License</div>
                                            <div className="font-medium">MIT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Desktop View */}
                    {activeSection === 'desktop' && !selectedProject && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="text-2xl font-bold mb-6">Desktop</h2>

                            {/* Documents Section within Desktop */}
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold mb-4">Documents</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    <div
                                        onClick={() => openWindow && openWindow('resume-preview')}
                                        className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
                                    >
                                        <div className="w-16 h-20 transition-transform group-hover:scale-105 duration-200 relative bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                                            <span className="font-bold text-[8px] uppercase text-red-500 absolute top-2 right-2">PDF</span>
                                            <div className="w-full text-[6px] text-gray-400 px-2 text-center mt-4">
                                                Jatin Jain Resume
                                                <br />
                                                <span className="text-[4px]">2025</span>
                                            </div>
                                            <FileText size={24} className="absolute bottom-2 left-2 text-gray-300" />
                                        </div>
                                        <span className="text-sm font-medium text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                            Resume.pdf
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Projects Section within Desktop */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">All Projects</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    {projects.map((project) => (
                                        <div
                                            key={project.id}
                                            onClick={() => setSelectedProject(project)}
                                            className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
                                        >
                                            <div className="w-20 h-20 transition-transform group-hover:scale-105 duration-200">
                                                <img src="/images/folder.png" alt="folder" className="w-full h-full object-contain drop-shadow-sm" />
                                            </div>
                                            <span className="text-sm font-medium text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 max-w-[120px]">
                                                {project.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectsFolder;
