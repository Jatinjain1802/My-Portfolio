import React, { useState } from 'react';
import { User, MapPin, Briefcase, Calendar, Folder, Mail, Phone, Github, Linkedin, ExternalLink, FileText, Download, Eye, Code, Database, Server, Layout, Cpu, Terminal, Layers } from 'lucide-react';

const Finder = ({ openWindow }) => {
    const [activeSection, setActiveSection] = useState('about');

    const sidebarItems = [
        { id: 'about', label: 'About Me', icon: <User size={14} /> },
        { id: 'skills', label: 'Skills', icon: <Code size={14} /> },

        { id: 'experience', label: 'Experience', icon: <Briefcase size={14} /> },
        { id: 'education', label: 'Education', icon: <Calendar size={14} /> },
        { id: 'resume', label: 'Resume', icon: <FileText size={14} /> },
        { id: 'contact', label: 'Contact', icon: <Mail size={14} /> },
    ];

    return (
        <div className="h-full bg-white dark:bg-[#1e1e1e] text-black dark:text-white flex font-sans">
            {/* Sidebar */}
            <div className="w-48 bg-[#f5f5f5]/90 dark:bg-[#2d2d2d]/90 backdrop-blur-xl border-r border-gray-200 dark:border-black/20 p-4 pt-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase tracking-wider">UserInfo</div>
                {sidebarItems.map(item => (
                    <div
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-default text-sm transition-colors ${activeSection === item.id ? 'bg-blue-500 text-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-8">
                {activeSection === 'about' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mb-6 overflow-hidden">
                            {/* Placeholder for profile pic if available, else user icon */}
                            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                                <User size={48} />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Jatin Jain</h1>
                        <h2 className="text-xl text-gray-500 dark:text-gray-400 mb-4">Full Stack Developer</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
                            <span className="flex items-center gap-1"><MapPin size={14} /> Ujjain, Madhya Pradesh</span>
                            <span className="flex items-center gap-1 text-blue-500 cursor-pointer">
                                <Github size={14} /> GitHub
                            </span>
                            <span className="flex items-center gap-1 text-blue-500 cursor-pointer">
                                <Linkedin size={14} /> LinkedIn
                            </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                            Passionate Full Stack Developer with hands-on experience in building scalable web applications, AI-powered features, automation systems, and responsive UI using React.js and basic Node.js. Skilled in JavaScript, MySQL, REST APIs, UML diagrams, and system design fundamentals. Experienced in integrating RAG-based AI chatbots, WhatsApp automation workflows, and e-commerce systems.
                        </p>
                    </div>
                )}

                {activeSection === 'skills' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">Technical Skills</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Languages */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-4 text-blue-600">
                                    <Code size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Languages</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['JavaScript (ES6+)', 'TypeScript'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Frontend */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-4 text-purple-500">
                                    <Layout size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-4 text-green-500">
                                    <Server size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express.js', 'REST APIs'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Databases */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-4 text-orange-500">
                                    <Database size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Databases</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['MongoDB', 'MySQL'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* AI Integration */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10 md:col-span-2">
                                <div className="flex items-center gap-2 mb-4 text-pink-500">
                                    <Cpu size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">AI Integration</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['AI Bots', 'RAG', 'LLM APIs (OpenAI, Groq)', 'WhatsApp Cloud API', 'Prompt Engineering', 'n8n Basics'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Platforms */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-4 text-teal-500">
                                    <Terminal size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Tools & Platforms</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'GitHub', 'Postman', 'VS Code', 'Antigravity'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Other */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="flex items-center gap-2 mb-4 text-yellow-500">
                                    <Layers size={20} />
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Other</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['UML Diagrams', 'Flowcharts', 'ER Diagrams', 'Basic System Design'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'experience' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold">MERN Stack Developer Intern</h3>
                            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                <span>Geek Theory</span>
                                <span>Jul 2025 – Present</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-2">
                                <li>Built and maintained React-based frontend components for company and client projects; used RAG for building chatbot.</li>
                                <li>Secured access with JWT and bcrypt authentication/authorization.</li>
                                <li>Developed responsive React UI components to improve UX; added lazy loading for faster performance.</li>
                                <li>Optimized MongoDB queries to improve database performance.</li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeSection === 'education' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-xl font-bold">Bachelor of Technology (B.Tech) CSE</h3>
                        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>Mahakal Institute of Technology, Ujjain — RGPV Bhopal</span>
                            <span>Aug 2022 – Jul 2026</span>
                        </div>
                    </div>
                )}

                {activeSection === 'resume' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">Resume</h3>

                        <div className="p-6 bg-gray-50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-16 bg-white border border-gray-200 shadow-sm flex items-center justify-center relative">
                                    <span className="text-[6px] absolute top-2 right-2 text-red-500 font-bold">PDF</span>
                                    <FileText className="text-gray-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Jatin_Jain_Resume.pdf</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">PDF Document • 140 KB</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => openWindow && openWindow('resume-preview')}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <Eye size={16} /> Preview
                                </button>
                                <a
                                    href="/resume (1).pdf"
                                    download="Jatin_Jain_Resume.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/30"
                                >
                                    <Download size={16} /> Download
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'contact' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-500" />
                                <a href="mailto:jjain0740@gmail.com" className="hover:underline">jjain0740@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-green-500" />
                                <span>8959526978</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-red-500" />
                                <span>Ujjain, Madhya Pradesh</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Finder;
