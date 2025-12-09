import React, { useState } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'Welcome to Terminal v1.0.0' },
        { type: 'output', text: 'Type "help" to see available commands.' },
    ]);
    const [input, setInput] = useState('');

    const commands = {
        help: 'Available commands: about, skills, clear, date',
        about: 'I am a Full Stack Developer passionate about building tools.',
        skills: 'React, Node.js, Python, TypeScript, TailwindCSS',
        date: new Date().toString(),
        clear: 'CLEAR',
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const output = commands[cmd] || `Command not found: ${cmd}`;

            if (cmd === 'clear') {
                setHistory([]);
            } else {
                setHistory(prev => [
                    ...prev,
                    { type: 'input', text: `> ${input}` },
                    { type: 'output', text: output }
                ]);
            }
            setInput('');
        }
    };

    return (
        <div className="h-full bg-[#1e1e1e] text-green-400 font-mono p-4 text-sm overflow-auto">
            {history.map((line, i) => (
                <div key={i} className={line.type === 'input' ? 'text-white mt-1' : 'mb-1 opacity-90'}>
                    {line.text}
                </div>
            ))}
            <div className="flex gap-2 mt-2">
                <span className="text-green-500">➜</span>
                <span className="text-cyan-500">~</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent outline-none flex-1 text-white"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Terminal;
