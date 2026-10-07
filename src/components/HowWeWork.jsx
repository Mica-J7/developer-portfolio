import { motion } from 'framer-motion';
import SectionHeading, { fadeUp } from './SectionHeading.jsx';

const steps = [
  {
    title: 'On en discute',
    body: 'Un premier rendez-vous gratuit, par téléphone ou en visio, pour comprendre votre activité et vos objectifs.',
  },
  {
    title: 'Devis clair',
    body: 'Un devis détaillé avec un planning de livraison. Vous savez ce que vous payez et quand vous êtes livré.',
  },
  {
    title: 'Développement',
    body: "Je construis votre site et vous montre l'avancement au fur et à mesure, pour qu'on valide chaque étape ensemble.",
  },
  {
    title: 'Mise en ligne',
    body: "Je mets votre site en ligne sur un hébergement à votre nom, et l'optimise pour qu'il apparaisse dans les résultats de recherche Google.",
  },
  {
    title: 'Support continu',
    body: "Maintenance, mises à jour, correctifs : je m'occupe du suivi technique pour que votre site fonctionne correctement dans le temps.",
  },
  {
    title: 'Évolution',
    body: 'Votre site évolue en même temps que votre activité. Ajout de fonctionnalités ou amélioration en fonction de vos besoins.',
  },
];

export default function HowWeWork({ bg = 'bg-sand' }) {
  return (
    <section className={`scroll-mt-18 ${bg}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <SectionHeading aside="Pas à pas" title="Déroulement d'un projet" />

        <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.li key={s.title} className="relative" {...fadeUp((idx % 3) * 0.1)}>
              {/* Dashed connector to the next step on the same row (desktop) */}
              {idx % 3 !== 2 && (
                <span
                  aria-hidden="true"
                  className="absolute left-16 -right-10 top-7 hidden border-t-2 border-dashed border-ink/25 lg:block"
                />
              )}
              <span
                className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-paper
                font-serif text-2xl font-semibold text-coral-600 shadow-offset-sm"
              >
                {idx + 1}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
