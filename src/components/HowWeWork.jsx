import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessagesSquare, FileText, Code2, Rocket, Headset, TrendingUp, ChevronRight } from 'lucide-react';

// Framer Motion has no responsive variants, so the left-to-right reveal (desktop, following
// the arrows) vs. the classic bottom-up reveal (mobile, matching the rest of the site) needs
// this to pick which animation object to spread onto each card.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const growRight = {
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' },
  style: { transformOrigin: 'left' },
};

const processSteps = [
  {
    n: '01',
    icon: MessagesSquare,
    title: 'On en discute',
    body: 'Un premier rendez-vous gratuit, par téléphone ou en visio, pour comprendre votre activité et vos objectifs.',
  },
  {
    n: '02',
    icon: FileText,
    title: 'Devis clair',
    body: 'Un devis détaillé avec un planning de livraison. Vous savez ce que vous payez et quand vous êtes livré.',
  },
  {
    n: '03',
    icon: Code2,
    title: 'Développement',
    body: "Je construis votre site et vous montre l'avancement au fur et à mesure, pour qu'on valide chaque étape ensemble.",
  },
];

const colClasses = ['lg:col-start-1', 'lg:col-start-2', 'lg:col-start-3'];

const followUpSteps = [
  {
    n: '04',
    icon: Rocket,
    title: 'Mise en ligne',
    body: "Je mets votre site en ligne et l'optimise pour qu'il apparaisse dans les résultats de recherche Google.",
  },
  {
    n: '05',
    icon: Headset,
    title: 'Support continu',
    body: "Hébergement, maintenance, mises à jour : je m'occupe du suivi technique pour que votre site fonctionne correctement dans le temps.",
  },
  {
    n: '06',
    icon: TrendingUp,
    title: 'Évolution',
    body: 'Votre site évolue en même temps que votre activité. Ajout de fonctionnalités ou amélioration en fonction de vos besoins.',
  },
];

export default function HowWeWork({ bg = 'bg-stone-50' }) {
  const isDesktop = useIsDesktop();
  const cardAnim = (idx) => (isDesktop ? fadeRight(idx * 0.15) : fadeUp(idx * 0.15));

  return (
    <section className={`scroll-mt-18 ${bg}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <motion.h2 className="font-archivo text-3xl sm:text-4xl font-extrabold text-[#2d343b] text-balance" {...fadeUp(0)}>
          Déroulement d'un projet
        </motion.h2>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            aria-hidden="true"
            className="relative hidden h-px self-start bg-terracotta-400 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-6 lg:block"
            {...growRight}
          >
            <ChevronRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="absolute -right-3.5 top-1/2 h-10 w-10 -translate-y-1/2 text-sage-500"
            />
          </motion.div>
          {processSteps.map((s, idx) => (
            <motion.div
              key={`${s.title}-${isDesktop}`}
              className={`relative flex items-center gap-4 sm:block lg:row-start-1 ${colClasses[idx]}`}
              {...cardAnim(idx)}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 z-20 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-500 lg:top-6 lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute left-6 top-1/2 block w-px bg-terracotta-400 sm:hidden"
                style={{ height: 'calc(100% + 3.5rem)' }}
              />
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sage-300 bg-white sm:mx-auto">
                <s.icon aria-hidden="true" strokeWidth={1.8} className="h-5 w-5 text-sage-600" />
              </div>
              <div className="sm:contents">
                <span className="font-archivo block text-sm font-extrabold text-terracotta-500 sm:mt-4">{s.n}</span>
                <h3 className="mt-1 text-lg font-bold text-[#2d343b]">{s.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            aria-hidden="true"
            className="relative hidden h-px self-start bg-terracotta-400 lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:mt-6 lg:block"
            {...growRight}
          >
            <ChevronRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="absolute -right-3.5 top-1/2 h-10 w-10 -translate-y-1/2 text-sage-500"
            />
          </motion.div>
          {followUpSteps.map((s, idx) => (
            <motion.div
              key={`${s.title}-${isDesktop}`}
              className={`relative flex items-center gap-4 sm:block lg:row-start-2 ${colClasses[idx]}`}
              {...cardAnim(idx)}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 z-20 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-500 lg:top-6 lg:block"
              />
              {idx < followUpSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-1/2 block w-px bg-terracotta-400 sm:hidden"
                  style={{ height: 'calc(100% + 3.5rem)' }}
                />
              )}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sage-300 bg-white sm:mx-auto">
                <s.icon aria-hidden="true" strokeWidth={1.8} className="h-5 w-5 text-sage-600" />
              </div>
              <div className="sm:contents">
                <span className="font-archivo block text-sm font-extrabold text-terracotta-500 sm:mt-4">{s.n}</span>
                <h3 className="mt-1 text-lg font-bold text-[#2d343b]">{s.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
