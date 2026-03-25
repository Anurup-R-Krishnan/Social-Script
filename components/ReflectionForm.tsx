import React, { useState } from 'react';
import { Scenario } from '../shared/scenarioTypes';

interface ReflectionFormProps {
  scenarios: Scenario[];
}

type PracticeMode = 'solo' | 'group';

export const ReflectionForm: React.FC<ReflectionFormProps> = ({ scenarios }) => {
  const [studentName, setStudentName] = useState('');
  const [scenarioId, setScenarioId] = useState('');
  const [goal, setGoal] = useState('');
  const [practiceMinutes, setPracticeMinutes] = useState(10);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('solo');
  const [includeTeacherNote, setIncludeTeacherNote] = useState(false);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const selectedScenario = scenarios.find((s) => s.id === scenarioId);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSubmitted(false);

    if (!scenarioId || goal.trim().length < 3) {
      setError('Please choose a scenario and add a clear practice goal (3+ characters).');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="card" style={{ maxWidth: '720px', margin: '0 auto' }}>
      <h2>Practice Reflection Planner</h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Plan a short practice session and reflect on what you want to improve.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="student-name">Student name</label>
        <input
          id="student-name"
          className="input-field"
          type="text"
          placeholder="Student name (optional)"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label className="sr-only" htmlFor="scenario-select">Scenario</label>
        <select
          id="scenario-select"
          className="input-field"
          value={scenarioId}
          onChange={(e) => setScenarioId(e.target.value)}
          required
        >
          <option value="">Choose a scenario to practice</option>
          {scenarios.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.title}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="practice-goal">Practice goal</label>
        <input
          id="practice-goal"
          className="input-field"
          type="text"
          placeholder="Practice goal (e.g., ask a follow-up question)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />

        <label htmlFor="practice-minutes" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
          Practice duration (minutes)
        </label>
        <input
          id="practice-minutes"
          className="input-field"
          type="number"
          min={5}
          max={30}
          value={practiceMinutes}
          onChange={(e) => setPracticeMinutes(Number(e.target.value))}
        />

        <fieldset style={{ border: 'none', padding: 0, marginBottom: '1rem' }}>
          <legend style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Practice mode</legend>
          <label style={{ marginRight: '1rem' }}>
            <input
              type="radio"
              name="practice-mode"
              value="solo"
              checked={practiceMode === 'solo'}
              onChange={() => setPracticeMode('solo')}
            />{' '}
            Solo
          </label>
          <label>
            <input
              type="radio"
              name="practice-mode"
              value="group"
              checked={practiceMode === 'group'}
              onChange={() => setPracticeMode('group')}
            />{' '}
            Group
          </label>
        </fieldset>

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            type="checkbox"
            checked={includeTeacherNote}
            onChange={(e) => setIncludeTeacherNote(e.target.checked)}
          />
          Include teacher note in summary
        </label>

        <label className="sr-only" htmlFor="reflection-notes">Reflection notes</label>
        <textarea
          id="reflection-notes"
          className="input-field"
          rows={4}
          placeholder="Reflection notes (what went well / what to retry)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        {error && (
          <p style={{ color: 'var(--color-error-text)', marginTop: 0 }} role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn btn-primary">
          Save Reflection
        </button>
      </form>

      {submitted && (
        <div className="feedback-panel feedback-positive" style={{ marginTop: '1.5rem' }}>
          <div className="feedback-header">
            <div className="feedback-icon" aria-hidden="true">✓</div>
            <h3 style={{ margin: 0 }}>Reflection Saved</h3>
          </div>
          <p className="large-text" style={{ marginBottom: '0.5rem' }}>
            {studentName ? `${studentName}, ` : ''}you planned a {practiceMinutes}-minute {practiceMode} session.
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            Scenario: <strong>{selectedScenario?.title}</strong>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            Goal: <strong>{goal}</strong>
          </p>
          {includeTeacherNote && selectedScenario?.teacherNotes && (
            <p style={{ marginBottom: 0 }}>
              Teacher note: {selectedScenario.teacherNotes}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
