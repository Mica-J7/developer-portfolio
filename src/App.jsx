import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Realisations from './pages/Realisations.jsx';
import Tarifs from './pages/Tarifs.jsx';
import Contact from './pages/Contact.jsx';
import LegalNotice from './pages/LegalNotice.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // "instant" (not "auto") is required to override the site-wide scroll-smooth CSS on <html>
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-200">
        <ScrollToTop />
        <Navbar />
        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
