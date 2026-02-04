import React, { useState } from 'react';

interface ParentModeProps {
  resetProgress: () => void;
}

export const ParentMode: React.FC<ParentModeProps> = ({ resetProgress }) => {
  const [locked, setLocked] = useState(true);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234') { // Simple MVP PIN
      setLocked(false);
      setError('');
    } else {
      setError('Incorrect PIN');
    }
  };

  if (locked) {
    return (
      <div className="card" style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
        <h2>Parent Gate</h2>
        <p>Please enter the PIN to access settings (Default: 1234)</p>
        <form onSubmit={handleUnlock}>
          <input 
            type="password" 
            className="input-field" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)} 
            placeholder="Enter PIN"
            inputMode="numeric"
          />
          {error && <div style={{ color: 'var(--color-error-text)', marginBottom: '1rem' }}>{error}</div>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Unlock</button>
        </form>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Parent Dashboard</h2>
      <p>Manage app data and view progress here.</p>
      
      <div className="settings-group">
        <h3>Data Management</h3>
        <button 
          onClick={() => {
            if(confirm('Are you sure you want to clear all progress?')) {
              resetProgress();
              alert('Progress cleared.');
            }
          }} 
          className="btn btn-secondary"
          style={{ borderColor: 'var(--color-error-text)', color: 'var(--color-error-text)' }}
        >
          Reset Child Progress
        </button>
      </div>
      
      <div className="settings-group">
        <h3>About</h3>
        <p>This application works fully offline. No data is sent to any server.</p>
      </div>
    </div>
  );
};