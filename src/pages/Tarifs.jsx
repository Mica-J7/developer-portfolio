import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { services } from '../Data/services.js';
import ServiceCard from '../components/ServiceCard.jsx';
import HowWeWork from '../components/HowWeWork.jsx';
import FAQ from '../components/FAQ.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

export function meta() {
  return [
    { title: 'Tarifs - Sites web & applications sur mesure | Michaël Jongeau' },
    {
      name: 'description',
      content:
        "Tarifs transparents pour la création d'un site vitrine, e-commerce ou application sur mesure, ainsi que pour l'accompagnement mensuel et l'audit SEO. Devis gratuit et personnalisé sous 24h.",
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/tarifs' },
    { property: 'og:title', content: 'Tarifs - Michaël Jongeau, Développeur Web Freelance' },
    {
      property: 'og:description',
      content: "Tarifs transparents pour la création d'un site vitrine, e-commerce ou application sur mesure.",
    },
    { property: 'og:url', content: 'https://jongeau-m.fr/tarifs' },
  ];
}

const groups = [
  {
    category: 'site',
    title: 'Sites & projets',
    description: 'Prestations ponctuelles, du site one-page à l’application métier sur mesure.',
    bg: 'bg-transparent',
  },
  {
    category: 'accompagnement',
    title: 'Accompagnement mensuel',
    description: 'Abonnements pour garder votre site à jour, sécurisé et disponible en permanence.',
    bg: 'bg-stone-50',
  },
  {
    category: 'audit',
    title: 'Optimisation & visibilité',
    description: 'Des actions concrètes pour améliorer votre visibilité en ligne.',
    bg: 'bg-transparent',
  },
];

const minPrice = Math.min(
  ...services.filter((s) => s.category === 'site' && s.priceFrom).map((s) => Number(s.priceFrom)),
);

export default function Tarifs() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-18 relative overflow-hidden bg-transparent">
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <motion.h1
            className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-stone-900"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Votre site web à partir de {minPrice} €
          </motion.h1>
          <motion.p
            className="mt-2 text-xs text-stone-500"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.03 }}
          >
            Prix HT, TVA non applicable, art. 293 B du CGI
          </motion.p>
          <motion.p
            className="mt-5 text-lg text-stone-600"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            Des prix transparents et adaptés à votre projet
            <br />
            Devis personnalisé gratuit
          </motion.p>
        </div>
      </section>

      <HowWeWork />

      {/* Pricing groups */}
      {groups.map((group) => {
        const groupServices = services.filter((s) => s.category === group.category);
        if (groupServices.length === 0) return null;
        return (
          <section key={group.category} className={`scroll-mt-18 ${group.bg}`}>
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-20">
              <motion.h2
                className="font-archivo text-3xl sm:text-4xl font-extrabold text-stone-900 text-center"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {group.title}
              </motion.h2>
              <p className="mt-2 text-base text-stone-500 text-center">{group.description}</p>

              <div className="mt-6 grid grid-cols-1 grid-rows-[repeat(5,auto)] gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
                {groupServices.map((service, idx) => (
                  <ServiceCard key={service.id} service={service} idx={idx} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Trust panel */}
      <section className="scroll-mt-18 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-14 md:py-16">
          <motion.div
            className="rounded-2xl border border-sage-300 bg-white p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h2 className="font-archivo text-3xl sm:text-4xl font-extrabold text-stone-900 text-center">
              Comment fonctionnent mes tarifs&nbsp;?
            </h2>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Les prix affichés sont indicatifs&nbsp;: chaque projet est différent, donc chaque devis l'est aussi. Après
              un premier échange gratuit et sans engagement, vous recevez un devis détaillé avec le périmètre exact et
              le prix final, sans surprise par la suite.
            </p>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Le paiement se fait en deux temps&nbsp;: un acompte à la validation du devis, puis le solde à la livraison
              du projet.
            </p>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Vous avez un projet en tête&nbsp;?{' '}
              <Link to="/contact" className="text-sage-600 underline hover:text-sage-700">
                Contactez-moi
              </Link>{' '}
              pour un devis gratuit, réponse sous 24h.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <CtaBanner />
    </>
  );
}
