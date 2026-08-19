import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, FileText } from 'lucide-react';

const MotionLink = motion.create(Link);

// Staggered fade+slide-up cascade on mount, from the badge down to the visiting card.
const CASCADE_DURATION = 0.5;
const cascade = (delay) => ({
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: CASCADE_DURATION, ease: 'easeOut', delay },
});

export default function Presentation() {
  return (
    <section id="presentation" className="scroll-mt-19 relative overflow-hidden bg-sage-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 md:pt-20 md:pb-24 relative">
        {/* Top: badge, name, full-width headline */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-sage-50 px-3 py-1"
          {...cascade(0)}
        >
          <motion.span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-sage-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-xs text-stone-700">Disponible pour de nouvelles missions</span>
        </motion.div>
        <motion.p className="mt-4 text-sm text-stone-500 font-mono tracking-widest" {...cascade(0.08)}>
          Michaël Jongeau · Développeur Web Freelance
        </motion.p>
        <motion.h1
          id="presentation-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-stone-900"
          {...cascade(0.16)}
        >
          Un site professionnel qui vous rend visible auprès de vos clients.
        </motion.h1>

        {/* Below: intro paragraph + CTAs on the left, visiting card on the right */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p className="max-w-2xl text-lg text-stone-600 leading-relaxed" {...cascade(0.24)}>
              Je conçois des sites et des applications web sur mesure pour indépendants et petites entreprises. En tant
              que développeur freelance, vous bénéficiez d'une relation directe avec la personne qui réalise votre
              projet. Flexibilité, réactivité, tarifs transparents et accessibles.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-8"
              {...cascade(0.32)}
            >
              <MotionLink
                to="/tarifs"
                className="inline-flex w-64 items-center justify-center gap-2 rounded-md bg-sage-600
                px-6 py-3.5 text-base text-white font-semibold shadow-soft focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-sage-400 hover:bg-sage-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-nowrap">Voir mes prestations</span>
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </MotionLink>
              <MotionLink
                to="/contact"
                className="inline-flex w-64 items-center justify-center gap-2 rounded-md border border-stone-300 bg-white
                px-6 py-3.5 text-base text-stone-700 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400
                hover:bg-stone-50 hover:border-stone-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-nowrap">Demander un devis</span>
                <FileText aria-hidden="true" className="h-5 w-5" />
              </MotionLink>
            </motion.div>
          </div>

          <div className="lg:col-span-5 justify-self-center lg:justify-self-end">
            {/* Visiting card / visual */}
            <motion.div
              className="relative max-w-md rounded-2xl border border-stone-200 bg-white pl-6 pr-6 pb-6 pt-5 shadow-lg"
              {...cascade(0.4)}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-8 w-9 shrink-0 items-center justify-center rounded-md bg-sage-600 text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900">Développeur Web Full-Stack</h2>
                    <p className="mt-1 text-xs text-stone-500">Titre RNCP Développeur Web - OpenClassrooms</p>
                  </div>
                </div>
                <p className="text-center w-full text-sm text-stone-500">
                  Clean code, API REST, responsive UI, sites sécurisés.
                </p>
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { dt: 'Réponse', dd: '24h' },
                  { dt: 'Devis', dd: 'Gratuit' },
                  { dt: 'Localisation', dd: 'Rochefort' },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.dt}
                    className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-4 md:py-3"
                    initial={{ y: 8, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      ease: 'easeOut',
                      delay: 0.05 * idx,
                    }}
                  >
                    <dt className="text-xs text-stone-500">{stat.dt}</dt>
                    <dd className="mt-1 font-mono text-xs md:text-base xl:text-lg text-stone-900">{stat.dd}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
