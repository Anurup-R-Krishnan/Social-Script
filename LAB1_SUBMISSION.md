# LAB 1 Submission

## 1) About the Use Case
Social Cues is a small React app that helps learners practice everyday social scenarios. Users choose a scenario, read a short context, and select responses step-by-step to receive feedback. The goal is to improve social communication, decision-making, and confidence in real-life interactions through guided practice.

## 2) Upload the completed Lab 1 in GitHub
- Repository URL: https://github.com/Anurup-R-Krishnan/Social-Script
- Date uploaded: 5/2/26

## 3) Extension to Lab 1
### a) Add one more webpage (extended concept with forms)
Planned page: **Practice Feedback Form**
- Purpose: Allow users to submit feedback about the scenario they completed.
- Fields: Name (optional), Scenario ID (dropdown), Rating (1–5), Comment (textarea)
- Validations: Required rating and comment length limit.

### b) Reference
TutorialsPoint ReactJS guide: https://www.tutorialspoint.com/reactjs/index.htm

### Concepts to Implement (including Hooks and Routing)
- Routing: Add routes for Home, Scenario Player, Parent Mode, Settings, and Feedback Form.
- Hooks: `useState`, `useEffect`, custom hook for local storage.
- Forms: Controlled components with validation.

---

## Contribution Table
Add code proof links or screenshots for each concept below.

| Concept | Code Proof / Screenshot |
|---|---|
| Function component | [components/ScenarioCard.tsx](components/ScenarioCard.tsx#L1-L30) |
| Class Component | Not used (functional components preferred) |
| Event | [components/ScenarioCard.tsx](components/ScenarioCard.tsx#L15-L16) (onClick, onKeyDown) |
| State Management | [index.tsx](index.tsx#L20-L25) (useState for navigation and scenarios) |
| Stateless Component | [components/ScenarioCard.tsx](components/ScenarioCard.tsx#L1-L30) (props-only, no state) |
| Forms | [components/Settings.tsx](components/Settings.tsx#L20-L40) (button controls; extension adds full form) |

---

## Marks Rubric (for reference)
- UI Aspects — 10 Marks
- Concepts Implemented from React JS — 30 Marks
- Extension Level — 10 Marks
