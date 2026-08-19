import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinkClass = ({ isActive }) =>
  `px-1 py-1 mx-5 my-2 text-base font-semibold border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400/70 rounded-md ${
    isActive ? 'text-sage-600 border-sage-600' : 'text-stone-600 border-transparent hover:text-stone-900'
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-base ${
    isActive ? 'text-sage-600 font-semibold bg-sage-50' : 'text-stone-700 hover:bg-stone-100'
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
      className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-1">
        <nav className="flex h-16 items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="group relative inline-flex flex-col items-center px-4 py-2 focus:outline-none focus-visible:ring-2
            focus-visible:ring-sage-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 rounded"
          >
            <span className="sr-only">Michaël Jongeau — Accueil</span>
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-2.5 w-2.5 border-t-2 border-l-2 border-sage-600 transition-colors group-hover:border-sage-700"
            />
            <span
              aria-hidden="true"
              className="absolute right-0 top-0 h-2.5 w-2.5 border-t-2 border-r-2 border-sage-600 transition-colors group-hover:border-sage-700"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-2.5 w-2.5 border-b-2 border-l-2 border-sage-600 transition-colors group-hover:border-sage-700"
            />
            <span
              aria-hidden="true"
              className="absolute right-0 bottom-0 h-2.5 w-2.5 border-b-2 border-r-2 border-sage-600 transition-colors group-hover:border-sage-700"
            />
            <span
              aria-hidden="true"
              className="font-archivo text-xl font-extrabold leading-none tracking-tight text-sage-600 transition-colors group-hover:text-sage-700"
            >
              MJ
            </span>
            <span
              aria-hidden="true"
              className="mt-1 font-archivo text-[8px] font-semibold uppercase tracking-[0.22em] text-sage-600 transition-colors group-hover:text-sage-700"
            >
              Dév. Freelance
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

            <li className="ml-5">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-sage-600 shadow-soft
                pl-4 pr-3 py-2 text-sm font-semibold text-white hover:bg-sage-700 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-sage-400/70"
              >
                <span className="pb-0.5">Demander un devis</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
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
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white p-2 cursor-pointer
              text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400/70"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
            {isMenuOpen && (
              <ul
                id="mobile-menu"
                ref={menuRef}
                className="absolute right-0 mt-3 w-56 origin-top-right rounded-lg border border-stone-200 bg-white p-2
                shadow-xl shadow-stone-900/10"
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

                <li className="mt-2 border-t border-stone-200 pt-2">
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-md bg-sage-600 shadow-soft
                    px-3 py-2 text-sm font-semibold text-white hover:bg-sage-700"
                  >
                    <span className="pb-0.5">Demander un devis</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
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
