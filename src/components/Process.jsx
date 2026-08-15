import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Échange initial',
    description: "On discute de votre projet, vos objectifs et vos contraintes, par visio, téléphone ou email.",
  },
  {
    step: '02',
    title: 'Devis & cadrage',
    description: "Vous recevez un devis détaillé avec le périmètre, le délai et le tarif, sans engagement.",
  },
  {
    step: '03',
    title: 'Développement',
    description: "Je développe votre projet avec des points d'étape réguliers pour valider l'avancement.",
  },
  {
    step: '04',
    title: 'Livraison & suivi',
    description: "Mise en ligne du projet, puis disponibilité pour la maintenance et les évolutions futures.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Déroulement d'un projet&nbsp;:
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              className="rounded-xl border border-slate-800 bg-linear-to-b from-slate-800/80 to-slate-950/40 p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl text-teal-400">{s.step}</span>
                <h3 className="font-mono text-lg text-white">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
