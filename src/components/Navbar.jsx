import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false); // dropdown "Projets"
  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu hamburger
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      // click outside the menu and on the button => close
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth scroll handler
  const onNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const desktopLinks = [
    { href: '#presentation', label: 'Présentation' },
    { href: '#techs', label: 'Compétences' },
  ];

  return (
    <motion.header
      id="top"
      className="sticky top-0 z-50 border-b border-teal-800/50 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1">
        <nav className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#contact"
            onClick={onNavClick}
            className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 
            focus-visible:ring-teal-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-9 items-center justify-center rounded-md bg-gradient-to-br 
              from-teal-400 to-cyan-400 text-slate-900 font-bold"
            >
              MJ
            </span>
            <span className="font-mono text-sm tracking-wide text-slate-200 group-hover:text-white transition-colors">
              Michaël Jongeau
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center">
            {desktopLinks.map((item) => (
              <li key={item.href} className="pb-1">
                <a
                  href={item.href}
                  onClick={onNavClick}
                  target={item.target}
                  rel={item.rel}
                  className="px-1 py-1 mx-3 my-2 text-sm text-slate-300 hover:text-white focus-visible:outline-none 
                  focus-visible:ring-2 focus-visible:ring-teal-400/70 rounded-md"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="pb-1">
              <button
                ref={buttonRef}
                onClick={() => setOpen((prev) => !prev)}
                className="px-1 py-1 mx-3 my-2 text-sm text-slate-300 focus-visible:outline-none hover:text-white
                  focus-visible:ring-2 focus-visible:ring-teal-400/70 rounded-md cursor-pointer"
              >
                Projets
              </button>

              <AnimatePresence>
                {open && (
                  <motion.ul
                    ref={dropdownRef}
                    initial={{ opacity: 0.8, clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                    exit={{ opacity: 0.8, clipPath: 'inset(0% 0% 100% 0%)' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="absolute top-full w-46 px-2 pt-1 pb-2 text-slate-300 group rounded-b-xl border border-slate-800 bg-slate-900/90"
                  >
                    <li>
                      <a
                        href="#projects-perso"
                        onClick={onNavClick}
                        className="scroll-mt-34 block px-2 py-1 text-sm hover:text-white"
                      >
                        Projets Personnels
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects-formation"
                        onClick={onNavClick}
                        className="scroll-mt-34 block px-2 py-1 text-sm hover:text-white"
                      >
                        Projets de Formation
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="pb-1">
              <a
                href="/CV-dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-1 mx-3 my-2 text-sm text-slate-300 focus-visible:outline-none hover:text-white
                  focus-visible:ring-2 focus-visible:ring-teal-400/70 rounded-md cursor-pointer"
              >
                Mon CV
              </a>
            </li>

            <li className="pl-2 ml-2">
              <a
                href="#contact"
                onClick={onNavClick}
                className="inline-flex items-center gap-2 rounded-md border border-teal-400/40 bg-teal-400/10
                pl-4 pr-3 py-2 text-sm text-teal-300 hover:text-teal-100 hover:bg-teal-400/15 focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-teal-400/70  hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
              >
                <span className="pb-0.5">Me contacter</span>
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
              </a>
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
                {desktopLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={onNavClick}
                      target={item.target}
                      rel={item.rel}
                      className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/70"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

                <li>
                  <button
                    ref={buttonRef}
                    onClick={() => setOpen((prev) => !prev)}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/70 cursor-pointer"
                  >
                    Projets
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.ul
                        ref={dropdownRef}
                        initial={{ opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="absolute top-20 right-full w-24 px-2 pt-1 pb-2 text-slate-300 group rounded-l-xl border border-slate-800 bg-slate-900/90"
                      >
                        <li>
                          <a
                            href="#projects-perso"
                            onClick={onNavClick}
                            className="scroll-mt-34 block px-2 py-1 text-sm hover:text-white"
                          >
                            Personnels
                          </a>
                        </li>
                        <li>
                          <a
                            href="#projects-formation"
                            onClick={onNavClick}
                            className="scroll-mt-34 block px-2 py-1 text-sm hover:text-white"
                          >
                            Formation
                          </a>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <a
                    href="/CV-dev.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/70"
                  >
                    Mon CV
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={onNavClick}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/70"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
