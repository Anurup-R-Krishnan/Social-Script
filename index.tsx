import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { ScenarioCard } from './components/ScenarioCard';
import { ScenarioPlayer } from './components/ScenarioPlayer';
import { CompletedView } from './components/CompletedView';
import { ParentMode } from './components/ParentMode';
import { Settings } from './components/Settings';
import { ReflectionForm } from './components/ReflectionForm';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { Scenario } from './shared/scenarioTypes';
import { SCENARIOS } from './backend/scenarios';



type View = 'home' | 'player' | 'parent' | 'settings' | 'reflection' | 'analytics';



const App = () => {
  const [view, setView] = useState<View>('home');
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [isScenarioComplete, setIsScenarioComplete] = useState(false);
  const [scenarios] = useState<Scenario[]>(SCENARIOS);
  const isLoadingScenarios = false;

  
  const [completedScenarios, setCompletedScenarios] = useLocalStorage<string[]>('completed', []);

  
  const [highContrast, setHighContrast] = useLocalStorage('pref_hc', false);
  const [largeText, setLargeText] = useLocalStorage('pref_lt', false);
  const [reduceMotion, setReduceMotion] = useLocalStorage('pref_rm', false);

  
  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
    document.body.classList.toggle('large-text', largeText);
    document.body.classList.toggle('reduce-motion', reduceMotion);
  }, [highContrast, largeText, reduceMotion]);

  
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
    const currentIndex = scenarios.findIndex(s => s.id === activeScenarioId);
    if (currentIndex >= 0 && scenarios.length > 0) {
      
      const nextIndex = (currentIndex + 1) % scenarios.length;
      startScenario(scenarios[nextIndex].id);
    } else {
      goHome();
    }
  };

  const goHome = () => {
    setView('home');
    setActiveScenarioId(null);
    setIsScenarioComplete(false);
  };

  const activeScenario = scenarios.find(s => s.id === activeScenarioId);

  return (
    <>
      <Header 
        goHome={goHome} 
        goParent={() => setView('parent')} 
        goSettings={() => setView('settings')} 
        goReflection={() => setView('reflection')}
        goAnalytics={() => setView('analytics')}
      />
      
      <main>
        {view === 'home' && (
          <div>
            <h1 style={{ marginBottom: '1.5rem' }}>Choose a Practice Scenario</h1>
            {isLoadingScenarios ? (
              <p>Loading scenarios…</p>
            ) : (
              <div className="scenario-grid">
                {scenarios.map(scenario => (
                  <ScenarioCard 
                    key={scenario.id} 
                    scenario={scenario} 
                    onClick={() => startScenario(scenario.id)}
                    isCompleted={completedScenarios.includes(scenario.id)}
                  />
                ))}
              </div>
            )}
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

        {view === 'reflection' && (
          <ReflectionForm scenarios={scenarios} />
        )}

        {view === 'analytics' && (
          <AnalyticsDashboard scenarios={scenarios} completedScenarios={completedScenarios} />
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