import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Sites sur mesure',
    description: 'Page unique, site vitrine, e-commerce ou application métier développée sur mesure.',
  },
  {
    title: 'Accompagnement mensuel',
    description: 'Maintenance, hébergement et suivi technique pour garder votre site sécurisé et disponible.',
  },
  {
    title: 'Audit & SEO',
    description: 'Audit complet de votre site et de votre visibilité, avec des recommandations priorisées.',
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
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Mes prestations&nbsp;:
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.08 }}
            >
              <h3 className="font-mono text-lg text-white">{cat.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
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
