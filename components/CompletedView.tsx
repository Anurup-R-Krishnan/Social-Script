import React from 'react';

interface CompletedViewProps {
  onHome: () => void;
  onNext: () => void;
}

export const CompletedView: React.FC<CompletedViewProps> = ({ onHome, onNext }) => (
  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
    <h1>Scenario Complete!</h1>
    <p className="large-text" style={{ maxWidth: '500px', margin: '0 auto 2rem auto' }}>
      You did a great job practicing this social situation. Practicing helps us feel more ready for real life.
    </p>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <button onClick={onNext} className="btn btn-primary">Next Scenario</button>
      <button onClick={onHome} className="btn btn-secondary">Back to Scenarios</button>
    </div>
  </div>
);