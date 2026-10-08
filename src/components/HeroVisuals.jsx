import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import projects from '../Data/projects.json';
import { services } from '../Data/services.js';
import { LogoMark } from './Logo.jsx';

// Paper objects shown on the right of the inner-page heroes (lg+ only), echoing the home postcard.

const enter = (delay = 0.3) => ({
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const paperShadow = 'shadow-[0_24px_50px_-20px_rgb(22_38_46/0.35)]';

// Sand-colored sheet tilted the other way behind a hero object, like a small stack on a desk
export function BackingCard({ className = 'rounded-xl', rotate = 'rotate-6' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${rotate} ${className} border border-sand bg-sand ${paperShadow}`}
    />
  );
}

// Tarifs: a bistro chalkboard ("À la carte"), echoing the home page's "La carte" menu.
// Prices come straight from services.js so the board stays in sync with the pricing cards.
const boardItems = [
  { id: 1, label: 'Page unique' },
  { id: 2, label: 'Site vitrine' },
  { id: 3, label: 'Site e-commerce' },
  { id: 5, label: 'Maintenance' },
];

// Slightly blurred, faded text-shadow gives the strokes a chalky look
const chalk = { textShadow: '0 0 1px rgb(251 246 236 / 0.6), 0 0 6px rgb(251 246 236 / 0.15)' };

export function Chalkboard() {
  const rows = boardItems.map(({ id, label }) => {
    const s = services.find((x) => x.id === id);
    const price = s?.priceFrom ? `dès ${s.priceFrom} €${s.billing === 'monthly' ? '/mois' : ''}` : 'sur devis';
    return { id, label, price };
  });

  return (
    <motion.div className="relative w-full max-w-92" {...enter()}>
      <BackingCard className="rounded-lg" rotate="rotate-4" />
      <div
        aria-hidden="true"
        className={`relative w-full -rotate-2 rounded-lg border-12 border-[#8a5a33] p-5 pb-5 sm:p-7 sm:pb-6
        transition-transform duration-500 ease-out hover:rotate-0`}
        style={{
          // Slate with faint eraser smudges
          backgroundColor: '#24323a',
          backgroundImage:
            'radial-gradient(ellipse at 20% 30%, rgb(255 255 255 / 0.06), transparent 55%), radial-gradient(ellipse at 80% 75%, rgb(255 255 255 / 0.05), transparent 50%)',
          boxShadow:
            'inset 0 0 0 2px #6e4526, inset 0 0 30px rgb(0 0 0 / 0.35), 0 36px 60px -18px rgb(22 38 46 / 0.6), 0 12px 20px -10px rgb(22 38 46 / 0.4)',
        }}
      >
        <p className="text-center font-hand text-[2.1rem] leading-none text-paper" style={chalk}>
          À la carte
        </p>
        <svg viewBox="0 0 200 8" className="mx-auto mt-1 h-2 w-40 text-sun/80" fill="none">
          <path d="M2 5 Q50 1 100 4 T198 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <ul className="mt-6 space-y-3.5 font-hand text-xl sm:text-2xl leading-none text-paper/90" style={chalk}>
          {rows.map((r) => (
            <li key={r.id} className="flex items-baseline gap-2">
              <span>{r.label}</span>
              <span className="flex-1 border-b-2 border-dotted border-paper/30" />
              <span className="text-sun">{r.price}</span>
            </li>
          ))}
        </ul>

        <p className="mt-7 text-center font-hand text-2xl leading-none text-coral-400 -rotate-2" style={chalk}>
          Devis offert !
        </p>
      </div>
    </motion.div>
  );
}

// Realisations: a fan of polaroids with real project screenshots.
// Hovering a card makes it slide out of the stack, switch layer while it's clear of the others, then slide
// back in straightened; leaving reverses it. The layer change never happens while cards overlap, so a back
// card doesn't look like it passes through the front one.
const poses = [
  { left: 0, top: 70, rotate: -6, z: 1, out: { x: -110, y: 10 } },
  { left: 280, top: 84, rotate: 6, z: 2, out: { x: 110, y: 10 } },
  { left: 140, top: 0, rotate: -1, z: 3, out: { x: 0, y: -40 } },
];
const SHUFFLE_S = 0.6;

export function Polaroids() {
  // `active` drives the slide animation right away; `raised` (the layer) follows at mid-course. Framer
  // Motion applies zIndex instantly, so the step is timed by hand instead of animated.
  const [active, setActive] = useState(null);
  const [raised, setRaised] = useState(null);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const hover = (id) => {
    setActive(id);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setRaised(id), (SHUFFLE_S * 1000) / 2);
  };
  const unhover = (id) => {
    setActive((cur) => (cur === id ? null : cur));
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setRaised((cur) => (cur === id ? null : cur)), (SHUFFLE_S * 1000) / 2);
  };

  const shots = projects.projects
    .filter((p) => p.type === 'perso')
    .slice(0, 3)
    .map((p, i) => ({
      id: p.id,
      image: p.image,
      title: p.title.replace(/\s*\([^)]*\)\s*$/, ''),
      pose: poses[i],
    }));

  return (
    <div aria-hidden="true" className="relative h-84 w-126 shrink-0 origin-center lg:scale-[0.8] xl:scale-100">
      {shots.map((s, i) => {
        const { rotate, z, out } = s.pose;
        const variants = {
          rest: { x: [0, out.x, 0], y: [0, out.y, 0], rotate: [0, rotate, rotate] },
          front: { x: [0, out.x, 0], y: [0, out.y, 0], rotate: [rotate, rotate, 0] },
        };
        return (
          // Static hit area: it never moves, so the card sliding out from under the cursor can't end the hover
          <div
            key={s.id}
            className="absolute w-56"
            style={{ left: s.pose.left, top: s.pose.top, zIndex: raised === s.id ? 10 : z }}
            onMouseEnter={() => hover(s.id)}
            onMouseLeave={() => unhover(s.id)}
          >
            <motion.figure
              style={{ rotate }}
              variants={variants}
              initial={false}
              animate={active === s.id ? 'front' : 'rest'}
              transition={{ duration: SHUFFLE_S, ease: 'easeInOut', times: [0, 0.5, 1] }}
            >
              {/* Innermost wrapper carries the page-load entrance */}
              <motion.div className={`bg-white p-3 pb-2 ${paperShadow}`} {...enter(0.3 + i * 0.12)}>
                <img src={s.image} alt="" className="aspect-4/3 w-full object-cover object-top border border-ink/10" />
                <figcaption className="mt-2 truncate text-center font-hand text-2xl leading-tight text-ink">
                  {s.title}
                </figcaption>
              </motion.div>
            </motion.figure>
          </div>
        );
      })}
    </div>
  );
}

// Contact: a business card with real, clickable contact details
export function BusinessCard() {
  return (
    <motion.div className="relative w-full max-w-88" {...enter()}>
      <BackingCard />
      <div
        className={`relative w-full -rotate-2 rounded-xl border-2 border-ink bg-white p-6 sm:p-7 shadow-offset-lg
        transition-transform duration-500 ease-out hover:rotate-0`}
      >
        <div className="flex items-center gap-4">
          <LogoMark size={54} />
          <div>
            <p
              className="font-serif text-2xl font-semibold leading-tight text-ink"
              style={{ fontVariationSettings: '"SOFT" 100' }}
            >
              Michaël Jongeau
            </p>
            <p className="mt-1 font-archivo text-[0.62rem] font-extrabold uppercase tracking-[0.28em] text-coral-600">
              Développeur web
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-3 border-t border-dashed border-ink/25 pt-5 text-ink">
          <li>
            <a
              href="tel:+33635964465"
              className="group inline-flex items-center gap-3 font-semibold hover:text-coral-700"
            >
              {/* Icons counter-rotate the card's -2deg so their straight strokes stay pixel-aligned (no jaggies) */}
              <Phone aria-hidden="true" strokeWidth={1.8} className="h-4.5 w-4.5 rotate-2 text-ocean-500" />
              06 35 96 44 65
            </a>
          </li>
          <li>
            <a
              href="mailto:jongeau.m@gmail.com"
              className="group inline-flex items-center gap-3 font-semibold hover:text-coral-700"
            >
              <Mail aria-hidden="true" strokeWidth={1.8} className="h-4.5 w-4.5 rotate-2 text-ocean-500" />
              jongeau.m@gmail.com
            </a>
          </li>
          <li className="inline-flex items-center gap-3 text-ink-soft">
            <MapPin aria-hidden="true" strokeWidth={1.8} className="h-4.5 w-4.5 rotate-2 text-ocean-500" />
            Rochefort, Charente-Maritime
          </li>
        </ul>
        <p className="mt-5 text-right font-hand text-2xl leading-none text-ocean-500 -rotate-2">
          Réponse sous 24h&nbsp;!
        </p>
      </div>
    </motion.div>
  );
}
