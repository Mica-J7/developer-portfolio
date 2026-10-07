import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, FileSearch, Wallet } from 'lucide-react';
import { services } from '../Data/services.js';
import { faq } from '../Data/faq.js';
import ServiceCard from '../components/ServiceCard.jsx';
import HowWeWork from '../components/HowWeWork.jsx';
import FAQ from '../components/FAQ.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import SectionHeading, { fadeUp } from '../components/SectionHeading.jsx';

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
    { property: 'og:image', content: 'https://jongeau-m.fr/tarifs.png' },
    { name: 'twitter:image', content: 'https://jongeau-m.fr/tarifs.png' },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    },
  ];
}

const groups = [
  {
    category: 'site',
    aside: 'Sur mesure',
    title: 'Sites & projets',
    description: 'Prestations ponctuelles, du site one-page à l’application métier sur mesure.',
    bg: 'bg-paper',
  },
  {
    category: 'audit',
    aside: 'Pour être trouvé',
    title: 'Optimisation & visibilité',
    description:
      'Audit SEO et campagne Google Ads, pour améliorer votre visibilité en ligne.',
    bg: 'bg-sand',
  },
  {
    category: 'accompagnement',
    aside: 'Dans la durée',
    title: 'Accompagnement mensuel',
    description: 'Abonnements pour garder votre site à jour, sécurisé et disponible en permanence.',
    bg: 'bg-paper',
  },
];

const minPrice = Math.min(
  ...services.filter((s) => s.category === 'site' && s.priceFrom).map((s) => Number(s.priceFrom)),
);

export default function Tarifs() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-18 relative overflow-hidden bg-paper-dots">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-14 pb-16 md:pt-20 md:pb-24">
          <SectionHeading
            as="h1"
            aside="Des prix transparents"
            title={
              <>
                Votre site web à partir de <span className="marker whitespace-nowrap">{minPrice} €</span>
              </>
            }
            intro="Chaque projet est différent : le devis est gratuit et personnalisé."
          />
          <motion.p className="mt-4 text-xs text-ink-soft/80" {...fadeUp(0.15)}>
            Prix HT, TVA non applicable, art. 293 B du CGI
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
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 md:py-28">
              <SectionHeading aside={group.aside} title={group.title} intro={group.description} />

              <div className="mt-12 grid grid-cols-1 grid-rows-[repeat(5,auto)] gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                {groupServices.map((service, idx) => (
                  <ServiceCard key={service.id} service={service} idx={idx} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Trust panel */}
      <section className="scroll-mt-18 bg-paper-dots">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          <motion.div className="rounded-3xl border-2 border-ink bg-white p-8 md:p-12 shadow-offset-lg" {...fadeUp(0)}>
            <h2
              className="font-serif text-[2rem] sm:text-5xl font-semibold tracking-tight leading-[1.05] text-ink text-balance"
              style={{ fontVariationSettings: '"SOFT" 100' }}
            >
              Comment fonctionnent mes tarifs&nbsp;?
            </h2>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sun">
                  <FileSearch aria-hidden="true" strokeWidth={1.8} className="h-6 w-6 text-ink" />
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">Devis détaillé après échange</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">
                  Les prix affichés sont indicatifs&nbsp;: chaque projet est différent. Après un premier échange gratuit
                  et sans engagement, vous recevez un devis avec le prix final, sans surprise.
                </p>
              </div>
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sun">
                  <Wallet aria-hidden="true" strokeWidth={1.8} className="h-6 w-6 text-ink" />
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">Paiement en deux temps</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">
                  Un acompte à la validation du devis, puis le solde à la livraison du projet.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-dashed border-ink/25 pt-8">
              <p className="font-hand text-3xl text-ocean-500 -rotate-2">Vous avez un projet en tête&nbsp;?</p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-coral-600 px-6 py-3
                text-sm font-semibold text-white shadow-offset transition-all duration-150
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset-md
                active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <span>Me contacter pour un devis gratuit</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <CtaBanner />
    </>
  );
}
