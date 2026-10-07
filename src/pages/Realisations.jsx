import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Projects from '../components/Projects.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import SectionHeading, { fadeUp } from '../components/SectionHeading.jsx';
import { Polaroids } from '../components/HeroVisuals.jsx';

export function meta() {
  return [
    { title: 'Réalisations - Projets web | Michaël Jongeau' },
    {
      name: 'description',
      content:
        'Découvrez les projets web conçus et développés par Michaël Jongeau, développeur freelance : applications sur mesure, outils métier et sites vitrines.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/realisations' },
    { property: 'og:title', content: 'Réalisations - Michaël Jongeau, Développeur Web Freelance' },
    {
      property: 'og:description',
      content: 'Projets web conçus et développés de bout en bout : applications sur mesure et sites vitrines.',
    },
    { property: 'og:url', content: 'https://jongeau-m.fr/realisations' },
    { property: 'og:image', content: 'https://jongeau-m.fr/realisations.png' },
    { name: 'twitter:image', content: 'https://jongeau-m.fr/realisations.png' },
  ];
}

export default function Realisations() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-18 relative overflow-hidden bg-paper-dots">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading
              as="h1"
              aside="Fait maison"
              title={
                <>
                  Mes <span className="marker">réalisations</span>
                </>
              }
              intro="Applications web et outils sur mesure : découvrez quelques projets personnels que j'ai conçus et développés de bout en bout, du cahier des charges à la mise en ligne."
            />
            <motion.div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5" {...fadeUp(0.15)}>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-ink bg-coral-600 px-6 py-3 font-semibold text-white
                shadow-offset transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset-md
                active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Me contacter
              </Link>
              <Link
                to="/tarifs"
                className="font-semibold text-ink underline decoration-coral-500 decoration-2 underline-offset-[6px] hover:text-coral-700"
              >
                Consulter mes tarifs
              </Link>
            </motion.div>
          </div>
          {/* Decorative paper object (lg+ only, the hero stays single-column below) */}
          <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
            <Polaroids />
          </div>
        </div>
      </section>

      <Projects />
      <CtaBanner
        title="Votre projet pourrait être le prochain !"
        description="Parlons de ce que vous voulez construire."
      />
    </>
  );
}
