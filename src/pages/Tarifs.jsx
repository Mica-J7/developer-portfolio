import { motion } from 'framer-motion';
import { services } from '../Data/services.js';
import ServiceCard from '../components/ServiceCard.jsx';
import Process from '../components/Process.jsx';
import FAQ from '../components/FAQ.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const groups = [
  {
    category: 'site',
    title: 'Sites & projets',
    description: 'Prestations ponctuelles, du site one-page à l’application métier sur mesure.',
    accent: 'teal',
    titleClass: 'text-teal-300',
  },
  {
    category: 'accompagnement',
    title: 'Accompagnement mensuel',
    description: 'Abonnements pour garder votre site sécurisé, sauvegardé et disponible dans la durée.',
    accent: 'amber',
    titleClass: 'text-amber-300',
  },
  {
    category: 'audit',
    title: 'Audit & SEO',
    description: 'Un état des lieux ponctuel pour prioriser vos prochaines actions.',
    accent: 'violet',
    titleClass: 'text-violet-300',
  },
];

export default function Tarifs() {
  return (
    <>
      <Process />

      <section className="scroll-mt-18 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-4 md:pt-16">
          <motion.h1
            className="font-mono text-2xl sm:text-3xl text-white"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Tarifs&nbsp;:
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-slate-400"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Chaque projet est différent&nbsp;: les tarifs ci-dessous sont donnés à titre indicatif, un devis détaillé
            et gratuit est établi après un premier échange sur votre besoin.
          </motion.p>
        </div>

        {groups.map((group) => {
          const groupServices = services.filter((s) => s.category === group.category);
          if (groupServices.length === 0) return null;
          return (
            <div key={group.category} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
              <motion.h2
                className={`font-mono text-xl ${group.titleClass}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {group.title}
              </motion.h2>
              <p className="mt-2 text-sm text-slate-400">{group.description}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupServices.map((service, idx) => (
                  <ServiceCard key={service.id} service={service} idx={idx} accent={group.accent} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="pt-8" />
      </section>

      <FAQ />
      <CtaBanner tone="alt" />
    </>
  );
}