import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { services } from '../Data/services.js';
import SectionHeading, { fadeUp } from './SectionHeading.jsx';

const siteServices = services.filter((s) => s.category === 'site');
const maintenanceService = services.find((s) => s.id === 5);
const minAuditPrice = Math.min(
  ...services.filter((s) => s.category === 'audit' && s.priceFrom).map((s) => Number(s.priceFrom)),
);

const formatPrice = (s) => {
  if (!s.priceFrom) return 'Sur devis';
  return `dès ${s.priceFrom} €${s.billing === 'monthly' ? '/mois' : ''}`;
};

const listItems = [
  ...siteServices.map((s) => ({ key: s.id, title: s.title, description: s.description, price: formatPrice(s) })),
  {
    key: 'audit',
    title: 'Optimisation & visibilité',
    description:
      'Optimisation SEO et campagne SEA, pour améliorer votre visibilité dans les résultats de recherche Google.',
    price: `dès ${minAuditPrice} €`,
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
    <section className="scroll-mt-18 bg-paper-dots">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <SectionHeading aside="Au menu" title="Mes prestations" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Menu card */}
          <motion.div
            className="lg:col-span-8 rounded-sm border-2 border-ink bg-white px-6 py-8 sm:px-12 sm:py-12 shadow-offset-lg"
            {...fadeUp(0.05)}
          >
            <p className="text-center font-archivo text-xs font-extrabold uppercase tracking-[0.4em] text-ink-soft">
              <span className="text-coral-500">✶</span> La carte <span className="text-coral-500">✶</span>
            </p>
            <ul className="mt-8 space-y-7">
              {listItems.map((item) => (
                <li key={item.key}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink">{item.title}</h3>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b-2 border-dotted border-ink/30 translate-y-[-0.3em]"
                    />
                    <span className="shrink-0 font-hand text-2xl sm:text-[1.7rem] leading-none text-coral-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1 max-w-xl text-ink-soft leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-dashed border-ink/25 pt-6 text-center">
              <Link
                to="/tarifs"
                className="group font-semibold text-ink underline decoration-coral-500 decoration-2 underline-offset-[6px] hover:text-coral-700"
              >
                Voir le détail de toutes les prestations
                <ArrowRight
                  aria-hidden="true"
                  className="ml-1.5 inline h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Sticky note */}
          <motion.aside
            className="relative lg:col-span-4 lg:mt-16 mx-auto max-w-sm rotate-2 bg-sun px-7 pt-9 pb-8 shadow-[0_18px_30px_-14px_rgb(22_38_46/0.45)]
            transition-transform duration-500 hover:rotate-0"
            {...fadeUp(0.15)}
          >
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-white/60 shadow-sm"
            />
            <h3 className="font-hand text-3xl leading-none text-ink">Être visible sur Google</h3>
            <p className="mt-4 font-hand text-[1.4rem] leading-snug text-ink/85">
              Un site que personne ne trouve ne sert à rien. L'optimisation SEO fait partie intégrante de chaque projet
              dès sa conception, ce n'est pas une option ajoutée après coup.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
