import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowUpRight, Search, ShoppingCart, Wrench, ShieldCheck, LayoutTemplate, Euro } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading.jsx';

const benefits = [
  {
    title: 'Un site à votre image',
    description: 'Un design adapté à votre activité et votre identité visuelle.',
    icon: LayoutTemplate,
  },
  {
    title: 'Être visible sur Google',
    description: 'Un audit et des optimisations SEO pour que vos clients vous trouvent dans leurs recherches Google.',
    icon: Search,
  },
  {
    title: 'Vente en ligne',
    description: 'Une boutique e-commerce qui tourne 24h/24.',
    icon: ShoppingCart,
  },
  {
    title: 'Un outil métier sur mesure',
    description: 'Gestion, publication, administration : un outil développé sur mesure pour votre activité.',
    icon: Wrench,
  },
  {
    title: 'Gestion technique',
    description: "Mises à jour, sécurité, correctifs : je m'occupe de la technique, vous n'avez rien à faire.",
    icon: ShieldCheck,
  },
  {
    title: 'Des tarifs transparents',
    description: 'Des prix clairs annoncés et détaillés à l’avance.',
    icon: Euro,
  },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="scroll-mt-18 bg-sand">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <SectionHeading
          aside="Concrètement..."
          title={
            <>
              Je vous aide à <span className="marker">développer votre activité</span> en ligne
            </>
          }
          intro="Sites vitrines, e-commerce, outils métier sur mesure et optimisation SEO, pour les indépendants et petites entreprises."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {benefits.map((item, idx) => (
            <motion.div key={item.title} className="h-full" {...fadeUp(idx * 0.05)}>
              <Link
                to="/tarifs"
                className="group relative flex h-full flex-col rounded-3xl border-2 border-ink bg-paper p-7 pb-10 sm:p-8 sm:pb-12
                shadow-offset transition-[translate,box-shadow,background-color] duration-200
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white hover:shadow-offset-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
              >
                <div className="flex items-start justify-between">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-[40%_60%_55%_45%] bg-sun/70 rotate-12 transition-transform duration-500 group-hover:rotate-100"
                    />
                    <item.icon aria-hidden="true" strokeWidth={1.8} className="relative h-7 w-7 text-ink" />
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-6 w-6 text-ink/30 transition-all duration-300 group-hover:text-coral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
