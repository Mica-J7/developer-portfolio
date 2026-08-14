import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      className="border-t border-teal-900/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-14 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-slate-400">2026 - Michaël Jongeau, Développeur Web Freelance</p>
          <p className="mt-2 text-xs text-slate-500">
            SIRET : 99458742600010 ·{' '}
            <Link to="/mentions-legales" className="hover:text-slate-300 underline underline-offset-2">
              Mentions légales
            </Link>
          </p>
        </div>
        <motion.a
          href="#top"
          onClick={onBackToTop}
          className="inline-flex items-center gap-2 rounded-md border border-teal-400/40 bg-teal-400/10
                pl-3 pr-4 py-2 text-sm text-teal-300 hover:text-teal-100 hover:bg-teal-400/15 focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-teal-400/70  hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
          aria-label="Retour en haut de page"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
          </svg>
          <span className="pb-0.5">Haut de page</span>
        </motion.a>
      </div>
    </motion.footer>
  );
}
