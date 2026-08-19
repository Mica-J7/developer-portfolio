import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FolderOpen } from 'lucide-react';
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
      <section className="scroll-mt-18 relative overflow-hidden bg-sage-100">
        <FolderOpen
          aria-hidden="true"
          strokeWidth={1}
          className="pointer-events-none absolute right-6 top-6 z-0 h-28 w-28 text-sage-300 opacity-40 lg:h-36 lg:w-36"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <motion.h1
            className="text-3xl sm:text-5xl font-bold text-stone-900 leading-tight"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Mes réalisations
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-stone-600"
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
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-14 md:py-16 text-center">
          <motion.p
            className="text-lg text-stone-600 leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Applications web et outils sur mesure : voici quelques projets personnels que j'ai conçus et développés de
            bout en bout, du cahier des charges à la mise en ligne.
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-stone-600 leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            Vous cherchez un développeur pour votre projet&nbsp;?{' '}
            <Link to="/tarifs" className="text-sage-600 underline hover:text-sage-700">
              Consultez mes tarifs
            </Link>{' '}
            ou{' '}
            <Link to="/contact" className="text-sage-600 underline hover:text-sage-700">
              contactez-moi
            </Link>{' '}
            pour en discuter.
          </motion.p>
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
