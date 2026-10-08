import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from './SectionHeading.jsx';

export default function CtaBanner({
  title = 'Un projet en tête ?',
  description = 'Discutons-en, le premier échange est gratuit et sans engagement.',
  note,
  tone = 'base',
}) {
  return (
    <section className={tone === 'alt' ? 'bg-sand' : 'bg-paper'}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl border-2 border-ink bg-coral-600 px-6 py-14 sm:px-12 md:py-20 text-center
          shadow-offset-lg"
          {...fadeUp(0)}
        >
          {/* Decorative waves, a nod to the Atlantic coast */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 40"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-coral-700/70"
            fill="none"
          >
            <path
              d="M0 20 q25 -14 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 M0 34 q25 -14 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>

          <h2
            className="relative font-serif text-[2.1rem] sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white text-balance"
            style={{ fontVariationSettings: '"SOFT" 100' }}
          >
            {title}
          </h2>
          <p className="relative mt-4 text-lg text-white/90">{description}</p>
          <div className="relative mt-9">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-paper px-7 py-3.5
              text-base font-semibold text-ink shadow-offset transition-all duration-150
              hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset-md
              active:translate-x-1 active:translate-y-1 active:shadow-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-coral-600"
            >
              <span className="text-nowrap">Me contacter</span>
              <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          {note && <p className="relative mt-6 font-hand text-2xl text-sun -rotate-2">{note}&nbsp;!</p>}
        </motion.div>
      </div>
    </section>
  );
}
