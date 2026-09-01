import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, FileText } from 'lucide-react';

// Staggered fade+slide-up cascade on mount, from the badge down to the visiting card.
const CASCADE_DURATION = 0.5;
const cascade = (delay) => ({
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: CASCADE_DURATION, ease: 'easeOut', delay },
});

export default function Presentation() {
  return (
    <section id="presentation" className="scroll-mt-19 relative overflow-hidden bg-transparent">
      {/* Decorative icon: static, large, pale sage, behind content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-16 md:pt-20 md:pb-20 relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
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
            <motion.p
              className="mt-4 font-mono text-sm tracking-widest text-terracotta-600 uppercase"
              {...cascade(0.08)}
            >
              Développeur web freelance
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              Rochefort (17)
            </motion.p>
            <motion.h1
              id="presentation-title"
              className="font-archivo mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[#2d343b] text-balance"
              {...cascade(0.16)}
            >
              Création de sites web pour les professionnels
            </motion.h1>

            <motion.p className="mt-10 max-w-2xl text-lg text-stone-600 leading-relaxed" {...cascade(0.24)}>
              Sites vitrines, boutiques en ligne et applications sur mesure pour les indépendants et petites
              entreprises. Un interlocuteur unique à chaque étape, du cahier des charges à la mise en ligne.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10"
              {...cascade(0.48)}
            >
              <motion.span
                className="will-change-transform inline-block"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.91 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <Link
                  to="/tarifs"
                  className="flex w-64 items-center justify-center gap-2 rounded-md bg-sage-600
                  px-6 py-3.5 text-base text-white font-semibold shadow-soft focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-sage-400 hover:bg-sage-700"
                >
                  <span className="text-nowrap">Voir mes prestations</span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
              </motion.span>
              <motion.span
                className="will-change-transform inline-block rounded-md"
                whileTap={{
                  scale: 0.91,
                  boxShadow: '0px 8px 20px -6px rgba(85, 118, 74, 0.35), 0px 2px 8px -2px rgba(28, 25, 23, 0.08)',
                }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <Link
                  to="/contact"
                  className="flex w-64 items-center justify-center gap-2 rounded-md border-2 border-sage-600 bg-white
                  px-6 py-3 text-base text-sage-600 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400
                  hover:bg-sage-600 hover:text-white"
                >
                  <span className="text-nowrap">Demander un devis</span>
                  <FileText aria-hidden="true" className="h-5 w-5" />
                </Link>
              </motion.span>
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
                    <h2 className="text-lg md:text-xl font-bold text-[#2d343b]">Développeur Web Full-Stack</h2>
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
