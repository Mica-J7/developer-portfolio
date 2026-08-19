import { motion } from 'framer-motion';
import { MessagesSquare, FileText, Code2, Rocket, Headset, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: '1. On en discute',
    description:
      'Un premier rendez-vous gratuit par téléphone ou en visio pour comprendre votre activité, vos besoins et vos objectifs.',
    icon: MessagesSquare,
  },
  {
    title: '2. Devis clair',
    description:
      'Un devis détaillé avec un planning de livraison. Vous savez exactement ce que vous payez et quand vous êtes livré.',
    icon: FileText,
  },
  {
    title: '3. Développement',
    description:
      "Je crée ou refais votre site. Je vous montre l'avancement au fur et à mesure pour qu'on valide chaque étape ensemble.",
    icon: Code2,
  },
  {
    title: '4. Mise en ligne',
    description:
      "Je mets votre site en ligne. Je l'optimise pour qu'il apparaisse dans les résultats de recherches Google.",
    icon: Rocket,
  },
  {
    title: '5. Support continu',
    description:
      "Hébergement, maintenance, mises à jour : je m'occupe du suivi technique pour que votre site fonctionne correctement dans le temps.",
    icon: Headset,
  },
  {
    title: '6. Évolution',
    description:
      "Votre site évolue en même temps que votre activité. Je peux ajouter de nouvelles fonctionnalités ou améliorer l'existant en fonction de vos besoins.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-18 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-stone-900 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Déroulement d'un projet
        </motion.h2>

        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
            >
              <s.icon aria-hidden="true" className="h-9 w-9 text-sage-600" strokeWidth={1.8} />
              <h3 className="mt-4 text-xl font-bold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-base text-stone-600 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
