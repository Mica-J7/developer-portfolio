import { motion } from 'framer-motion';
import { MessageCircle, Code2, Clock, Headset } from 'lucide-react';

const points = [
  {
    title: 'Une communication claire',
    description: "Des points d'étape réguliers, des réponses rapides, aucune boîte noire sur l'avancement.",
    icon: <MessageCircle aria-hidden="true" strokeWidth={1.8} className="h-10 w-10" />,
  },
  {
    title: 'Un code maintenable',
    description: 'Un code testé et documenté, facile à reprendre et à faire évoluer dans le temps.',
    icon: <Code2 aria-hidden="true" strokeWidth={1.8} className="h-10 w-10" />,
  },
  {
    title: 'Des délais respectés',
    description: 'Un périmètre et un planning validés dès le devis, pour éviter les mauvaises surprises.',
    icon: <Clock aria-hidden="true" strokeWidth={1.8} className="h-10 w-10" />,
  },
  {
    title: 'Un suivi de projet',
    description: 'Disponible pour la maintenance, les corrections et les évolutions une fois le projet en ligne.',
    icon: <Headset aria-hidden="true" strokeWidth={1.8} className="h-10 w-10" />,
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-14 md:py-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-stone-900 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Ma façon de travailler
        </motion.h2>
        <motion.p
          className="mt-3 text-stone-600 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          Des principes simples, appliqués à chaque projet.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-md text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-sage-600">{point.icon}</div>
                <h3 className="text-base font-bold text-stone-900 whitespace-nowrap">{point.title}</h3>
              </div>
              <p className="mt-2 text-base text-stone-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
