import React from 'react';
import Desktop from './components/macOS/Desktop';
import TopBar from './components/macOS/TopBar';
import Dock from './components/macOS/Dock';
import Window from './components/macOS/Window';
import useWindowManager from './hooks/useWindowManager.jsx';

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
                {win.content}
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
