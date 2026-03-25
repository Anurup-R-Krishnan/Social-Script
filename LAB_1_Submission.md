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

**Implementation:** [`components/ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx)

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
- **Form validation** — `handleSubmit` checks required fields and shows error messages via `role="alert"`
- **Conditional rendering** — success panel shows a summary after submission, including optional teacher notes

### Extension B — Scenario Analytics Dashboard (Unique Extension)

**Purpose:** Provide learners and parents with real-time performance analytics — tracking how many scenarios have been completed, total practice sessions, and a timestamped session history log. This gives actionable insight into learning progress over time.

**Implementation:** [`components/AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx)

**Features:**
- **Summary statistics** — Total completed scenarios, sessions count, and completion percentage displayed as stat cards
- **Visual progress bar** — Animated bar showing overall scenario completion progress
- **Per-scenario breakdown** — Table showing each scenario's title, age range, completion status, and completion date
- **Session history log** — Timestamped entry log of every scenario completion, stored persistently via `useLocalStorage`
- **Export data** — One-click copy of session history to clipboard for sharing with teachers/parents
- **Reset analytics** — Clear session history independently from main progress

**Concepts demonstrated:**
- **Custom hook composition** — Uses `useLocalStorage` for persistent session log data
- **Derived state** — Statistics are computed from raw session data using `.filter()`, `.length`, `.map()`
- **Side effects** — `useEffect` syncs completed scenarios into the session log with timestamps
- **Event handling** — Clipboard API for export, `confirm()` for destructive reset action
- **Array methods** — `map`, `filter`, `find` for data transformation and lookup
- **Date formatting** — `toLocaleString()` for human-readable timestamps

---

## Concepts to Implement (including Hooks and Routing)

- **Routing:** View-based navigation with state (`home`, `player`, `parent`, `settings`, `reflection`, `analytics`) managed via `useState<View>` in [`index.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/index.tsx).
- **Hooks:** `useState`, `useEffect`, custom `useLocalStorage` hook.
- **Forms:** Controlled components with validation, various input types (text, select, number, radio, checkbox, textarea).

---

## Contribution Table

| Concept | Code Proof / File | Lines | Description |
|---|---|---|---|
| **Function Component** | [`ScenarioCard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ScenarioCard.tsx) | L10–35 | Functional component with destructured props, renders a clickable scenario card |
| **Function Component** | [`AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx) | L16–231 | Analytics dashboard with stat cards, table, history log, and export |
| **Class Component** | Not used | — | Functional components with hooks preferred throughout |
| **Event Handling** | [`ScenarioCard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ScenarioCard.tsx) | L17–21 | `onClick` and `onKeyDown` handlers for accessible card interaction |
| **Event Handling** | [`ScenarioPlayer.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ScenarioPlayer.tsx) | L21–24 | `handleChoice` event handler for selecting a response |
| **Event Handling** | [`AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx) | L51–72 | `handleExport` uses Clipboard API; `handleClearHistory` uses `confirm()` |
| **State Management** | [`index.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/index.tsx) | L21–25 | `useState` hooks for view routing, active scenario, completion state |
| **State Management** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L11–19 | Eight separate `useState` hooks for controlled form fields |
| **State Management** | [`AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx) | L21–22 | `useLocalStorage` for persistent session log, `useState` for copied flag |
| **Stateless Component** | [`ScenarioCard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ScenarioCard.tsx) | L10–35 | Pure props-only component, no internal state |
| **Stateless Component** | [`CompletedView.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/CompletedView.tsx) | L8–20 | Stateless completion screen with callback props |
| **Stateless Component** | [`Header.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/Header.tsx) | L10–28 | Stateless navigation header with 6 callback props |
| **Stateless Component** | [`Settings.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/Settings.tsx) | L12–56 | Stateless accessibility toggle settings |
| **Custom Hook** | [`useLocalStorage.ts`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/hooks/useLocalStorage.ts) | L3–25 | Generic `useLocalStorage<T>` hook with `localStorage` sync |
| **useEffect** | [`index.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/index.tsx) | L36–40 | Syncs accessibility class toggles (`high-contrast`, `large-text`, `reduce-motion`) on `document.body` |
| **useEffect** | [`AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx) | L24–42 | Syncs newly completed scenarios into session log with timestamps |
| **Forms (text)** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L45–52 | Text input for student name (controlled) |
| **Forms (select)** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L55–68 | Dropdown populated from scenario data array |
| **Forms (number)** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L84–92 | Number input with `min={5}` and `max={30}` constraints |
| **Forms (radio)** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L94–116 | Radio group for practice mode selection (Solo / Group) |
| **Forms (checkbox)** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L118–125 | Checkbox for toggling teacher note inclusion |
| **Forms (textarea)** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L128–135 | Textarea for free-text reflection notes |
| **Form Validation** | [`ReflectionForm.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ReflectionForm.tsx) | L23–34 | `handleSubmit` validates required fields, shows error via `role="alert"` |
| **Conditional Rendering** | [`ScenarioPlayer.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ScenarioPlayer.tsx) | L53–106 | Renders choices list OR feedback panel based on `showFeedback` state |
| **Conditional Rendering** | [`ParentMode.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/ParentMode.tsx) | L22–41 | PIN gate renders lock screen OR parent dashboard |
| **Conditional Rendering** | [`AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx) | L190–210 | Empty state vs. session history list based on `sessionLog.length` |
| **Props & TypeScript** | [`scenarioTypes.ts`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/shared/scenarioTypes.ts) | L1–26 | Full TypeScript interfaces for `Scenario`, `Step`, `Choice` |
| **Accessibility** | [`Settings.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/Settings.tsx) | L12–56 | Toggle buttons for high-contrast, large-text, reduce-motion modes |
| **LocalStorage** | [`index.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/index.tsx) | L28–33 | Completed scenarios and accessibility preferences persist across sessions |
| **LocalStorage** | [`AnalyticsDashboard.tsx`](https://github.com/Anurup-R-Krishnan/Social-Script/blob/main/components/AnalyticsDashboard.tsx) | L21 | Session history log persisted via `useLocalStorage<SessionEntry[]>` |

---

## Project Structure

```
Social Cues/
├── index.html                 # Entry HTML
├── index.tsx                  # App root — view routing and state management
├── index.css                  # Global styles with accessibility themes
├── vite.config.ts             # Vite config with GitHub Pages base path
├── package.json               # Dependencies (React 19, Vite 6)
├── tsconfig.json              # TypeScript configuration
├── shared/
│   └── scenarioTypes.ts       # TypeScript interfaces (Scenario, Step, Choice)
├── hooks/
│   └── useLocalStorage.ts     # Custom hook for localStorage persistence
├── components/
│   ├── Header.tsx             # Navigation header (stateless)
│   ├── ScenarioCard.tsx       # Scenario grid card (stateless, accessible)
│   ├── ScenarioPlayer.tsx     # Multi-step interactive player
│   ├── CompletedView.tsx      # Scenario completion screen (stateless)
│   ├── ParentMode.tsx         # PIN-protected parent dashboard
│   ├── Settings.tsx           # Accessibility settings (stateless)
│   ├── ReflectionForm.tsx     # Extension A: Practice reflection planner
│   └── AnalyticsDashboard.tsx # Extension B: Performance analytics
└── backend/
    ├── scenarios.ts           # 13 scenario data objects
    └── server.ts              # Express server (dev only, not used in production)
```

---

## Screenshots

> *Add screenshots below for each view*

### Home — Scenario Grid
<!-- Insert screenshot here -->

### Scenario Player — Interactive Choices
<!-- Insert screenshot here -->

### Practice Reflection Planner (Extension A)
<!-- Insert screenshot here -->

### Scenario Analytics Dashboard (Extension B)
<!-- Insert screenshot here -->

### Accessibility Settings
<!-- Insert screenshot here -->

### Parent Mode — PIN Gate
<!-- Insert screenshot here -->
