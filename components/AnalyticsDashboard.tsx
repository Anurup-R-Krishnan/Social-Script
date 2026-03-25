import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Scenario } from '../shared/scenarioTypes';

interface SessionEntry {
  scenarioId: string;
  scenarioTitle: string;
  completedAt: string;
}

interface AnalyticsDashboardProps {
  scenarios: Scenario[];
  completedScenarios: string[];
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  scenarios,
  completedScenarios,
}) => {
  const [sessionLog, setSessionLog] = useLocalStorage<SessionEntry[]>('session_log', []);
  const [copied, setCopied] = useState(false);

  // Sync newly completed scenarios into the session log
  useEffect(() => {
    const loggedIds = new Set(sessionLog.map((e) => e.scenarioId));
    const newEntries: SessionEntry[] = [];

    for (const id of completedScenarios) {
      if (!loggedIds.has(id)) {
        const scenario = scenarios.find((s) => s.id === id);
        if (scenario) {
          newEntries.push({
            scenarioId: id,
            scenarioTitle: scenario.title,
            completedAt: new Date().toISOString(),
          });
        }
      }
    }

    if (newEntries.length > 0) {
      setSessionLog([...sessionLog, ...newEntries]);
    }
  }, [completedScenarios]);

  const totalScenarios = scenarios.length;
  const completedCount = completedScenarios.length;
  const completionPct = totalScenarios > 0 ? Math.round((completedCount / totalScenarios) * 100) : 0;
  const totalSessions = sessionLog.length;

  const handleExport = async () => {
    const lines = sessionLog.map(
      (e) => `${e.scenarioTitle} — completed ${new Date(e.completedAt).toLocaleString()}`
    );
    const text = `Social Cues — Session History\n${'='.repeat(40)}\nTotal sessions: ${totalSessions}\nCompletion: ${completedCount}/${totalScenarios} (${completionPct}%)\n\n${lines.join('\n')}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert(text);
    }
  };

  const handleClearHistory = () => {
    if (confirm('Clear all session history? This does not reset scenario progress.')) {
      setSessionLog([]);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>📊 Analytics Dashboard</h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Track your learning progress and review your practice history.
      </p>

      {/* Summary Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            {completedCount}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Completed
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            {totalScenarios}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Total Scenarios
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            {completionPct}%
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Progress
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            {totalSessions}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Sessions Logged
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            marginBottom: '0.5rem',
          }}
        >
          <span>Overall Progress</span>
          <span>{completionPct}%</span>
        </div>
        <div
          style={{
            height: '12px',
            borderRadius: '6px',
            background: 'var(--color-bg-muted, #e5e7eb)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${completionPct}%`,
              borderRadius: '6px',
              background: 'var(--color-primary, #4f46e5)',
              transition: 'width 0.5s ease',
            }}
          />
        </div>
      </div>

      {/* Per-Scenario Breakdown */}
      <h3>Scenario Breakdown</h3>
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border, #d1d5db)' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Scenario</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Age Range</th>
              <th style={{ textAlign: 'center', padding: '0.75rem 0.5rem' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Completed</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s) => {
              const session = sessionLog.find((e) => e.scenarioId === s.id);
              const done = completedScenarios.includes(s.id);
              return (
                <tr
                  key={s.id}
                  style={{ borderBottom: '1px solid var(--color-border, #e5e7eb)' }}
                >
                  <td style={{ padding: '0.6rem 0.5rem' }}>
                    {s.metadata.illustration || '📝'} {s.title}
                  </td>
                  <td style={{ padding: '0.6rem 0.5rem', color: 'var(--color-text-muted)' }}>
                    {s.ageRange}
                  </td>
                  <td style={{ padding: '0.6rem 0.5rem', textAlign: 'center' }}>
                    <span className={`tag ${done ? 'done' : ''}`}>
                      {done ? '✓ Done' : 'Pending'}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: '0.6rem 0.5rem',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {session ? new Date(session.completedAt).toLocaleString() : '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Session History */}
      <h3>Session History</h3>
      {sessionLog.length === 0 ? (
        <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
          No sessions recorded yet. Complete a scenario to see your history.
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          {[...sessionLog].reverse().map((entry, i) => (
            <li
              key={`${entry.scenarioId}-${i}`}
              style={{
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--color-border, #e5e7eb)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 600 }}>{entry.scenarioTitle}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {new Date(entry.completedAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          className="btn btn-primary"
          onClick={handleExport}
          disabled={sessionLog.length === 0}
        >
          {copied ? '✓ Copied!' : '📋 Export to Clipboard'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleClearHistory}
          disabled={sessionLog.length === 0}
          style={{
            borderColor: 'var(--color-error-text)',
            color: 'var(--color-error-text)',
          }}
        >
          Clear History
        </button>
      </div>
    </div>
  );
};
