import React, { useState } from 'react';
import { Scenario, Choice } from '../shared/scenarioTypes';

interface ScenarioPlayerProps {
  scenario: Scenario;
  onComplete: () => void;
  onExit: () => void;
}

export const ScenarioPlayer: React.FC<ScenarioPlayerProps> = ({ 
  scenario, 
  onComplete, 
  onExit 
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentStep = scenario.steps[currentStepIndex];

  const handleChoice = (choice: Choice) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
  };

  const nextStep = () => {
    setShowFeedback(false);
    setSelectedChoice(null);
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onComplete();
    }
  };

  const tryAgain = () => {
    setShowFeedback(false);
    setSelectedChoice(null);
  };

  if (!currentStep) return null;

  return (
    <div className="player-container">
      <div className="card context-box">
        <h3>Scenario Context</h3>
        <p className="large-text">{scenario.context.text}</p>
      </div>

      <div className="card">
        <h2 className="prompt-text">Step {currentStepIndex + 1}: {currentStep.prompt.text}</h2>
        
        {!showFeedback ? (
          <div className="choices-list">
            {currentStep.choices.map((choice) => (
              <button 
                key={choice.id} 
                className="btn btn-large"
                onClick={() => handleChoice(choice)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        ) : (
          <div className={`feedback-panel ${selectedChoice?.result === 'positive' ? 'feedback-positive' : 'feedback-negative'}`}>
            <div className="feedback-header">
              <div className="feedback-icon" aria-hidden="true">
                {selectedChoice?.result === 'positive' ? '✓' : '✕'}
              </div>
              <h3 style={{ margin: 0 }}>
                {selectedChoice?.result === 'positive' ? 'Great Choice!' : 'Let\'s think about that'}
              </h3>
            </div>
            
            <p className="large-text">{selectedChoice?.feedback || selectedChoice?.explanation}</p>
            
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {}
              {selectedChoice?.result === 'positive' && (
                 <button className="btn btn-primary" onClick={nextStep} autoFocus>
                   {currentStepIndex < scenario.steps.length - 1 ? 'Next Step' : 'Finish Scenario'}
                 </button>
              )}
              
              {}
              {selectedChoice?.result === 'neutral' && (
                <>
                  <button className="btn btn-primary" onClick={nextStep} autoFocus>
                    Continue
                  </button>
                  <button className="btn btn-secondary" onClick={tryAgain}>
                    Try Better Answer
                  </button>
                </>
              )}

              {}
              {selectedChoice?.result === 'negative' && (
                <button className="btn btn-secondary" onClick={tryAgain} autoFocus>
                  Try Again
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button className="btn btn-secondary" onClick={onExit} style={{ border: 'none', color: 'var(--color-text-muted)', textDecoration: 'underline' }}>
          Exit Scenario
        </button>
      </div>
    </div>
  );
};