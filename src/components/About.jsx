import { motion } from 'framer-motion';
import SectionHeading, { fadeUp } from './SectionHeading.jsx';

const reasons = [
  {
    n: '01',
    title: 'Un code qui vous appartient',
    body: "Pas d'abonnement à vie à une plateforme. Votre site est développé sur mesure et vous en restez propriétaire, du premier au dernier fichier.",
  },
  {
    n: '02',
    title: 'Un seul interlocuteur',
    body: "Du cahier des charges à la mise en ligne, vous échangez directement avec la personne qui écrit le code. Pas d'intermédiaire, des échanges directs et efficaces.",
  },
  {
    n: '03',
    title: 'Pensé pour votre activité',
    body: 'Pas de thème générique recyclé. Chaque site est construit autour de vos besoins réels, de votre clientèle et de vos objectifs.',
  },
  {
    n: '04',
    title: 'Des prix clairs et accessibles',
    body: "Pas de grille tarifaire cachée derrière un formulaire de contact. Les prix sont annoncés dès la page d'accueil, et chaque devis détaille précisément ce qui est inclus.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                aside="Bonne question !"
                title={
                  <>
                    Pourquoi choisir un développeur <em className="text-coral-600 font-medium">freelance</em>&nbsp;?
                  </>
                }
                intro="Une agence, une plateforme clé en main ou un indépendant : voici ce qui change concrètement quand vous travaillez avec moi."
              />
            </div>
          </div>

          <ol className="lg:col-span-7 border-t border-ink/15">
            {reasons.map((r, idx) => (
              <motion.li
                key={r.title}
                className="group grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10 border-b border-ink/15 py-8"
                {...fadeUp(idx * 0.06)}
              >
                <span
                  className="w-14 sm:w-20 font-serif text-5xl sm:text-6xl font-semibold leading-none text-coral-500 transition-transform duration-300 group-hover:-rotate-6"
                  style={{ fontVariationSettings: '"SOFT" 100' }}
                >
                  {r.n}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ink">{r.title}</h3>
                  <p className="mt-2 text-ink-soft leading-relaxed">{r.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
