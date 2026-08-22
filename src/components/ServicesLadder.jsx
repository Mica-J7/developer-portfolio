import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Search } from 'lucide-react';
import { services } from '../Data/services.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const siteServices = services.filter((s) => s.category === 'site');
const maintenanceService = services.find((s) => s.id === 5);
const minAuditPrice = Math.min(
  ...services.filter((s) => s.category === 'audit' && s.priceFrom).map((s) => Number(s.priceFrom)),
);

const formatPrice = (s) => {
  if (!s.priceFrom) return 'Sur devis';
  return `À partir de ${s.priceFrom} €${s.billing === 'monthly' ? '/mois' : ''}`;
};

const listItems = [
  ...siteServices.map((s) => ({ key: s.id, title: s.title, description: s.description, price: formatPrice(s) })),
  {
    key: 'audit',
    title: 'Optimisation & visibilité',
    description:
      'Optimisation SEO, campagne SEA et optimisation Google Business Profil, pour améliorer votre visibilité dans les résultats de recherche Google.',
    price: `À partir de ${minAuditPrice} €`,
  },
  {
    key: 'maintenance',
    title: 'Suivi mensuel',
    description: maintenanceService.description,
    price: formatPrice(maintenanceService),
  },
];

export default function ServicesLadder() {
  return (
    <section className="scroll-mt-18 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <motion.h2
          className="font-archivo text-3xl sm:text-4xl font-extrabold text-stone-900 text-center text-balance"
          {...fadeUp(0)}
        >
          Mes prestations
        </motion.h2>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listItems.map((item, idx) => (
            <motion.div
              key={item.key}
              className="flex flex-col rounded-xl border border-stone-200 border-t-4 border-t-sage-500 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              {...fadeUp(idx * 0.05)}
            >
              <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-stone-500 leading-relaxed">{item.description}</p>
              <span className="font-archivo mt-auto pt-4 text-lg font-extrabold text-terracotta-600">{item.price}</span>
            </motion.div>
          ))}
        </div>
        <motion.p className="mt-6 text-center text-stone-500" {...fadeUp(0.15)}>
          <Link
            to="/tarifs"
            className="group inline-flex items-center gap-1.5 font-semibold text-sage-600 hover:text-sage-700"
          >
            <span>Voir le détail de toutes les prestations</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
            />
          </Link>
        </motion.p>

        <motion.div
          className="mt-10 mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-sage-200 bg-sage-50 p-6"
          {...fadeUp(0.15)}
        >
          <Search aria-hidden="true" strokeWidth={1.8} className="h-8 w-8 shrink-0 text-sage-600" />
          <div>
            <h3 className="text-lg font-bold text-stone-900">Être visible sur Google</h3>
            <p className="mt-1 text-stone-600 leading-relaxed">
              Un site que personne ne trouve ne sert à rien. L'optimisation SEO fait partie intégrante de chaque projet
              dès sa conception, ce n'est pas une option ajoutée après coup.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
