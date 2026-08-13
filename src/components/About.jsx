import { motion } from 'framer-motion';

const points = [
  {
    title: 'Communication claire',
    description: "Des points d'étape réguliers, des réponses rapides, aucune boîte noire sur l'avancement.",
    titleClass: 'text-teal-300',
  },
  {
    title: 'Code propre & maintenable',
    description: "Un code testé et documenté, pensé pour être repris et fait évoluer facilement dans le temps.",
    titleClass: 'text-amber-300',
  },
  {
    title: 'Délais respectés',
    description: "Un périmètre et un planning validés dès le devis, pour éviter les mauvaises surprises.",
    titleClass: 'text-teal-300',
  },
  {
    title: 'Accompagnement après livraison',
    description: 'Disponible pour la maintenance, les corrections et les évolutions une fois le projet en ligne.',
    titleClass: 'text-amber-300',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.08 }}
            >
              <h3 className={`font-mono text-sm text-center ${point.titleClass}`}>{point.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed text-center">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
