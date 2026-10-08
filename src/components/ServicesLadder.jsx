import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { services } from '../Data/services.js';
import SectionHeading, { fadeUp } from './SectionHeading.jsx';

// A wrapped title keeps the full width its flex slot gave it, leaving a gap before the leader dots.
// CSS can't shrink a box to its longest wrapped line, so measure the text and pin the width to it.
function MenuTitle({ className, children }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const fit = () => {
      el.style.width = '';
      const range = document.createRange();
      range.selectNodeContents(el);
      const rects = [...range.getClientRects()];
      const lines = new Set(rects.map((r) => Math.round(r.top)));
      if (lines.size > 1) {
        const width = Math.max(...rects.map((r) => r.right)) - Math.min(...rects.map((r) => r.left));
        el.style.width = `${Math.ceil(width)}px`;
      }
    };
    fit();
    // Re-measure whenever a web font finishes loading: measured with the wider fallback font, the title
    // would wrap and stay pinned to a wrong width
    document.fonts?.addEventListener('loadingdone', fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el.parentElement);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.fonts?.removeEventListener('loadingdone', fit);
    };
  }, []);
  return (
    <h3 ref={ref} className={className}>
      {children}
    </h3>
  );
}

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
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
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
                  {/* Leader dots keep a minimum width so a long title can't squeeze them out; dots and price are
                      centered on the title, so a title wrapping on two lines gets its price in the middle.
                      Text is a notch smaller on phones so most rows fit on one line. */}
                  <div className="flex items-center gap-3">
                    <MenuTitle className="font-serif text-lg sm:text-2xl font-semibold text-ink">
                      {/* Non-breaking hyphen so "e-commerce" never splits across lines */}
                      {item.title.replace(/-/g, '‑')}
                    </MenuTitle>
                    <span
                      aria-hidden="true"
                      className="min-w-10 flex-1 border-b-2 border-dotted border-ink/30 translate-y-[0.2em]"
                    />
                    <span className="shrink-0 font-hand text-xl sm:text-[1.7rem] leading-none text-coral-600">
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
                className="group inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-ink hover:text-coral-700"
              >
                {/* Shorter label on phones so text and arrow always fit on one line */}
                <span className="underline decoration-coral-500 decoration-2 underline-offset-[6px]">
                  <span className="sm:hidden">Voir toutes les prestations</span>
                  <span className="hidden sm:inline">Voir le détail de toutes les prestations</span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1.5"
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
