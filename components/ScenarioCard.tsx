import React from 'react';
import { Scenario } from '../shared/scenarioTypes';

interface ScenarioCardProps {
  scenario: Scenario;
  onClick: () => void;
  isCompleted: boolean;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  scenario, 
  onClick, 
  isCompleted 
}) => (
  <div 
    className="card scenario-card" 
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={`Start scenario: ${scenario.title}`}
    onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') onClick(); }}
  >
    <div className="scenario-icon">{scenario.metadata.illustration || '📝'}</div>
    <div className="scenario-title">{scenario.title}</div>
    <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
      For ages: {scenario.ageRange}
    </div>
    <div>
      {scenario.metadata.tags.map(tag => (
        <span key={tag} className="tag">#{tag}</span>
      ))}
      {isCompleted && <span className="tag done">Done</span>}
    </div>
  </div>
);