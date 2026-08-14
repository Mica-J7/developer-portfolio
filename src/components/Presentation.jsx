import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

// Presentation section with React typewriter replacing the inline <script>
export default function Presentation() {
  const [typedText, setTypedText] = useState('');
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const text = 'Michaël Jongeau';
    if (prefersReduced.current) {
      setTypedText(text);
      return;
    }
    let i = 0;
    const timeouts = [];

    const startTyping = () => {
      const type = () => {
        if (i <= text.length) {
          setTypedText(text.slice(0, i));
          const delay = i < 6 ? 180 : 60; // keep first few chars a bit slower
          timeouts.push(
            window.setTimeout(() => {
              i += 1;
              type();
            }, delay),
          );
        } else {
          // finished typing → small pause → clear → small pause → retype
          timeouts.push(
            window.setTimeout(() => {
              setTypedText('');
              i = 0;
              timeouts.push(window.setTimeout(type, 700));
            }, 10000),
          );
        }
      };
      type();
    };

    // small initial delay for a smoother entrance
    timeouts.push(window.setTimeout(startTyping, 300));

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <section id="presentation" className="scroll-mt-19 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 hidden h-96 w-96 rounded-full bg-teal-400/20 blur-3xl pointer-fine:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 hidden h-80 w-80 rounded-full bg-amber-400/10 blur-3xl pointer-fine:block"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-teal-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs text-teal-300">Disponible pour de nouvelles missions</span>
            </motion.div>
            <motion.p
              className="mt-4 text-lg text-teal-300/80 font-mono tracking-widest"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              Développeur Web Freelance
            </motion.p>
            <motion.h1
              id="presentation-title"
              className="mt-3 font-mono text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            >
              <span className="align-middle">{typedText}</span>
              {/* Framer Motion caret replacing CSS animate-caret */}
              <motion.span
                aria-hidden="true"
                className="align-middle inline-block text-teal-400"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                |
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-slate-300/90 leading-relaxed"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
            >
              Je conçois des sites vitrines et des applications web sur mesure pour indépendants et petites entreprises
              : du cahier des charges à la mise en ligne, avec un code propre, performant et sécurisé.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-8"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
            >
              <MotionLink
                to="/tarifs"
                className="inline-flex items-center justify-center w-auto gap-2 rounded-md bg-linear-to-r from-teal-400 to-cyan-400
                px-5 py-3 text-slate-900 font-medium shadow-glow focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-teal-300  hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="pl-1 md:pb-1 text-nowrap">Voir mes prestations</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </MotionLink>
              <MotionLink
                to="/contact"
                className="inline-flex items-center justify-center w-auto gap-2 rounded-md border border-slate-700/70 bg-slate-900/60
                px-5 py-3 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70
                hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="pl-1 md:pb-1 text-nowrap">Demander un devis</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8v13H3V3h13m5 0l-8 8" />
                </svg>
              </MotionLink>
            </motion.div>
          </div>

          <div className="lg:col-span-5 justify-self-center lg:justify-self-end">
            {/* Visiting card / visual */}
            <motion.div
              className="relative max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 pl-6 pr-6 pb-6 pt-5 shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-8 w-9 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-teal-400 to-cyan-400 text-slate-900 font-bold">
                    MJ
                  </div>
                  <div>
                    <h2 className="font-mono text-lg md:text-xl text-white">Développeur Web Full-Stack</h2>
                    <p className="mt-1 text-xs text-slate-400">Titre RNCP Développeur Web - OpenClassrooms</p>
                  </div>
                </div>
                <p className="text-center w-full text-sm text-slate-400">
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
                    className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-4 md:py-3"
                    initial={{ y: 8, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      ease: 'easeOut',
                      delay: 0.05 * idx,
                    }}
                  >
                    <dt className="text-xs text-slate-400">{stat.dt}</dt>
                    <dd className="mt-1 font-mono text-xs md:text-base xl:text-lg text-teal-300">{stat.dd}</dd>
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
