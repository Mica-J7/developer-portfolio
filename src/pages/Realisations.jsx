import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Projects from '../components/Projects.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

export function meta() {
  return [
    { title: 'Réalisations - Projets web | Michaël Jongeau' },
    {
      name: 'description',
      content:
        'Découvrez les projets web conçus et développés par Michaël Jongeau, développeur freelance : applications React/Django, outils sur mesure et sites vitrines.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/realisations' },
    { property: 'og:title', content: 'Réalisations - Michaël Jongeau, Développeur Web Freelance' },
    {
      property: 'og:description',
      content: 'Projets web conçus et développés de bout en bout : applications sur mesure et sites vitrines.',
    },
    { property: 'og:url', content: 'https://jongeau-m.fr/realisations' },
  ];
}

export default function Realisations() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-18 relative overflow-hidden bg-transparent">
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <motion.h1
            className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[#2d343b] text-balance"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Mes réalisations
          </motion.h1>
          <motion.p
            className="mt-5 text-stone-600"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            Découvrez quelques projets que j'ai conçus et développés.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="scroll-mt-18 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16 md:py-20 text-center">
          <motion.p
            className="text-stone-600 leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Applications web et outils sur mesure : voici quelques projets personnels que j'ai conçus et développés de
            bout en bout, du cahier des charges à la mise en ligne.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            <p className="text-stone-600 leading-relaxed">Vous cherchez un développeur pour votre projet&nbsp;?</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/tarifs"
                className="inline-flex items-center rounded-md border-2 border-sage-600 bg-white px-4 py-2 text-sm font-semibold text-sage-600 transition-colors hover:bg-sage-600 hover:text-white"
              >
                Consultez mes tarifs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-sage-600 shadow-soft px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sage-700"
              >
                Me contacter
              </Link>
            </div>
          </motion.div>
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
