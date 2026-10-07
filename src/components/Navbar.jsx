import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

const navLinkClass = ({ isActive }) =>
  `px-1 py-1 mx-4 my-2 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400/70 rounded-sm ${
    isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-base ${
    isActive ? 'text-ink font-semibold bg-sun/40' : 'text-ink-soft hover:bg-sand'
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
    <header id="top" className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-1">
        <nav className="flex h-16 items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="group rounded-sm focus:outline-none focus-visible:ring-2
            focus-visible:ring-ocean-400/70 focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
          >
            <span className="sr-only">Michaël Jongeau - Accueil</span>
            <span aria-hidden="true">
              <Logo size={42} />
            </span>
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center">
            {links.map((item) => (
              <li key={item.to} className="pb-1">
                <NavLink to={item.to} end={item.to === '/'} prefetch="viewport" className={navLinkClass}>
                  {/* Highlighter on an inner span: .marker's negative margins would otherwise cancel the link's own */}
                  {({ isActive }) => <span className={isActive ? 'marker' : undefined}>{item.label}</span>}
                </NavLink>
              </li>
            ))}

            <li className="ml-5">
              <NavLink
                to="/contact"
                prefetch="viewport"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink
                pl-4 pr-3 py-1.5 text-sm font-semibold text-paper transition-colors hover:bg-coral-600 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ocean-400/70"
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
              className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-paper p-2 cursor-pointer
              text-ink hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400/70"
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
                className="absolute right-0 mt-3 w-56 origin-top-right rounded-lg border-2 border-ink bg-paper p-2 shadow-offset"
              >
                {links.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      prefetch="viewport"
                      onClick={() => setIsMenuOpen(false)}
                      className={mobileNavLinkClass}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

                <li className="mt-2 border-t border-ink/15 pt-2">
                  <NavLink
                    to="/contact"
                    prefetch="viewport"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-ink
                    px-3 py-2 text-sm font-semibold text-paper hover:bg-coral-600"
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
