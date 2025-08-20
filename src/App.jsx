import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Presentation from './components/Presentation.jsx';

export default function App() {
  return (
    <div className="bg-emerald-950 text-slate-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-200">
      <Navbar />
      <main id="content">
        <Presentation />
      </main>
    </div>
  );
}
