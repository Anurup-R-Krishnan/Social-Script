import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { SCENARIOS } from './scenarios';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { ScenarioCard } from './components/ScenarioCard';
import { ScenarioPlayer } from './components/ScenarioPlayer';
import { CompletedView } from './components/CompletedView';
import { ParentMode } from './components/ParentMode';
import { Settings } from './components/Settings';

// --- Types ---

type View = 'home' | 'player' | 'parent' | 'settings';

// --- Main App ---

const App = () => {
  // Navigation State
  const [view, setView] = useState<View>('home');
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [isScenarioComplete, setIsScenarioComplete] = useState(false);

  // Persistence State
  const [completedScenarios, setCompletedScenarios] = useLocalStorage<string[]>('completed', []);

  // Accessibility State
  const [highContrast, setHighContrast] = useLocalStorage('pref_hc', false);
  const [largeText, setLargeText] = useLocalStorage('pref_lt', false);
  const [reduceMotion, setReduceMotion] = useLocalStorage('pref_rm', false);

  // Apply Accessibility Classes
  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
    document.body.classList.toggle('large-text', largeText);
    document.body.classList.toggle('reduce-motion', reduceMotion);
  }, [highContrast, largeText, reduceMotion]);

  // Handlers
  const startScenario = (id: string) => {
    setActiveScenarioId(id);
    setIsScenarioComplete(false);
    setView('player');
  };

  const finishScenario = () => {
    if (activeScenarioId && !completedScenarios.includes(activeScenarioId)) {
      setCompletedScenarios([...completedScenarios, activeScenarioId]);
    }
    setIsScenarioComplete(true);
  };

  const startNextScenario = () => {
    const currentIndex = SCENARIOS.findIndex(s => s.id === activeScenarioId);
    if (currentIndex >= 0 && SCENARIOS.length > 0) {
      // Wrap around to the beginning if it's the last one
      const nextIndex = (currentIndex + 1) % SCENARIOS.length;
      startScenario(SCENARIOS[nextIndex].id);
    } else {
      goHome();
    }
  };

  const goHome = () => {
    setView('home');
    setActiveScenarioId(null);
    setIsScenarioComplete(false);
  };

  const activeScenario = SCENARIOS.find(s => s.id === activeScenarioId);

  return (
    <>
      <Header 
        goHome={goHome} 
        goParent={() => setView('parent')} 
        goSettings={() => setView('settings')} 
      />
      
      <main>
        {view === 'home' && (
          <div>
            <h1 style={{ marginBottom: '1.5rem' }}>Choose a Practice Scenario</h1>
            <div className="scenario-grid">
              {SCENARIOS.map(scenario => (
                <ScenarioCard 
                  key={scenario.id} 
                  scenario={scenario} 
                  onClick={() => startScenario(scenario.id)}
                  isCompleted={completedScenarios.includes(scenario.id)}
                />
              ))}
            </div>
          </div>
        )}

        {view === 'player' && activeScenario && !isScenarioComplete && (
          <ScenarioPlayer 
            scenario={activeScenario} 
            onComplete={finishScenario}
            onExit={goHome}
          />
        )}

        {view === 'player' && isScenarioComplete && (
          <CompletedView onHome={goHome} onNext={startNextScenario} />
        )}

        {view === 'parent' && (
          <ParentMode resetProgress={() => setCompletedScenarios([])} />
        )}

        {view === 'settings' && (
          <Settings 
            highContrast={highContrast} 
            setHighContrast={setHighContrast}
            largeText={largeText} 
            setLargeText={setLargeText}
            reduceMotion={reduceMotion} 
            setReduceMotion={setReduceMotion}
          />
        )}
      </main>
    </>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);