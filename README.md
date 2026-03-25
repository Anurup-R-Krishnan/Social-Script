# LAB 1 Submission

## 1) About the Use Case
Social Cues is a small React app that helps learners practice everyday social scenarios. Users choose a scenario, read a short context, and select responses step-by-step to receive feedback. The goal is to improve social communication, decision-making, and confidence in real-life interactions through guided practice.

## 2) Upload the completed Lab 1 in GitHub
- Repository URL: https://github.com/Anurup-R-Krishnan/Social-Script
- Date uploaded: 5/2/26

## 3) Extension to Lab 1
### a) Add one more webpage (extended concept with forms)
Planned page: **Practice Reflection Planner**
- Purpose: Allow users to plan and reflect on practice sessions for scenarios.
- Fields: Student name (optional text), Scenario (dropdown), Practice goal (text), Practice duration (number), Practice mode (radio), Include teacher note (checkbox), Reflection notes (textarea)
- Validations: Required scenario and goal (min 3 chars), duration 5-30 mins.

### Concepts to Implement (including Hooks and Routing)
- Routing: View-based navigation with state (home, player, parent, settings, reflection).
- Hooks: `useState`, `useEffect`, custom `useLocalStorage` hook.
- Forms: Controlled components with validation, various input types (text, select, number, radio, checkbox, textarea).

---

## Contribution Table
Add code proof links or screenshots for each concept below.

| Concept | Code Proof / Screenshot |
|---|---|
| Function component | [components/ScenarioCard.tsx](components/ScenarioCard.tsx#L1-L30) (lines 1-30: functional component with props) |
| Class Component | Not used (functional components preferred) |
| Event | [components/ScenarioCard.tsx](components/ScenarioCard.tsx#L15-L18) (lines 15-18: onClick and onKeyDown handlers) |
| State Management | [index.tsx](index.tsx#L20-L25) (lines 20-25: useState hooks for view, activeScenarioId, scenarios) |
| Stateless Component | [components/ScenarioCard.tsx](components/ScenarioCard.tsx#L1-L30) (lines 1-30: props-only component, no internal state) |
| Forms | [components/ReflectionForm.tsx](components/ReflectionForm.tsx#L1-L173) (lines 1-173: controlled form with various inputs and validation) |

