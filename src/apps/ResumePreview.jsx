import React from 'react';
import { Download } from 'lucide-react';

const ResumePreview = () => {
    const resumePath = "/resume (1).pdf";

    return (
        <div className="h-full flex flex-col bg-[#525659] text-white">
            {/* Toolbar */}
            <div className="h-10 bg-[#323639] flex items-center justify-between px-4 shadow-md z-10">
                <span className="text-sm font-medium">resume.pdf</span>
                <a
                    href={resumePath}
                    download="Jatin_Jain_Resume.pdf"
                    className="flex items-center gap-2 bg-[#323639] hover:bg-white/10 px-3 py-1 rounded transition-colors text-sm"
                >
                    <Download size={14} />
                    Download
                </a>
            </div>

            {/* PDF View */}
            <div className="flex-1 overflow-hidden relative">
                <iframe
                    src={`${resumePath}#toolbar=0&navpanes=0`}
                    className="w-full h-full border-0"
                    title="Resume Preview"
                />
            </div>
        </div>
    );
};

export default ResumePreview;
