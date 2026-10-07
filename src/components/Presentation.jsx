import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

// Staggered fade+slide-up cascade on mount, from the greeting down to the postcard.
const CASCADE_DURATION = 0.5;
const cascade = (delay) => ({
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: CASCADE_DURATION, ease: 'easeOut', delay },
});

const promises = ['Devis gratuit', 'Un seul interlocuteur', 'Un code qui vous appartient', 'Des prix transparents'];

// Simplified line drawing of Rochefort's Pont Transbordeur, used as the postcard stamp illustration
function TransbordeurIllustration({ className }) {
  return (
    <svg viewBox="0 0 60 48" aria-hidden="true" className={className} fill="none" strokeLinejoin="round">
      <path d="M2 14.5 Q30 22 58 14.5" stroke="currentColor" strokeWidth="0.8" />
      <polygon points="7,40 15,40 12,6 10,6" fill="currentColor" />
      <polygon points="45,40 53,40 50,6 48,6" fill="currentColor" />
      <rect x="3" y="11" width="54" height="2.6" fill="currentColor" />
      <path d="M11 6 L3 11 M11 6 L19 11 M49 6 L41 11 M49 6 L57 11" stroke="currentColor" strokeWidth="0.8" />
      <path d="M30 13.6 V29" stroke="currentColor" strokeWidth="0.8" />
      <rect x="24.5" y="29" width="11" height="3.6" rx="0.6" fill="var(--color-coral-500)" />
      <path
        d="M0 40 q3.75 -2.5 7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 M0 44.5 q3.75 -2.5 7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0 t7.5 0"
        stroke="var(--color-ocean-400)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Postmark({ className }) {
  return (
    <svg viewBox="0 0 120 70" aria-hidden="true" className={className} fill="none">
      <defs>
        <path id="postmark-arc" d="M22 35 a20 20 0 1 1 40 0 a20 20 0 1 1 -40 0" />
      </defs>
      <circle cx="42" cy="35" r="27" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="42" cy="35" r="15" stroke="currentColor" strokeWidth="1" />
      <text fontSize="7.2" fontFamily="var(--font-archivo)" fontWeight="800" letterSpacing="1.4" fill="currentColor">
        <textPath href="#postmark-arc">ROCHEFORT · 17300 · CHARENTE-MARITIME ·</textPath>
      </text>
      <text
        x="42"
        y="38"
        textAnchor="middle"
        fontSize="8"
        fontFamily="var(--font-archivo)"
        fontWeight="800"
        fill="currentColor"
      >
        17
      </text>
      {[24, 32, 40, 48].map((y) => (
        <path key={y} d={`M72 ${y} q6 -4 12 0 t12 0 t12 0 t12 0`} stroke="currentColor" strokeWidth="1.4" />
      ))}
    </svg>
  );
}

// Postcard recipient: cycles through local trades so prospects picture their own business receiving it
const recipients = [
  'Votre Boulangerie',
  'Votre Gîte',
  'Votre Restaurant',
  'Votre Atelier',
  'Votre Cabinet',
  'Votre Domaine',
  'Votre Boutique',
  'Votre Garage',
  'Votre Agence',
  'Votre Bar',
  'Votre Librairie',
];

function Recipient() {
  const [idx, setIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % recipients.length), 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <p className="relative overflow-hidden border-b border-ink/25 pb-1">
      <span className="relative block h-[1.15em]">
        <AnimatePresence initial={false}>
          <motion.span
            key={recipients[idx]}
            className="absolute inset-x-0 top-0 whitespace-nowrap text-coral-600"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {recipients[idx]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}

function Postcard() {
  return (
    <motion.div
      className="relative w-full max-w-md rotate-[-2.5deg] rounded-sm border border-sand bg-white p-5 sm:p-6 shadow-[0_24px_50px_-20px_rgb(22_38_46/0.35)]
      transition-transform duration-500 ease-out hover:rotate-0"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      {/* Tape strip holding the card */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-3 bg-sun/70 shadow-sm"
      />
      <p className="text-center font-archivo text-[10px] font-extrabold uppercase tracking-[0.4em] text-ink-soft">
        Carte postale
      </p>

      <div className="mt-4 grid grid-cols-[1.25fr_1fr] gap-4 sm:gap-5">
        {/* Message side */}
        <div className="border-r border-dashed border-ink/20 pr-4 sm:pr-5 font-hand text-[1.35rem] sm:text-2xl leading-[1.15] text-ocean-700">
          <p>Bonjour !</p>
          <p className="mt-2">
            Un projet de site, une refonte, ou juste une question&nbsp;? Écrivez-moi, je vous réponds sous 24h.
          </p>
          <p className="mt-3">À très vite,</p>
          <p className="text-3xl text-coral-600 -rotate-3 origin-left">Michaël</p>
        </div>

        {/* Address side */}
        <div className="relative flex flex-col">
          <div className="self-end relative">
            <div
              className="relative bg-ocean-50 p-1.5 rotate-[4deg]"
              style={{
                // Perforated stamp edge: white dots punched along the border
                backgroundImage: 'radial-gradient(circle at center, #fff 2.4px, transparent 2.6px)',
                backgroundSize: '8px 8px',
                backgroundPosition: '-4px -4px',
              }}
            >
              <div className="bg-ocean-50 border border-ink/15 px-2 pt-2 pb-1 w-20 sm:w-24">
                <TransbordeurIllustration className="w-full text-ink" />
                <div className="mt-0.5 flex items-baseline justify-between font-archivo font-extrabold text-ink">
                  <span className="text-[8px] uppercase tracking-wider">Rochefort</span>
                  <span className="text-sm text-coral-600">17</span>
                </div>
              </div>
            </div>
            <Postmark className="pointer-events-none absolute -left-14 top-10 w-32 sm:w-36 text-ink/40 -rotate-12" />
          </div>

          <div className="mt-auto pt-5 space-y-3 font-hand text-lg sm:text-xl leading-none text-ink">
            <p className="text-base leading-none text-ink-soft">À l'attention de&nbsp;:</p>
            <Recipient />
            <p className="border-b border-ink/25 pb-1">Charente-Maritime</p>
            <p className="border-b border-ink/25 pb-1">France</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Presentation() {
  return (
    <section id="presentation" className="scroll-mt-19 relative overflow-hidden bg-paper-dots">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-14 pb-16 md:pt-20 md:pb-24 relative z-10">
        <div className="grid items-center gap-12 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p className="font-hand text-3xl text-ocean-500 -rotate-2 origin-left" {...cascade(0)}>
              Bienvenue !
            </motion.p>
            <motion.p
              className="mt-3 font-archivo text-xs font-extrabold tracking-[0.25em] text-ink-soft uppercase"
              {...cascade(0.06)}
            >
              Développeur web freelance
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              Charente-Maritime (17)
            </motion.p>
            <motion.h1
              id="presentation-title"
              className="font-serif mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.4rem] font-semibold leading-[1.02] tracking-tight text-ink text-balance"
              style={{ fontVariationSettings: '"SOFT" 100' }}
              {...cascade(0.12)}
            >
              Des sites web qui vous <span className="marker">ramènent des clients</span>,{' '}
              <em className="font-medium text-coral-600">faits main</em> à Rochefort.
            </motion.h1>

            <motion.p className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed" {...cascade(0.2)}>
              Sites vitrines, boutiques en ligne et outils sur mesure pour les indépendants et petites entreprises du
              17. Un seul interlocuteur, du premier échange à la mise en ligne.
            </motion.p>

            {/* Phones: links stacked, tarifs text indented to line up with the button label. sm+: one wrapping row. */}
            <motion.div
              className="relative mt-9 flex flex-col items-start gap-y-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8"
              {...cascade(0.28)}
            >
              <Link
                to="/contact"
                className="group order-1 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-coral-600 px-7 py-3.5
                text-base font-semibold text-white shadow-offset transition-all duration-150
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset-md
                active:translate-x-1 active:translate-y-1 active:shadow-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 focus-visible:ring-offset-2"
              >
                <span className="text-nowrap">Parlons de votre projet</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/tarifs"
                className="order-3 ml-6 sm:ml-0 text-base font-semibold text-ink underline decoration-coral-500 decoration-2 underline-offset-[6px]
                hover:decoration-[3px] hover:text-coral-700"
              >
                Voir mes prestations et tarifs
              </Link>

              {/* Handwritten aside pointing at the main CTA (decorative). Hidden on phones, where the links stack.
                  From sm to lg it sits in the flow on its own line so it pushes the postcard down instead of
                  overlapping it; on lg it floats under the button. */}
              <div
                aria-hidden="true"
                className="pointer-events-none order-4 hidden sm:flex basis-full items-start gap-1 -mt-3 pl-8
                lg:absolute lg:-bottom-16 lg:left-24 lg:mt-0 lg:basis-auto lg:pl-0"
              >
                <svg viewBox="0 0 50 40" className="h-10 w-12 text-ocean-500" fill="none">
                  <path
                    d="M45 36 C 30 36, 14 30, 8 8 M8 8 L3 17 M8 8 L15 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mt-6 font-hand text-2xl leading-none text-ocean-500 -rotate-3">
                  devis gratuit, réponse sous 24h&nbsp;!
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end px-2 sm:px-0">
            <Postcard />
          </div>
        </div>
      </div>

      {/* Promise strip: full-width ink ribbon that closes the dotted hero cleanly */}
      <motion.div className="relative z-10 bg-ink" {...cascade(0.45)}>
        <ul
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-5 sm:px-8 lg:px-12
          font-archivo text-sm font-semibold uppercase tracking-[0.14em] text-paper"
        >
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="text-sun">
                ✶
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
