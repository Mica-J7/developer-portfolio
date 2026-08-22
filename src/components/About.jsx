import { motion } from 'framer-motion';
import { Lock, UserRound, Target, Tag } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const reasons = [
  {
    n: '01',
    icon: Lock,
    title: 'Un code qui vous appartient',
    body: "Pas d'abonnement à vie à une plateforme. Votre site est développé sur mesure et vous en restez propriétaire, du premier au dernier fichier.",
  },
  {
    n: '02',
    icon: UserRound,
    title: 'Un seul interlocuteur',
    body: "Du cahier des charges à la mise en ligne, vous échangez directement avec la personne qui écrit le code. Pas d'intermédiaire, des échanges directs et efficaces.",
  },
  {
    n: '03',
    icon: Target,
    title: 'Pensé pour votre activité',
    body: 'Pas de thème générique recyclé. Chaque site est construit autour de vos besoins réels, de votre clientèle et de vos objectifs.',
  },
  {
    n: '04',
    icon: Tag,
    title: 'Des prix clairs et accessibles',
    body: "Pas de grille tarifaire cachée derrière un formulaire de contact. Les prix sont annoncés dès la page d'accueil, et chaque devis détaille précisément ce qui est inclus.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <motion.h2
          className="font-archivo text-3xl sm:text-4xl font-extrabold text-stone-900 text-center text-balance"
          {...fadeUp(0)}
        >
          Pourquoi choisir un développeur Freelance&nbsp;?
        </motion.h2>
        <div className="mt-12">
          {/* Mobile only: single stacked column, each reason set off as a card with a terracotta accent */}
          <div className="flex flex-col gap-6 sm:hidden">
            {reasons.map((r, idx) => (
              <motion.div
                key={r.title}
                className="rounded-xl border border-stone-200 border-b-4 border-b-terracotta-500 bg-white p-6 shadow-md"
                {...fadeUp(idx * 0.08)}
              >
                <span className="font-archivo text-sm font-extrabold text-terracotta-500">{r.n}</span>
                <div className="mt-3 flex items-center gap-3">
                  <r.icon aria-hidden="true" strokeWidth={1.8} className="h-6 w-6 text-sage-600" />
                  <h3 className="text-xl font-bold text-stone-900">{r.title}</h3>
                </div>
                <p className="mt-3 text-stone-600 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Tablet/desktop: plain symmetric 2x2 grid, no offset */}
          <div className="mx-auto hidden max-w-4xl grid-cols-2 gap-x-16 gap-y-14 sm:grid">
            {reasons.map((r, idx) => (
              <motion.div key={r.title} {...fadeUp(idx * 0.08)}>
                <span className="font-archivo text-sm font-extrabold text-terracotta-500">{r.n}</span>
                <div className="mt-3 flex items-center gap-3">
                  <r.icon aria-hidden="true" strokeWidth={1.8} className="h-6 w-6 text-sage-600" />
                  <h3 className="text-xl font-bold text-stone-900">{r.title}</h3>
                </div>
                <p className="mt-3 text-stone-600 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
