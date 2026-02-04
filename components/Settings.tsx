import React from 'react';

interface SettingsProps {
  highContrast: boolean;
  setHighContrast: (v: boolean) => void;
  largeText: boolean;
  setLargeText: (v: boolean) => void;
  reduceMotion: boolean;
  setReduceMotion: (v: boolean) => void;
}

export const Settings: React.FC<SettingsProps> = ({ 
  highContrast, 
  setHighContrast, 
  largeText, 
  setLargeText, 
  reduceMotion, 
  setReduceMotion 
}) => (
  <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h2>Accessibility Settings</h2>
    
    <div className="toggle-row">
      <label htmlFor="hc-toggle" style={{ fontWeight: 600 }}>High Contrast Mode</label>
      <button 
        id="hc-toggle"
        className={`btn ${highContrast ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setHighContrast(!highContrast)}
      >
        {highContrast ? 'ON' : 'OFF'}
      </button>
    </div>

    <div className="toggle-row">
      <label htmlFor="lt-toggle" style={{ fontWeight: 600 }}>Large Text</label>
      <button 
        id="lt-toggle"
        className={`btn ${largeText ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setLargeText(!largeText)}
      >
        {largeText ? 'ON' : 'OFF'}
      </button>
    </div>

    <div className="toggle-row">
      <label htmlFor="rm-toggle" style={{ fontWeight: 600 }}>Reduce Motion</label>
      <button 
        id="rm-toggle"
        className={`btn ${reduceMotion ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setReduceMotion(!reduceMotion)}
      >
        {reduceMotion ? 'ON' : 'OFF'}
      </button>
    </div>
  </div>
);