import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="h-full bg-gray-50 dark:bg-[#1e1e1e] text-black dark:text-white flex flex-col md:flex-row overflow-hidden font-sans">
            {/* Contact Info Sidebar */}
            <div className="w-full md:w-1/3 bg-white dark:bg-[#2d2d2d] border-b md:border-b-0 md:border-r border-gray-200 dark:border-black/20 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-500/20 text-blue-500 rounded-lg">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Email me</h3>
                                <a href="mailto:jjain0740@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                                    jjain0740@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 dark:bg-green-500/20 text-green-500 rounded-lg">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Call me</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    +91 89595 26978
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-100 dark:bg-red-500/20 text-red-500 rounded-lg">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Location</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Ujjain, Madhya Pradesh, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-0 pt-8 border-t border-gray-100 dark:border-white/5">
                    <div className="flex gap-4 justify-center md:justify-start">
                        {/* Social Placeholders if needed, or keeping it clean */}
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 p-6 md:p-10 overflow-auto bg-white/50 dark:bg-[#1e1e1e]/50">
                <div className="max-w-lg mx-auto h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <MessageSquare size={20} className="text-blue-500" />
                        Send a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</label>
                                <div className="relative">
                                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-black/20 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</label>
                                <div className="relative">
                                    <AtSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-black/20 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Message</label>
                            <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-black/20 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || submitted}
                            className={`w-full py-3 rounded-lg font-medium text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 ${submitted
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'
                                } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {submitted ? (
                                <>Message Sent!</>
                            ) : (
                                <>
                                    <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
