import { motion } from 'framer-motion';
import { techs } from '../Data/techs.jsx';
import TechCard from './TechCard.jsx';

export default function Skills() {
  return (
    <section id="techs" className="scroll-mt-18 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          id="techs-title"
          className="font-archivo text-3xl sm:text-4xl font-extrabold text-stone-900 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Ma stack technique
        </motion.h2>
        <motion.p
          className="mt-10 font-semibold text-stone-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          • Front-end&nbsp;:
        </motion.p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {techs
            .filter((t) => t.type === 'front')
            .map((t, idx) => (
              <TechCard key={t.id} tech={t} idx={idx} />
            ))}
        </div>

        <motion.p
          className="mt-8 font-semibold text-stone-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          • Back-end&nbsp;:
        </motion.p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {techs
            .filter((t) => t.type === 'back')
            .map((t, idx) => (
              <TechCard key={t.id} tech={t} idx={idx} />
            ))}
        </div>

        <motion.p
          className="mt-8 font-semibold text-stone-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          • Autres Outils&nbsp;:
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
