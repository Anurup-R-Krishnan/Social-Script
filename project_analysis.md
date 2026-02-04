# Project Analysis: API, Routing, Hooks, and React Usage

## Overview
This document analyzes the usage of API interactions, routing, React hooks, and React framework in the "Social Cues" project. The project is a React-based application built with Vite and TypeScript, designed for practicing social scenarios.

## React Framework Usage

### Where React is Used
React is the core framework for the entire application. All UI components are built using React's component-based architecture.

### How React is Used
- **Main Entry Point**: `index.tsx` uses `React.createRoot` and `React.StrictMode` to render the app.
- **Component Structure**: The app is composed of multiple React components located in the `components/` directory:
  - `Header.tsx`: Navigation header
  - `ScenarioCard.tsx`: Individual scenario display cards
  - `ScenarioPlayer.tsx`: Interactive scenario player
  - `CompletedView.tsx`: Completion screen
  - `ParentMode.tsx`: Parent control interface
  - `Settings.tsx`: Accessibility settings
- **JSX Syntax**: All components use JSX for declarative UI rendering.
- **State Management**: React's state system manages application state without external libraries.

## React Hooks Usage

### Where Hooks are Used
Hooks are primarily used in `index.tsx` (the main App component) and in the custom hook file `hooks/useLocalStorage.ts`.

### How Hooks are Used
1. **Built-in React Hooks**:
   - `useState`: Used extensively for managing component state:
     - `view`: Controls current application view ('home', 'player', 'parent', 'settings')
     - `activeScenarioId`: Tracks the currently active scenario
     - `isScenarioComplete`: Manages scenario completion status
   - `useEffect`: Used for side effects:
     - Applies accessibility classes to the document body based on user preferences

2. **Custom Hook**:
   - `useLocalStorage`: A custom hook that encapsulates localStorage functionality:
     - **Location**: `hooks/useLocalStorage.ts`
     - **Purpose**: Provides persistent storage for user preferences and progress
     - **Implementation**: Uses `useState` internally to manage stored values and provides a setter function that updates both state and localStorage
     - **Usage in App**: 
       - `completedScenarios`: Stores IDs of completed scenarios
       - `highContrast`, `largeText`, `reduceMotion`: Accessibility preferences

### Hook Patterns
- **State Initialization**: Hooks are called at the top level of components
- **Persistence**: Custom hook ensures data survives page refreshes
- **Type Safety**: TypeScript generics ensure type safety for stored values

## API Usage

### Where API is Referenced
API configuration is set up in `vite.config.ts`, but no actual API calls are currently implemented in the codebase.

### How API is Configured
- **Environment Variables**: `GEMINI_API_KEY` is loaded from environment and exposed to the client-side code via Vite's `define` option
- **Build-time Injection**: The API key is injected as `process.env.GEMINI_API_KEY` and `process.env.API_KEY`
- **Purpose**: Appears to be intended for Google Gemini AI integration (likely for generating dynamic content or AI-powered features)

### Current API Status
- **Not Used**: Despite configuration, no fetch calls or API interactions exist in the current codebase
- **Potential Use Cases**: Could be used for AI-generated scenarios, personalized feedback, or dynamic content generation

## Routing Usage

### Where Routing is Handled
The application does not use a dedicated routing library. Instead, it implements a simple state-based navigation system.

### How Routing is Implemented
- **State-Based Navigation**: Uses React state (`view`) to control which component is rendered
- **Navigation Functions**:
  - `setView()`: Changes the current view
  - `startScenario()`: Navigates to scenario player
  - `goHome()`: Returns to home screen
  - `goParent()`: Switches to parent mode
  - `goSettings()`: Opens settings
- **Conditional Rendering**: Different views are rendered based on the `view` state value

### Routing Limitations
- **No URL Changes**: Navigation doesn't update the browser URL
- **No Deep Linking**: Cannot link directly to specific scenarios or views
- **No Browser History**: Back/forward buttons don't work for app navigation

## Architecture Summary

### Current Architecture
- **Frontend-Only**: Pure client-side React application
- **State Management**: Local component state with localStorage persistence
- **Navigation**: In-memory state-based routing
- **Data**: Static scenario data imported from `scenarios.ts`

### Technology Stack
- React 19.2.3
- TypeScript
- Vite (build tool)
- No external state management libraries
- No routing libraries
- No API client libraries

## Suggested Features Using API, Routing, Hooks, and React

Based on the current architecture and the configured API key, here are 5 feature suggestions that would leverage API interactions, proper routing, additional hooks, and React's capabilities:

1. **AI-Generated Personalized Scenarios**
   - **API Usage**: Use Gemini API to generate custom scenarios based on user preferences and progress
   - **Routing**: Add routes for scenario creation workflow (/create-scenario)
   - **Hooks**: Create `useAIScenarioGenerator` hook for API calls and state management
   - **React**: Build a form component with real-time preview of AI-generated content

2. **User Progress Analytics Dashboard**
   - **API Usage**: Send anonymized progress data to analytics API for insights
   - **Routing**: Implement nested routes (/analytics/overview, /analytics/scenarios)
   - **Hooks**: Use `useAnalytics` hook to track and sync progress data
   - **React**: Create dashboard components with charts and progress visualizations

3. **Multi-User Collaboration Mode**
   - **API Usage**: Backend API for user accounts, shared scenarios, and progress syncing
   - **Routing**: Add authentication routes (/login, /register) and protected routes
   - **Hooks**: Implement `useAuth` and `useCollaboration` hooks for user management
   - **React**: Build user interface components for login, user profiles, and collaborative features

4. **Scenario Sharing and Social Features**
   - **API Usage**: REST API for uploading/downloading custom scenarios
   - **Routing**: Dynamic routes for shared scenarios (/scenario/:id/share)
   - **Hooks**: `useScenarioSharing` hook for upload/download functionality
   - **React**: Components for scenario import/export, social sharing buttons

5. **Adaptive Learning System**
   - **API Usage**: Machine learning API to analyze user performance and adjust difficulty
   - **Routing**: Learning path routes (/learning-path, /adaptive-practice)
   - **Hooks**: `useAdaptiveLearning` hook to manage personalized learning algorithms
   - **React**: Dynamic UI that adapts based on user performance data and API recommendations</content>
<parameter name="filePath">/home/anuruprkris/Sem6/Fsf/Social Cues/project_analysis.md