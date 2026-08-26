import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SiX } from '@icons-pack/react-simple-icons';
import { ChevronUp, Mail } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
  { to: '/mentions-legales', label: 'Mentions légales & Confidentialité' },
];

const socialLinks = [
  { href: 'mailto:jongeau.m@gmail.com', label: 'Email' },
  { href: 'https://github.com/Mica-J7', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/jongeau/', label: 'LinkedIn' },
  { href: 'https://x.com/Mica_J7', label: 'X' },
];

function SocialIcon({ label }) {
  const className = 'h-4.5 w-4.5';
  if (label === 'Email') return <Mail className={className} strokeWidth={1.8} aria-hidden="true" />;
  if (label === 'GitHub')
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.29-3.7-1.29-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.7.77 1.13 1.75 1.13 2.95 0 4.23-2.56 5.15-5 5.43.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
      </svg>
    );
  if (label === 'LinkedIn')
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9.75h3.96V21H3zM14.71 9.5c-2.06 0-2.99 1.13-3.51 1.92h-.07V9.75H7.29V21h3.97v-5.7c0-1.5.28-2.96 2.15-2.96 1.85 0 1.88 1.7 1.88 3.05V21h3.97v-6.3c0-3.02-.65-5.2-4.55-5.2z" />
      </svg>
    );
  return <SiX size={18} className={className} aria-hidden="true" />;
}

export default function Footer() {
  const onBackToTop = (e) => {
    e.preventDefault();
    // Use window scroll for consistent behavior across browsers
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      className="bg-stone-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="group relative inline-flex flex-col items-center px-4 py-2 shrink-0">
              <span className="sr-only">Michaël Jongeau — Accueil</span>
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-2.5 w-2.5 border-t-2 border-l-2 border-white transition-colors group-hover:border-sage-400"
              />
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-2.5 w-2.5 border-t-2 border-r-2 border-white transition-colors group-hover:border-sage-400"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-2.5 w-2.5 border-b-2 border-l-2 border-white transition-colors group-hover:border-sage-400"
              />
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-0 h-2.5 w-2.5 border-b-2 border-r-2 border-white transition-colors group-hover:border-sage-400"
              />
              <span
                aria-hidden="true"
                className="font-archivo text-xl font-extrabold leading-none tracking-tight text-white transition-colors group-hover:text-sage-400"
              >
                MJ
              </span>
              <span
                aria-hidden="true"
                className="mt-1 font-archivo text-[8px] font-semibold uppercase tracking-[0.22em] text-white transition-colors group-hover:text-sage-400"
              >
                Dév. Freelance
              </span>
            </Link>
            <p className="mt-5 text-sm text-stone-400">
              Développeur web freelance <br />
              Basé à Rochefort (17)
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">Navigation</h2>
            <ul className="mt-4 space-y-2 text-center sm:text-left">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-stone-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & social */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">Contact</h2>
            <a href="mailto:jongeau.m@gmail.com" className="mt-4 text-stone-300 hover:text-white">
              jongeau.m@gmail.com
            </a>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-stone-300 hover:border-sage-400 hover:text-white"
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs text-stone-500 sm:justify-start">
            <span>2026 - Michaël Jongeau, Développeur Web Freelance</span>
            <span>SIRET : 99458742600010</span>
            <Link to="/mentions-legales" className="hover:text-white underline underline-offset-2">
              Mentions légales &amp; Confidentialité
            </Link>
          </div>
          <motion.a
            href="#top"
            onClick={onBackToTop}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5
                  pl-3 pr-4 py-2 text-sm font-semibold text-stone-200 hover:text-white hover:bg-white/10 focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-sage-400/70"
            aria-label="Retour en haut de page"
          >
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span className="pb-0.5">Haut de page</span>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
