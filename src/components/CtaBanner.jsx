import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CtaBanner({
  title = 'Un projet en tête ?',
  description = "Discutons-en, le premier échange est gratuit et sans engagement.",
  tone = 'base',
}) {
  return (
    <section className={tone === 'alt' ? 'bg-slate-900/70' : undefined}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16 text-center">
        <motion.h2
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-3 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-linear-to-r from-teal-400 to-cyan-400
            px-5 py-3 text-slate-900 font-medium shadow-glow focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-teal-300 hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
          >
            <span className="pl-1 md:pb-1 text-nowrap">Demander un devis</span>
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
