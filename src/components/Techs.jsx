import { motion } from 'framer-motion';
import { techs } from '../Data/techs.jsx';
import TechCard from './TechCard.jsx';

export default function Skills() {
  return (
    <section id="techs" className="scroll-mt-18 border-t border-teal-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          id="techs-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Mes compétences :
        </motion.h2>
        <motion.p
          className="mt-10 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          • Front-end :
        </motion.p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {techs
            .filter((t) => t.type === 'front')
            .map((t, idx) => (
              <TechCard key={t.id} tech={t} idx={idx} />
            ))}
        </div>

        <motion.p
          className="mt-8 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          • Back-end :
        </motion.p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {techs
            .filter((t) => t.type === 'back')
            .map((t, idx) => (
              <TechCard key={t.id} tech={t} idx={idx} />
            ))}
        </div>

        <motion.p
          className="mt-8 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          • Autres Outils :
        </motion.p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {techs
            .filter((t) => t.type === 'tools')
            .map((t, idx) => (
              <TechCard key={t.id} tech={t} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}
