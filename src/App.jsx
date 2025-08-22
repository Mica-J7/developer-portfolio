import './App.css';
import Navbar from './components/Navbar.jsx';
import Presentation from './components/Presentation.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-200">
      <Navbar />
      <main id="content">
        <Presentation />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
