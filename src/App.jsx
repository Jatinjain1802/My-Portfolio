import React from 'react';
import Desktop from './components/macOS/Desktop';
import TopBar from './components/macOS/TopBar';
import Dock from './components/macOS/Dock';
import Window from './components/macOS/Window';
import useWindowManager from './hooks/useWindowManager.jsx';
import DesktopIcon from './components/macOS/DesktopIcon';
import { FileText, Folder } from 'lucide-react';

function App() {
  const { windows, openWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow, activeWindowId } = useWindowManager();
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <Desktop>
        {/* Desktop Icons */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <DesktopIcon
            title="Resume.pdf"
            icon={<FileText size={48} className="text-white fill-white/20" />}
            defaultPosition={{ x: 20, y: 20 }}
            onOpen={() => openWindow('resume-preview')}
          />
          <DesktopIcon
            title="My Projects"
            icon={<Folder size={48} className="text-blue-400 fill-blue-400" />}
            defaultPosition={{ x: 20, y: 120 }} // Positioned below Resume
            onOpen={() => openWindow('my-projects')}
          />
        </div>

        <TopBar activeApp={activeWindowId} isDark={isDark} toggleTheme={toggleTheme} />

        {/* Window Area */}
        <div className="relative z-0 w-full h-full pointer-events-none">
          {windows.map(win => (
            <div key={win.id} className="pointer-events-auto">
              <Window
                id={win.id}
                title={win.title}
                isOpen={win.isOpen}
                isMaximized={win.isMaximized}
                zIndex={win.zIndex}
                onClose={() => closeWindow(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onMaximize={() => maximizeWindow(win.id)}
                onFocus={() => focusWindow(win.id)}
              >
                {/* Pass openWindow prop to all app components */}
                {React.isValidElement(win.content)
                  ? React.cloneElement(win.content, { openWindow })
                  : win.content}
              </Window>
            </div>
          ))}
        </div>

        <Dock onAppClick={openWindow} activeApp={activeWindowId} />
      </Desktop>
    </div>
  );
}

export default App;
