import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Sites sur mesure',
    description: 'Page unique, site vitrine, e-commerce ou application métier développée sur mesure.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4.5" width="18" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5h18" />
        <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Accompagnement mensuel',
    description: 'Maintenance, hébergement et suivi technique pour garder votre site sécurisé et disponible.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.5 5 6.5v5c0 4.5 3 8.2 7 9 4-.8 7-4.5 7-9v-5l-7-3Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4.5" />
      </svg>
    ),
  },
  {
    title: 'Audit & SEO',
    description: 'Audit complet de votre site et de votre visibilité, avec des recommandations priorisées.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="10.5" cy="10.5" r="6.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-4.3-4.3" />
      </svg>
    ),
  },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Mes prestations&nbsp;:
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="rounded-xl border border-slate-800 bg-linear-to-b from-slate-800/80 to-slate-950/40 p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal-400/20 bg-teal-400/10 text-teal-300">
                  <div className="h-5 w-5">{cat.icon}</div>
                </div>
                <h3 className="font-mono text-lg text-white">{cat.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        >
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-100 underline underline-offset-4 decoration-teal-700 hover:decoration-teal-300"
          >
            Voir tous mes tarifs
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}