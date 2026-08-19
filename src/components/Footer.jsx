import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ChevronUp } from 'lucide-react';

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
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-8 md:py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link to="/" className="relative inline-flex flex-col items-center px-4 py-2 shrink-0">
            <span className="sr-only">Michaël Jongeau — Accueil</span>
            <span aria-hidden="true" className="absolute left-0 top-0 h-2.5 w-2.5 border-t-2 border-l-2 border-sage-400" />
            <span aria-hidden="true" className="absolute right-0 top-0 h-2.5 w-2.5 border-t-2 border-r-2 border-sage-400" />
            <span aria-hidden="true" className="absolute left-0 bottom-0 h-2.5 w-2.5 border-b-2 border-l-2 border-sage-400" />
            <span aria-hidden="true" className="absolute right-0 bottom-0 h-2.5 w-2.5 border-b-2 border-r-2 border-sage-400" />
            <span aria-hidden="true" className="font-archivo text-xl font-extrabold leading-none tracking-tight text-sage-50">
              MJ
            </span>
            <span aria-hidden="true" className="mt-1 font-archivo text-[8px] font-semibold uppercase tracking-[0.22em] text-sage-400">
              Dév. Freelance
            </span>
          </Link>
          <div>
            <p className="text-stone-300">2026 - Michaël Jongeau, Développeur Web Freelance</p>
            <p className="mt-2 text-xs text-stone-500">
              SIRET : 99458742600010 ·{' '}
              <Link to="/mentions-legales" className="hover:text-white underline underline-offset-2">
                Mentions légales
              </Link>
            </p>
          </div>
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
    </motion.footer>
  );
}
