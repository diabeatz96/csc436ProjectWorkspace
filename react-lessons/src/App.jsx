import React, { useState } from 'react';
import './App.css';
import { StudentCard, TodoItem, Button } from './components';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="app">
      <header className="main-header">
        <div className="header-content">
          <h1>🚀 CSC436 Web Development</h1>
          <p>Progressive lessons to master React development</p>
          {currentView !== 'home' && (
            <button
              className="home-btn"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Course Overview
            </button>
          )}
        </div>
      </header>

      <main className="main-content">
        {currentView === 'home' && <HomePage setCurrentView={setCurrentView} />}
        {currentView === 'day1' && <Day1 />}
      </main>
    </div>
  );
}

function HomePage({ setCurrentView }) {
  return (
    <div className="homepage">
      <section className="course-intro">
        <h2>Welcome to CSC436 Web Development</h2>
        <p className="intro-text">
          This comprehensive course will take you from React beginner to confident developer.
          Each day builds upon the previous, with hands-on exercises and real-world examples.
        </p>
      </section>

      <section className="days-grid">
        <div className="day-card available" onClick={() => setCurrentView('day1')}>
          <div className="day-header">
            <span className="day-number">01</span>
            <span className="day-status">Available</span>
          </div>
          <h3>React Fundamentals</h3>
          <p>Learn the basics: JSX, Components, Props, and State</p>
          <div className="day-topics">
            <span className="topic">JSX Syntax</span>
            <span className="topic">Components</span>
            <span className="topic">useState Hook</span>
            <span className="topic">Event Handling</span>
          </div>
          <div className="day-meta">
            <span>🕒 2 hours</span>
            <span>📝 2 exercises</span>
          </div>
        </div>

        <div className="day-card coming-soon">
          <div className="day-header">
            <span className="day-number">02</span>
            <span className="day-status">Coming Soon</span>
          </div>
          <h3>Props & Component Communication</h3>
          <p>Master data flow between components</p>
          <div className="day-topics">
            <span className="topic">Props Drilling</span>
            <span className="topic">Children Props</span>
            <span className="topic">Callback Functions</span>
            <span className="topic">Component Patterns</span>
          </div>
          <div className="day-meta">
            <span>🕒 2.5 hours</span>
            <span>📝 3 exercises</span>
          </div>
        </div>

        <div className="day-card coming-soon">
          <div className="day-header">
            <span className="day-number">03</span>
            <span className="day-status">Coming Soon</span>
          </div>
          <h3>Effects & Side Effects</h3>
          <p>Handle lifecycle events and external data</p>
          <div className="day-topics">
            <span className="topic">useEffect Hook</span>
            <span className="topic">API Calls</span>
            <span className="topic">Cleanup Functions</span>
            <span className="topic">Dependencies</span>
          </div>
          <div className="day-meta">
            <span>🕒 3 hours</span>
            <span>📝 4 exercises</span>
          </div>
        </div>

        <div className="day-card coming-soon">
          <div className="day-header">
            <span className="day-number">04</span>
            <span className="day-status">Coming Soon</span>
          </div>
          <h3>Forms & User Input</h3>
          <p>Create interactive forms and handle validation</p>
          <div className="day-topics">
            <span className="topic">Controlled Components</span>
            <span className="topic">Form Validation</span>
            <span className="topic">Custom Hooks</span>
            <span className="topic">Input Types</span>
          </div>
          <div className="day-meta">
            <span>🕒 2.5 hours</span>
            <span>📝 3 exercises</span>
          </div>
        </div>
      </section>

      <section className="learning-path">
        <h2>Your Learning Journey</h2>
        <div className="progress-track">
          <div className="milestone completed">
            <div className="milestone-icon">✓</div>
            <div className="milestone-content">
              <h4>Setup Complete</h4>
              <p>Development environment ready</p>
            </div>
          </div>
          <div className="connector"></div>
          <div className="milestone current">
            <div className="milestone-icon">1</div>
            <div className="milestone-content">
              <h4>React Fundamentals</h4>
              <p>Master the building blocks</p>
            </div>
          </div>
          <div className="connector"></div>
          <div className="milestone upcoming">
            <div className="milestone-icon">2</div>
            <div className="milestone-content">
              <h4>Component Architecture</h4>
              <p>Build scalable applications</p>
            </div>
          </div>
          <div className="connector"></div>
          <div className="milestone upcoming">
            <div className="milestone-icon">🎯</div>
            <div className="milestone-content">
              <h4>React Mastery</h4>
              <p>Advanced patterns & optimization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Day1() {
  const [currentSection, setCurrentSection] = useState('overview');

  return (
    <section className="day-section">
      <h2>📚 Day 1: React Fundamentals</h2>

      <div className="nav-tabs">
        <button
          className={currentSection === 'overview' ? 'active' : ''}
          onClick={() => setCurrentSection('overview')}
        >
          Overview
        </button>
        <button
          className={currentSection === 'concepts' ? 'active' : ''}
          onClick={() => setCurrentSection('concepts')}
        >
          Core Concepts
        </button>
        <button
          className={currentSection === 'exercises' ? 'active' : ''}
          onClick={() => setCurrentSection('exercises')}
        >
          Exercises
        </button>
        <button
          className={currentSection === 'components' ? 'active' : ''}
          onClick={() => setCurrentSection('components')}
        >
          📁 Component Explorer
        </button>
      </div>

      {currentSection === 'overview' && <Overview />}
      {currentSection === 'concepts' && <CoreConcepts />}
      {currentSection === 'exercises' && <Exercises />}
      {currentSection === 'components' && <ComponentExplorerSection />}
    </section>
  );
}

function Overview() {
  return (
    <div className="content-section">
      <h3>🎯 Learning Objectives</h3>
      <ul className="objectives-list">
        <li>Understand what React is and how it works</li>
        <li>Learn JSX syntax and its differences from HTML</li>
        <li>Create and use React components</li>
        <li>Manage component state with useState</li>
        <li>Handle user interactions and events</li>
        <li>Organize React projects with proper file structure</li>
        <li>Import and export components effectively</li>
      </ul>

      <h3>🚀 Getting Started</h3>
      <div className="setup-instructions">
        <h4>Setting up your React project:</h4>
        <pre className="code-block">{`npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev`}</pre>
        <p>This creates a new React project using Vite (fast build tool) and starts a development server.</p>
      </div>

      <h3>📁 React Project Structure</h3>
      <div className="project-structure">
        <h4>🏗️ Understanding Your React App Structure</h4>
        <p>When you create a new React app, you get a specific folder structure. Here's what each part does:</p>

        <div className="structure-diagram">
          <pre className="code-block">{`my-react-app/
├── public/                 # Static files (images, favicon, etc.)
│   ├── index.html         # Main HTML template
│   └── vite.svg           # Vite logo
├── src/                   # Your React source code
│   ├── components/        # Reusable components (we'll create this)
│   │   ├── StudentCard.jsx
│   │   ├── StudentCard.css
│   │   ├── Button.jsx
│   │   └── index.js       # Export all components
│   ├── pages/            # Different pages/views
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   ├── styles/           # Global CSS files
│   ├── App.jsx           # Main App component
│   ├── App.css           # App-specific styles
│   ├── main.jsx          # Entry point (renders App)
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── vite.config.js        # Build tool configuration
└── README.md             # Project documentation`}</pre>
        </div>

        <div className="key-files">
          <h4>🔑 Key Files Explained:</h4>
          <div className="file-explanations">
            <div className="file-item">
              <span className="file-name">src/main.jsx</span>
              <p>The entry point where React starts. It renders your App component into the DOM.</p>
            </div>
            <div className="file-item">
              <span className="file-name">src/App.jsx</span>
              <p>Your main App component - the root of your component tree.</p>
            </div>
            <div className="file-item">
              <span className="file-name">public/index.html</span>
              <p>The HTML template. React injects your components into the div with id="root".</p>
            </div>
            <div className="file-item">
              <span className="file-name">package.json</span>
              <p>Lists your dependencies, scripts, and project metadata.</p>
            </div>
          </div>
        </div>

        <div className="organization-tips">
          <h4>📋 File Organization Best Practices:</h4>
          <ul>
            <li><strong>Components folder:</strong> Store reusable UI components</li>
            <li><strong>Pages folder:</strong> Store different pages/views of your app</li>
            <li><strong>Hooks folder:</strong> Store custom React hooks</li>
            <li><strong>Utils folder:</strong> Store helper functions and utilities</li>
            <li><strong>One component per file:</strong> Makes code easier to find and maintain</li>
            <li><strong>Match file names to component names:</strong> StudentCard.jsx exports StudentCard</li>
            <li><strong>Use index.js files:</strong> For easier imports from folders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CoreConcepts() {
  const [showExample, setShowExample] = useState(null);
  const [liveDemo, setLiveDemo] = useState({ likes: 0, isLiked: false, name: "Student" });

  return (
    <div className="content-section">
      <div className="concept-card featured">
        <div className="concept-header">
          <h3>🎯 What is React?</h3>
          <span className="concept-badge">Foundation</span>
        </div>
        <p className="concept-intro">
          React is a powerful JavaScript library created by Facebook for building user interfaces.
          Think of it as LEGO blocks for websites - you build complex UIs by combining simple, reusable pieces.
        </p>

        <div className="key-concepts">
          <div className="key-concept">
            <div className="concept-icon">🧩</div>
            <div>
              <h4>Component-Based Architecture</h4>
              <p>Break your UI into independent, reusable pieces. Each component manages its own state and logic.</p>
            </div>
          </div>
          <div className="key-concept">
            <div className="concept-icon">📝</div>
            <div>
              <h4>Declarative Programming</h4>
              <p>Tell React what you want the UI to look like, not how to manipulate the DOM step by step.</p>
            </div>
          </div>
          <div className="key-concept">
            <div className="concept-icon">⚡</div>
            <div>
              <h4>Virtual DOM</h4>
              <p>React creates a virtual copy of the DOM in memory and efficiently updates only what changed.</p>
            </div>
          </div>
        </div>

        <div className="visual-comparison">
          <div className="comparison-side">
            <h4>❌ Without React (Vanilla JS)</h4>
            <pre className="code-block small">{`// Lots of manual DOM manipulation
const button = document.getElementById('myButton');
const counter = document.getElementById('counter');
let count = 0;

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  if (count > 5) {
    button.style.backgroundColor = 'green';
  }
});`}</pre>
          </div>
          <div className="comparison-side">
            <h4>✅ With React</h4>
            <pre className="code-block small">{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{backgroundColor: count > 5 ? 'green' : 'blue'}}
      >
        Click me
      </button>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <div className="concept-header">
          <h3>🏗️ JSX - JavaScript XML</h3>
          <span className="concept-badge">Syntax</span>
        </div>
        <p className="concept-intro">
          JSX looks like HTML but it's actually JavaScript! It lets you write markup directly in your JavaScript code,
          making your components much more readable and intuitive.
        </p>

        <div className="jsx-demo">
          <div className="jsx-input">
            <h4>What you write (JSX):</h4>
            <pre className="code-block">{`function Welcome() {
  const name = "${liveDemo.name}";
  const timeOfDay = "morning";

  return (
    <div className="welcome-card">
      <h1>Good {timeOfDay}, {name}!</h1>
      <p>Welcome to React class</p>
      <img src="/avatar.jpg" alt="Student avatar" />
    </div>
  );
}`}</pre>
          </div>
          <div className="jsx-output">
            <h4>What it renders:</h4>
            <div className="demo-output">
              <div className="welcome-card">
                <h1>Good morning, {liveDemo.name}!</h1>
                <p>Welcome to React class</p>
                <div className="avatar-placeholder">👨‍🎓</div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="example-btn"
          onClick={() => setShowExample(showExample === 'jsx' ? null : 'jsx')}
        >
          {showExample === 'jsx' ? 'Hide' : 'Show'} JSX Rules & Tips
        </button>
        {showExample === 'jsx' && (
          <div className="jsx-rules">
            <div className="rule-grid">
              <div className="rule-item">
                <span className="rule-number">1</span>
                <div>
                  <h4>Single Parent Element</h4>
                  <p>JSX must return one parent element (use &lt;div&gt; or &lt;Fragment&gt;)</p>
                  <code>return &lt;div&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/div&gt;</code>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-number">2</span>
                <div>
                  <h4>className not class</h4>
                  <p>Use className for CSS classes (class is reserved in JS)</p>
                  <code>&lt;div className="my-style"&gt;</code>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-number">3</span>
                <div>
                  <h4>camelCase Attributes</h4>
                  <p>HTML attributes become camelCase in JSX</p>
                  <code>onClick, onChange, onSubmit</code>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-number">4</span>
                <div>
                  <h4>Close All Tags</h4>
                  <p>Self-closing tags must end with /&gt;</p>
                  <code>&lt;img src="..." /&gt; &lt;br /&gt;</code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="concept-card">
        <div className="concept-header">
          <h3>🧱 Components & Props</h3>
          <span className="concept-badge">Building Blocks</span>
        </div>
        <p className="concept-intro">
          Components are like functions that return JSX. They can receive "props" (properties) as inputs,
          making them reusable with different data.
        </p>

        <div className="component-demo">
          <div className="demo-explanation">
            <h4>🎭 Think of components like actors in a play:</h4>
            <ul>
              <li><strong>The Script (Component):</strong> Defines what the actor does</li>
              <li><strong>The Role (Props):</strong> Different characters the actor can play</li>
              <li><strong>The Performance (Render):</strong> What the audience sees</li>
            </ul>
          </div>

          <button
            className="example-btn"
            onClick={() => setShowExample(showExample === 'components' ? null : 'components')}
          >
            {showExample === 'components' ? 'Hide' : 'Show'} Component Organization Example
          </button>
          {showExample === 'components' && (
            <div className="component-example">
              <h4>🗂️ Real-World Component Organization</h4>
              <p>Let's see how to create, export, and use components in separate files (like in real projects):</p>

              <div className="file-structure-example">
                <h5>📁 File Structure:</h5>
                <pre className="code-block small">{`src/
├── components/
│   ├── StudentCard.jsx     # Individual component
│   ├── StudentCard.css     # Component styles
│   ├── Button.jsx          # Reusable button
│   ├── TodoItem.jsx        # Todo item component
│   └── index.js            # Export all components
├── App.jsx                 # Main app
└── main.jsx                # Entry point`}</pre>
              </div>

              <div className="code-examples-grid">
                <div className="code-example">
                  <h5>📄 StudentCard.jsx (Component File)</h5>
                  <pre className="code-block">{`// src/components/StudentCard.jsx
import React from 'react';
import './StudentCard.css';

function StudentCard({ name, major, year, gpa, isHonorsStudent }) {
  return (
    <div className={\`student-card \${isHonorsStudent ? 'honors' : ''}\`}>
      <div className="student-avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="student-info">
        <h3>{name}</h3>
        <p>{major}</p>
        <div className="details">
          <span className="year-badge">{year} Year</span>
          <span className="gpa">GPA: {gpa}</span>
        </div>

        {isHonorsStudent && (
          <div className="honors-badge">🏆 Honor Student</div>
        )}
      </div>
    </div>
  );
}

export default StudentCard;  // 👈 Export the component`}</pre>
                </div>

                <div className="code-example">
                  <h5>📄 components/index.js (Barrel Export)</h5>
                  <pre className="code-block">{`// src/components/index.js
// Central export file - makes imports cleaner

export { default as StudentCard } from './StudentCard';
export { default as Button } from './Button';
export { default as TodoItem } from './TodoItem';

// Now you can import like this:
// import { StudentCard, Button } from './components';`}</pre>
                </div>

                <div className="code-example">
                  <h5>📄 App.jsx (Using Components)</h5>
                  <pre className="code-block">{`// src/App.jsx
import React from 'react';
import { StudentCard, Button } from './components';

function App() {
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      major: "Computer Science",
      year: "3rd",
      gpa: 3.8,
      isHonorsStudent: true
    },
    {
      id: 2,
      name: "Bob Smith",
      major: "Web Development",
      year: "2nd",
      gpa: 3.2,
      isHonorsStudent: false
    }
  ];

  return (
    <div className="app">
      <h1>CSC436 Student Roster</h1>

      <div className="student-list">
        {students.map(student => (
          <StudentCard
            key={student.id}           // 👈 Always use key for lists
            name={student.name}
            major={student.major}
            year={student.year}
            gpa={student.gpa}
            isHonorsStudent={student.isHonorsStudent}
          />
        ))}
      </div>

      <Button variant="primary" onClick={() => alert('Add Student!')}>
        Add New Student
      </Button>
    </div>
  );
}

export default App;`}</pre>
                </div>
              </div>

              <div className="import-export-guide">
                <h5>📚 Import/Export Patterns:</h5>
                <div className="pattern-examples">
                  <div className="pattern-item">
                    <h6>Default Export (Most Common)</h6>
                    <pre className="code-block small">{`// In StudentCard.jsx
export default StudentCard;

// In App.jsx
import StudentCard from './components/StudentCard';
// You can even rename: import Card from './components/StudentCard';`}</pre>
                  </div>

                  <div className="pattern-item">
                    <h6>Named Exports (Multiple from one file)</h6>
                    <pre className="code-block small">{`// In utils.js
export const formatDate = (date) => { /* ... */ };
export const validateEmail = (email) => { /* ... */ };

// In App.jsx
import { formatDate, validateEmail } from './utils';
// Or import all: import * as utils from './utils';`}</pre>
                  </div>

                  <div className="pattern-item">
                    <h6>Barrel Exports (Clean Imports)</h6>
                    <pre className="code-block small">{`// components/index.js
export { default as StudentCard } from './StudentCard';
export { default as Button } from './Button';

// In App.jsx - Clean single import
import { StudentCard, Button } from './components';`}</pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="concept-card featured">
        <div className="concept-header">
          <h3>⚙️ How React Actually Works</h3>
          <span className="concept-badge">Deep Dive</span>
        </div>
        <p className="concept-intro">
          Understanding React's internal mechanisms helps you write better code and debug more effectively.
          Let's explore what happens "under the hood" when React runs.
        </p>

        <div className="react-internals">
          <div className="internal-concept">
            <div className="concept-icon">🌳</div>
            <div>
              <h4>Virtual DOM Tree</h4>
              <p>React creates a virtual representation of your UI in memory. When changes occur, React compares the new virtual DOM with the previous version (called "diffing") and updates only the parts that changed.</p>
            </div>
          </div>

          <div className="internal-concept">
            <div className="concept-icon">🔄</div>
            <div>
              <h4>Reconciliation Process</h4>
              <p>This is React's algorithm for updating the DOM efficiently. It figures out the minimum number of changes needed to transform the old UI into the new UI.</p>
            </div>
          </div>

          <div className="internal-concept">
            <div className="concept-icon">📦</div>
            <div>
              <h4>Component Lifecycle</h4>
              <p>Components go through phases: mounting (creation), updating (when props/state change), and unmounting (removal). React manages this automatically.</p>
            </div>
          </div>

          <div className="internal-concept">
            <div className="concept-icon">⚡</div>
            <div>
              <h4>Batching & Performance</h4>
              <p>React batches multiple state updates together for performance. It also uses techniques like lazy loading and code splitting to optimize bundle sizes.</p>
            </div>
          </div>
        </div>

        <div className="react-flow-diagram">
          <h4>🔍 React's Update Flow:</h4>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h5>User Interaction</h5>
                <p>Click, type, hover, etc.</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h5>State Update</h5>
                <p>setState() or setter function called</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h5>Re-render</h5>
                <p>Component function runs again</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h5>Virtual DOM Diff</h5>
                <p>Compare old vs new virtual DOM</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h5>DOM Update</h5>
                <p>Apply minimal changes to real DOM</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="example-btn"
          onClick={() => setShowExample(showExample === 'internals' ? null : 'internals')}
        >
          {showExample === 'internals' ? 'Hide' : 'Show'} React Internals Example
        </button>
        {showExample === 'internals' && (
          <div className="internals-example">
            <pre className="code-block">{`// What you write:
function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build an app']);

  const addTodo = () => {
    setTodos([...todos, 'New todo']);  // 👈 State update
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>    // 👈 JSX creates virtual DOM
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

// What React does internally:
// 1. Creates virtual DOM representation
const virtualDOM = {
  type: 'div',
  children: [
    { type: 'div', children: 'Learn React' },
    { type: 'div', children: 'Build an app' },
    { type: 'button', props: { onClick: addTodo }, children: 'Add Todo' }
  ]
};

// 2. When state updates, React:
//    - Runs the component function again
//    - Creates new virtual DOM
//    - Compares (diffs) old vs new
//    - Updates only changed parts in real DOM

// 3. Performance benefits:
//    - Batch updates together
//    - Skip unnecessary re-renders
//    - Update only what changed`}</pre>
          </div>
        )}
      </div>

      <div className="concept-card">
        <div className="concept-header">
          <h3>🔄 State with useState</h3>
          <span className="concept-badge">Interactive</span>
        </div>
        <p className="concept-intro">
          State is how React components "remember" information that can change over time.
          When state changes, React automatically re-renders the component with the new data.
        </p>

        <div className="state-analogy">
          <h4>🧠 State is like a component's memory:</h4>
          <div className="analogy-grid">
            <div className="analogy-item">
              <span className="analogy-icon">📱</span>
              <p><strong>Like your phone's battery level</strong> - it changes over time and updates the display</p>
            </div>
            <div className="analogy-item">
              <span className="analogy-icon">🎮</span>
              <p><strong>Like a game score</strong> - keeps track of current points and updates when you play</p>
            </div>
            <div className="analogy-item">
              <span className="analogy-icon">🌡️</span>
              <p><strong>Like a thermostat</strong> - remembers current temperature and adjusts when needed</p>
            </div>
          </div>
        </div>

        <div className="live-state-demo">
          <h4>🎮 Interactive useState Demo:</h4>
          <div className="demo-controls">
            <div className="demo-output">
              <div className="like-button-demo">
                <button
                  className={`demo-btn ${liveDemo.isLiked ? 'liked' : ''}`}
                  onClick={() => setLiveDemo(prev => ({
                    ...prev,
                    likes: prev.likes + 1,
                    isLiked: true
                  }))}
                >
                  👍 {liveDemo.likes} Likes
                </button>
                <button
                  className="demo-btn reset"
                  onClick={() => setLiveDemo(prev => ({
                    ...prev,
                    likes: 0,
                    isLiked: false
                  }))}
                >
                  Reset
                </button>
              </div>
              <p className="demo-status">
                {liveDemo.likes === 0 && "Click the like button to see state in action! 👆"}
                {liveDemo.likes > 0 && liveDemo.likes < 5 && `You've liked this ${liveDemo.likes} time${liveDemo.likes > 1 ? 's' : ''}! 🎉`}
                {liveDemo.likes >= 5 && liveDemo.likes < 10 && "Wow, you really like this! 🚀"}
                {liveDemo.likes >= 10 && "You're a React enthusiast! 🌟"}
              </p>
            </div>
          </div>
        </div>

        <button
          className="example-btn"
          onClick={() => setShowExample(showExample === 'state' ? null : 'state')}
        >
          {showExample === 'state' ? 'Hide' : 'Show'} useState Code Example
        </button>
        {showExample === 'state' && (
          <div className="state-example">
            <div className="state-breakdown">
              <pre className="code-block">{`import { useState } from 'react';

function LikeButton() {
  // useState Hook - returns [current value, setter function]
  const [likes, setLikes] = useState(0);        // 👈 Initial value: 0
  const [isLiked, setIsLiked] = useState(false); // 👈 Initial value: false

  const handleClick = () => {
    setLikes(likes + 1);    // 👈 Update likes count
    setIsLiked(true);       // 👈 Update liked status
  };

  // This component re-renders every time state changes
  return (
    <button
      onClick={handleClick}
      className={isLiked ? 'liked' : 'not-liked'}
      style={{
        backgroundColor: isLiked ? '#4ade80' : '#3b82f6',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      👍 {likes} Likes
    </button>
  );
}`}</pre>
            </div>
            <div className="state-rules">
              <h4>📋 useState Rules:</h4>
              <ol>
                <li><strong>Always import:</strong> <code>import { useState } from 'react';</code></li>
                <li><strong>Call at top level:</strong> Never inside loops, conditions, or nested functions</li>
                <li><strong>Destructure the return:</strong> <code>const [value, setValue] = useState(initial);</code></li>
                <li><strong>Use setter function:</strong> Don't modify state directly, always use the setter</li>
                <li><strong>State is asynchronous:</strong> Changes don't happen immediately</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Exercises() {
  return (
    <div className="content-section">
      <h3>🏋️ In-Class Exercises</h3>

      <div className="exercise-card">
        <h4>Exercise 1: Personal Profile Component</h4>
        <div className="exercise-description">
          <p><strong>Goal:</strong> Create a reusable profile component that displays student information</p>
          <p><strong>Skills practiced:</strong> Components, Props, JSX</p>

          <h5>Instructions:</h5>
          <ol>
            <li>Create a new component called <code>StudentProfile</code></li>
            <li>It should accept props for: name, major, year, and favoriteSubject</li>
            <li>Display this information in a nicely formatted card</li>
            <li>Use the component to create profiles for 3 different students</li>
            <li>Add some CSS styling to make it look good</li>
          </ol>

          <details>
            <summary>💡 Hint (click to expand)</summary>
            <pre className="code-block">{`function StudentProfile({ name, major, year, favoriteSubject }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Favorite Subject:</strong> {favoriteSubject}</p>
    </div>
  );
}`}</pre>
          </details>
        </div>
      </div>

      <div className="exercise-card">
        <h4>Exercise 2: Interactive Quiz Component</h4>
        <div className="exercise-description">
          <p><strong>Goal:</strong> Build an interactive quiz that tracks score and provides feedback</p>
          <p><strong>Skills practiced:</strong> useState, Event handling, Conditional rendering</p>

          <h5>Instructions:</h5>
          <ol>
            <li>Create a <code>ReactQuiz</code> component</li>
            <li>Include 3 multiple-choice questions about React concepts</li>
            <li>Track the user's score using useState</li>
            <li>Show immediate feedback after each answer</li>
            <li>Display final score and a message based on performance</li>
            <li>Add a "Reset Quiz" button to start over</li>
          </ol>

          <details>
            <summary>💡 Starter Code (click to expand)</summary>
            <pre className="code-block">{`function ReactQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What does JSX stand for?",
      answers: ["JavaScript XML", "Java Syntax Extension", "Just Syntax", "JavaScript eXtension"],
      correct: 0
    },
    // Add more questions...
  ];

  const handleAnswer = (selectedAnswer) => {
    // Your logic here
  };

  return (
    <div className="quiz-container">
      {/* Your quiz UI here */}
    </div>
  );
}`}</pre>
          </details>
        </div>
      </div>

      <div className="exercise-card">
        <h4>Exercise 3: Dynamic Shopping List</h4>
        <div className="exercise-description">
          <p><strong>Goal:</strong> Create a shopping list app where users can add, remove, and mark items as purchased</p>
          <p><strong>Skills practiced:</strong> useState with arrays, Event handling, Array methods, Conditional styling</p>

          <h5>Instructions:</h5>
          <ol>
            <li>Create a <code>ShoppingList</code> component with an input field and "Add Item" button</li>
            <li>Use useState to manage an array of shopping items</li>
            <li>Each item should have: name, id, and isPurchased status</li>
            <li>Display all items in a list with checkboxes to mark as purchased</li>
            <li>Add a "Remove" button for each item</li>
            <li>Style purchased items differently (strikethrough, different color)</li>
            <li>Show a count of total items and purchased items</li>
            <li>Add a "Clear All" button to empty the list</li>
          </ol>

          <details>
            <summary>💡 Starter Code (click to expand)</summary>
            <pre className="code-block">{`function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      const newItem = {
        id: Date.now(), // Simple ID generation
        name: inputValue.trim(),
        isPurchased: false
      };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const togglePurchased = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isPurchased: !item.isPurchased } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-list">
      <h3>My Shopping List</h3>
      <div className="add-item">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new item..."
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <div className="list-stats">
        <p>Total Items: {items.length}</p>
        <p>Purchased: {items.filter(item => item.isPurchased).length}</p>
      </div>

      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className={item.isPurchased ? 'purchased' : ''}>
            <input
              type="checkbox"
              checked={item.isPurchased}
              onChange={() => togglePurchased(item.id)}
            />
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <button onClick={() => setItems([])}>Clear All</button>
      )}
    </div>
  );
}`}</pre>
          </details>
        </div>
      </div>

      <div className="exercise-card">
        <h4>Exercise 4: Color Theme Switcher</h4>
        <div className="exercise-description">
          <p><strong>Goal:</strong> Build a theme switcher that changes the appearance of a card component</p>
          <p><strong>Skills practiced:</strong> useState, Dynamic styling, Event handling, Object state</p>

          <h5>Instructions:</h5>
          <ol>
            <li>Create a <code>ThemeSwitcher</code> component with a card displaying some content</li>
            <li>Create theme objects for different color schemes (light, dark, colorful)</li>
            <li>Use useState to manage the current theme</li>
            <li>Add buttons to switch between themes</li>
            <li>Apply theme styles dynamically to the card</li>
            <li>Include a preview of what each theme looks like</li>
            <li>Add smooth transitions between theme changes</li>
          </ol>

          <details>
            <summary>💡 Starter Code (click to expand)</summary>
            <pre className="code-block">{`function ThemeSwitcher() {
  const themes = {
    light: {
      background: '#ffffff',
      text: '#333333',
      accent: '#007bff',
      border: '#e0e0e0'
    },
    dark: {
      background: '#2d3748',
      text: '#ffffff',
      accent: '#63b3ed',
      border: '#4a5568'
    },
    colorful: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      text: '#ffffff',
      accent: '#ffd89b',
      border: '#764ba2'
    }
  };

  const [currentTheme, setCurrentTheme] = useState('light');

  const cardStyle = {
    background: themes[currentTheme].background,
    color: themes[currentTheme].text,
    border: \`2px solid \${themes[currentTheme].border}\`,
    padding: '2rem',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    maxWidth: '400px',
    margin: '1rem auto'
  };

  return (
    <div className="theme-switcher">
      <h3>Theme Switcher Demo</h3>

      <div className="theme-buttons">
        {Object.keys(themes).map(themeName => (
          <button
            key={themeName}
            onClick={() => setCurrentTheme(themeName)}
            className={currentTheme === themeName ? 'active' : ''}
          >
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </button>
        ))}
      </div>

      <div style={cardStyle}>
        <h4 style={{ color: themes[currentTheme].accent }}>
          Sample Card Content
        </h4>
        <p>This card changes appearance based on the selected theme.</p>
        <p>Current theme: <strong>{currentTheme}</strong></p>
        <button
          style={{
            backgroundColor: themes[currentTheme].accent,
            color: themes[currentTheme].background,
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Sample Button
        </button>
      </div>
    </div>
  );
}`}</pre>
          </details>
        </div>
      </div>

      <div className="demo-area">
        <h4>🎯 Test Your Knowledge</h4>
        <QuickDemo />
      </div>
    </div>
  );
}

function ComponentExplorerSection() {
  return (
    <div className="content-section">
      <h3>📁 Component Explorer</h3>
      <p className="section-intro">
        Examine real React components we've created in the <code>src/components/</code> folder.
        Each component demonstrates key React concepts and professional development patterns.
      </p>

      <div className="explorer-intro">
        <div className="intro-grid">
          <div className="intro-item">
            <div className="intro-icon">🔍</div>
            <h4>Analyze Real Code</h4>
            <p>Examine actual component files with proper structure and styling</p>
          </div>
          <div className="intro-item">
            <div className="intro-icon">🎮</div>
            <h4>Interactive Examples</h4>
            <p>See components working live with different props and states</p>
          </div>
          <div className="intro-item">
            <div className="intro-icon">🎓</div>
            <h4>Class Discussion</h4>
            <p>Guided questions to deepen understanding of React patterns</p>
          </div>
        </div>
      </div>

      <div className="component-showcase">
        <ComponentExplorer />
      </div>

      <div className="learning-outcomes">
        <h4>🎯 What You'll Learn:</h4>
        <ul>
          <li><strong>Component Structure:</strong> How to organize component files and folders</li>
          <li><strong>Props Usage:</strong> How to pass and use props effectively</li>
          <li><strong>Conditional Rendering:</strong> Showing different content based on state</li>
          <li><strong>Event Handling:</strong> Responding to user interactions</li>
          <li><strong>Styling Patterns:</strong> CSS organization and conditional styling</li>
          <li><strong>Reusability:</strong> Creating flexible, reusable components</li>
        </ul>
      </div>
    </div>
  );
}

function ComponentExplorer() {
  const [activeComponent, setActiveComponent] = useState('StudentCard');

  const componentData = {
    StudentCard: {
      name: 'StudentCard',
      description: 'A reusable card component for displaying student information',
      filePath: 'src/components/StudentCard.jsx',
      props: ['name', 'major', 'year', 'gpa', 'isHonorsStudent'],
      features: ['Conditional styling', 'Avatar generation', 'Honor badges']
    },
    TodoItem: {
      name: 'TodoItem',
      description: 'An interactive todo list item with actions',
      filePath: 'src/components/TodoItem.jsx',
      props: ['todo', 'onToggle', 'onDelete', 'onEdit'],
      features: ['Checkbox interactions', 'Priority badges', 'Action buttons']
    },
    Button: {
      name: 'Button',
      description: 'A versatile button component with multiple variants',
      filePath: 'src/components/Button.jsx',
      props: ['children', 'variant', 'size', 'disabled', 'loading', 'onClick'],
      features: ['Multiple variants', 'Loading states', 'Flexible sizing']
    }
  };

  const renderLiveExample = () => {
    switch (activeComponent) {
      case 'StudentCard':
        return (
          <div className="live-examples">
            <h5>🎓 Live StudentCard Examples:</h5>
            <div className="student-cards-demo">
              <StudentCard
                name="Alice Johnson"
                major="Computer Science"
                year="3rd"
                gpa={3.8}
                isHonorsStudent={true}
              />
              <StudentCard
                name="Bob Martinez"
                major="Web Development"
                year="2nd"
                gpa={3.2}
                isHonorsStudent={false}
              />
            </div>
          </div>
        );
      case 'TodoItem':
        return (
          <div className="live-examples">
            <h5>📝 Live TodoItem Examples:</h5>
            <div className="todo-items-demo">
              <TodoItem
                todo={{
                  id: 1,
                  text: "Learn React Components",
                  completed: false,
                  priority: "high"
                }}
                onToggle={() => alert('Toggle called!')}
                onDelete={() => alert('Delete called!')}
                onEdit={() => alert('Edit called!')}
              />
              <TodoItem
                todo={{
                  id: 2,
                  text: "Build a React App",
                  completed: true,
                  priority: "medium"
                }}
                onToggle={() => alert('Toggle called!')}
                onDelete={() => alert('Delete called!')}
                onEdit={() => alert('Edit called!')}
              />
            </div>
          </div>
        );
      case 'Button':
        return (
          <div className="live-examples">
            <h5>🔘 Live Button Examples:</h5>
            <div className="button-demo">
              <Button variant="primary" onClick={() => alert('Primary clicked!')}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
                Secondary Button
              </Button>
              <Button variant="danger" size="small" onClick={() => alert('Danger clicked!')}>
                Delete
              </Button>
              <Button variant="success" loading={true}>
                Loading...
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="component-explorer">
      <div className="component-tabs">
        {Object.keys(componentData).map(componentName => (
          <button
            key={componentName}
            className={`component-tab ${activeComponent === componentName ? 'active' : ''}`}
            onClick={() => setActiveComponent(componentName)}
          >
            {componentName}
          </button>
        ))}
      </div>

      <div className="component-details">
        <div className="component-info">
          <h4>📂 {componentData[activeComponent].name}</h4>
          <p className="component-description">
            {componentData[activeComponent].description}
          </p>

          <div className="component-metadata">
            <div className="file-location">
              <strong>📁 File:</strong>
              <code>{componentData[activeComponent].filePath}</code>
            </div>

            <div className="props-list">
              <strong>🔧 Props:</strong>
              <div className="props-badges">
                {componentData[activeComponent].props.map(prop => (
                  <span key={prop} className="prop-badge">{prop}</span>
                ))}
              </div>
            </div>

            <div className="features-list">
              <strong>✨ Features:</strong>
              <ul>
                {componentData[activeComponent].features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {renderLiveExample()}

        <div className="analysis-questions">
          <h5>🤔 Class Discussion Questions:</h5>
          <ul className="questions-list">
            <li>How does this component make code more reusable?</li>
            <li>What props would you add to make it more flexible?</li>
            <li>How would you style this component differently?</li>
            <li>What other components could work with this one?</li>
            <li>How would you test this component?</li>
          </ul>
        </div>

        <div className="file-exploration">
          <h5>🔍 File Exploration Activity:</h5>
          <div className="exploration-steps">
            <p><strong>Let's examine this component together:</strong></p>
            <ol>
              <li>Open <code>{componentData[activeComponent].filePath}</code> in VS Code</li>
              <li>Identify the props being used</li>
              <li>Look at how JSX is structured</li>
              <li>Find conditional rendering examples</li>
              <li>Examine the CSS file (if it exists)</li>
              <li>Try modifying props in the live example above</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
    if (count + 1 === 5) {
      setMessage('🎉 You reached 5!');
    } else if (count + 1 === 10) {
      setMessage('🚀 Amazing! You reached 10!');
    } else if (count + 1 > 10) {
      setMessage('🌟 You\'re a clicking master!');
    }
  };

  return (
    <div className="demo-container">
      <div className="counter-display">
        <h4>Interactive Counter Demo</h4>
        <div className="counter-value">
          <span className="counter-label">Current Count:</span>
          <span className="counter-number">{count}</span>
        </div>
        <div className="counter-controls">
          <button className="counter-btn increment" onClick={handleIncrement}>
            + Increment
          </button>
          <button className="counter-btn decrement" onClick={() => setCount(Math.max(0, count - 1))}>
            - Decrement
          </button>
          <button className="counter-btn reset" onClick={() => {setCount(0); setMessage('');}}>
            🔄 Reset
          </button>
        </div>
        {message && <div className="counter-message">{message}</div>}
      </div>
    </div>
  );
}

export default App;