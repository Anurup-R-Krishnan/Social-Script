import React from 'react';

interface HeaderProps {
  goHome: () => void;
  goParent: () => void;
  goSettings: () => void;
  goReflection: () => void;
  goAnalytics: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  goHome, 
  goParent, 
  goSettings,
  goReflection,
  goAnalytics
}) => (
  <header>
    <button onClick={goHome} className="app-title" aria-label="Go to Home">
      Social Scripts
    </button>
    <nav>
      <button onClick={goHome} className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>Home</button>
      <button onClick={goSettings} className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>Settings</button>
      <button onClick={goReflection} className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>Reflection</button>
      <button onClick={goAnalytics} className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>Analytics</button>
      <button onClick={goParent} className="btn btn-secondary">Parent Mode</button>
    </nav>
  </header>
);