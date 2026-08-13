import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `px-1 py-1 mx-3 my-2 text-sm border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 rounded-md ${
    isActive ? 'text-teal-300 font-medium border-teal-400' : 'text-slate-300 border-transparent hover:text-white'
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-sm ${
    isActive ? 'text-teal-300 font-medium bg-teal-400/10' : 'text-slate-200 hover:bg-slate-800/70'
  }`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu hamburger
  const menuRef = useRef(null); // ref pour le menu principal
  const hamburgerRef = useRef(null); // ref pour le bouton hamburger

  // Fermeture au clic en dehors pour le menu hamburger
  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => document.removeEventListener('mousedown', handleClickOutsideMenu);
  }, [isMenuOpen]);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/tarifs', label: 'Tarifs' },
    { to: '/realisations', label: 'Réalisations' },
  ];

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-teal-800/50 bg-slate-950/70 backdrop-blur supports-backdrop-filter:bg-slate-950/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1">
        <nav className="flex h-16 items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2
            focus-visible:ring-teal-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-9 items-center justify-center rounded-md bg-linear-to-br
              from-teal-400 to-cyan-400 text-slate-900 font-bold"
            >
              MJ
            </span>
            <span className="font-mono text-sm tracking-wide text-slate-200 group-hover:text-white transition-colors">
              Michaël Jongeau
            </span>
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center">
            {links.map((item) => (
              <li key={item.to} className="pb-1">
                <NavLink to={item.to} end={item.to === '/'} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="pl-2 ml-2">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-teal-400/40 bg-teal-400/10
                pl-4 pr-3 py-2 text-sm text-teal-300 hover:text-teal-100 hover:bg-teal-400/15 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-teal-400/70  hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
              >
                <span className="pb-0.5">Demander un devis</span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </NavLink>
            </li>
          </ul>

          {/* Mobile nav (React state controlled) */}
          <div className="md:hidden relative">
            <button
              type="button"
              aria-label="Ouvrir le menu déroulant"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              ref={hamburgerRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md border border-slate-700/60 bg-slate-900/60 p-2 cursor-pointer
              text-slate-200 hover:text-white hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
            >
              {isMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <ul
                id="mobile-menu"
                ref={menuRef}
                className="absolute right-0 mt-3 w-56 origin-top-right rounded-lg border border-slate-800 bg-slate-900/95 p-2
                shadow-xl shadow-black/30"
              >
                {links.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setIsMenuOpen(false)}
                      className={mobileNavLinkClass}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/70"
                  >
                    Demander un devis
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
