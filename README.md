# LAB 1 Submission

**Name:** Anurup R Krishnan  
**Roll No:** CB.SC.U4CSE23559

---

## 1) About the Use Case

**Social Cues** is an interactive React application designed to help learners practice everyday social scenarios through guided role-play. Users browse a library of 13 real-world scenarios (greeting classmates, ordering food, handling teasing, etc.), read contextual setup, and navigate multi-step interactions by choosing responses. Each choice triggers immediate positive, neutral, or negative feedback with explanations, reinforcing social communication skills, decision-making, and confidence.

### Key Features

| Feature | Description |
|---|---|
| **13 Guided Scenarios** | Multi-step interactive social situations with branching feedback |
| **Progress Tracking** | Completed scenarios are persisted in `localStorage` and visually marked |
| **Accessibility Settings** | High-contrast mode, large text, and reduced-motion preferences |
| **Parent Gate** | PIN-protected dashboard for parents/teachers to manage child data |
| **Practice Reflection Planner** | Controlled form with validation for planning and reflecting on sessions |
| **Scenario Analytics Dashboard** | Real-time performance tracking with session history and per-scenario stats |
| **Fully Offline** | No server required; all data bundled at build time, state persisted locally |

### Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Vanilla CSS with custom properties and accessibility themes
- **State:** React hooks (`useState`, `useEffect`, custom `useLocalStorage`)
- **Deployment:** GitHub Pages via `gh-pages`

---

## 2) Upload the completed Lab 1 in GitHub

- **Repository URL:** https://github.com/Anurup-R-Krishnan/Social-Script
- **Live Demo:** https://anurup-r-krishnan.github.io/Social-Script/
- **Date uploaded:** 5/2/26

---

## 3) Extension to Lab 1

### Extension A — Practice Reflection Planner (Form-based)

**Purpose:** Allow users to plan and reflect on practice sessions for specific scenarios.

**Implementation:** [`components/ReflectionForm.tsx`](components/ReflectionForm.tsx) — A fully controlled form with:

| Input Type | Field | Validation |
|---|---|---|
| `text` | Student name | Optional |
| `select` | Scenario dropdown | Required — must choose a scenario |
| `text` | Practice goal | Required — minimum 3 characters |
| `number` | Practice duration | Range 5–30 minutes |
| `radio` | Practice mode (Solo / Group) | Default: Solo |
| `checkbox` | Include teacher note | Optional toggle |
| `textarea` | Reflection notes | Optional free-text |

**Concepts demonstrated:**
- **Controlled components** — every input is bound to `useState` + `onChange`
- **Form validation** — `handleSubmit` checks required fields and displays error messages via `role="alert"`
- **Conditional rendering** — success panel shows a summary after submission, including optional teacher notes

### Extension B — Scenario Analytics Dashboard (Unique)

**Purpose:** Provide learners and parents with real-time performance analytics — tracking how many scenarios have been completed, total practice sessions, and a timestamped session history log. This gives actionable insight into learning progress over time.

**Implementation:** [`components/AnalyticsDashboard.tsx`](components/AnalyticsDashboard.tsx)

**Features:**
- **Summary statistics:** Total completed scenarios, sessions count, and completion percentage displayed as stat cards
- **Per-scenario breakdown:** Table showing each scenario's completion status and completion date
- **Session history log:** Timestamped entry log of every scenario completion, stored via `useLocalStorage`
- **Export data:** One-click copy of session history to clipboard for sharing with teachers/parents
- **Reset analytics:** Clear session history independently from main progress

**Concepts demonstrated:**
- **Custom hook composition** — uses `useLocalStorage` for persistent session log data
- **Derived state** — statistics are computed from raw session data using `.filter()`, `.length`, `.map()`
- **Side effects** — `useEffect` syncs completed scenarios into the session log with timestamps
- **Event handling** — clipboard API for export, `confirm()` for destructive reset
- **Array methods** — `map`, `filter`, `find`, `reduce` for data transformation
- **Date formatting** — `toLocaleString` for human-readable timestamps

---

## Contribution Table

| Concept | Code Proof | Lines |
|---|---|---|
| **Function Component** | [`ScenarioCard.tsx`](components/ScenarioCard.tsx) | L10–35: Functional component with destructured props |
| **Class Component** | Not used (functional components with hooks preferred) | — |
| **Event Handling** | [`ScenarioCard.tsx`](components/ScenarioCard.tsx) | L17–21: `onClick`, `onKeyDown` handlers for keyboard accessibility |
| **Event Handling** | [`ScenarioPlayer.tsx`](components/ScenarioPlayer.tsx) | L21–24: `handleChoice` event handler for response selection |
| **State Management** | [`index.tsx`](index.tsx) | L20–25: `useState` hooks for view, activeScenarioId, scenarios |
| **State Management** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L11–19: Eight separate `useState` hooks for controlled form fields |
| **Stateless Component** | [`ScenarioCard.tsx`](components/ScenarioCard.tsx) | L10–35: Pure props-only component, no internal state |
| **Stateless Component** | [`CompletedView.tsx`](components/CompletedView.tsx) | L8–20: Stateless completion screen with callback props |
| **Stateless Component** | [`Header.tsx`](components/Header.tsx) | L10–27: Stateless navigation header |
| **Custom Hook** | [`useLocalStorage.ts`](hooks/useLocalStorage.ts) | L3–25: Generic `useLocalStorage<T>` hook with localStorage sync |
| **useEffect** | [`index.tsx`](index.tsx) | L36–40: Syncs accessibility class toggles on body element |
| **useEffect** | [`AnalyticsDashboard.tsx`](components/AnalyticsDashboard.tsx) | Syncs completed scenarios into session log with timestamps |
| **Forms (text)** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L45–52: Text input for student name |
| **Forms (select)** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L55–68: Dropdown populated from scenario data |
| **Forms (number)** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L84–92: Number input with min/max constraints |
| **Forms (radio)** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L94–116: Radio group for practice mode |
| **Forms (checkbox)** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L118–125: Checkbox for teacher note toggle |
| **Forms (textarea)** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L128–135: Textarea for reflection notes |
| **Form Validation** | [`ReflectionForm.tsx`](components/ReflectionForm.tsx) | L23–34: `handleSubmit` validates required fields, displays error |
| **Conditional Rendering** | [`ScenarioPlayer.tsx`](components/ScenarioPlayer.tsx) | L53–106: Renders choices or feedback panel based on state |
| **Conditional Rendering** | [`ParentMode.tsx`](components/ParentMode.tsx) | L22–41: PIN gate renders lock screen or dashboard |
| **Props & TypeScript** | [`shared/scenarioTypes.ts`](shared/scenarioTypes.ts) | L1–26: Full TypeScript interfaces for Scenario, Step, Choice |
| **Accessibility** | [`Settings.tsx`](components/Settings.tsx) | L12–56: Toggle buttons for high-contrast, large-text, reduce-motion |
| **LocalStorage Persistence** | [`index.tsx`](index.tsx) | L28–33: Completed scenarios and preferences persist across sessions |
| **Analytics Dashboard** | [`AnalyticsDashboard.tsx`](components/AnalyticsDashboard.tsx) | Full file: Session tracking, stats, history log, clipboard export |

---

## Project Structure

```
Social Cues/
├── index.html              # Entry HTML
├── index.tsx               # App root with view routing and state management
├── index.css               # Global styles with accessibility themes
├── vite.config.ts          # Vite config with GitHub Pages base path
├── package.json            # Dependencies (React 19, Vite 6)
├── tsconfig.json           # TypeScript configuration
├── shared/
│   └── scenarioTypes.ts    # TypeScript interfaces (Scenario, Step, Choice)
├── hooks/
│   └── useLocalStorage.ts  # Custom hook for localStorage persistence
├── components/
│   ├── Header.tsx          # Navigation header (stateless)
│   ├── ScenarioCard.tsx    # Scenario grid card (stateless, accessible)
│   ├── ScenarioPlayer.tsx  # Multi-step interactive player
│   ├── CompletedView.tsx   # Scenario completion screen (stateless)
│   ├── ParentMode.tsx      # PIN-protected parent dashboard
│   ├── Settings.tsx        # Accessibility settings (stateless)
│   ├── ReflectionForm.tsx  # Extension A: Practice reflection planner
│   └── AnalyticsDashboard.tsx # Extension B: Performance analytics
└── backend/
    ├── scenarios.ts        # 13 scenario data objects
    └── server.ts           # Express server (dev only)
```
