import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Search, ShoppingCart, Wrench, ShieldCheck, LayoutTemplate, Euro } from 'lucide-react';

const benefits = [
  {
    title: 'Un site qui vous ressemble',
    description: 'Un design adapté à votre activité et votre identité visuelle.',
    icon: <LayoutTemplate aria-hidden="true" strokeWidth={1.8} className="h-14 w-14" />,
  },
  {
    title: 'Être visible sur Google',
    description: 'Un audit et des optimisations SEO pour que vos clients vous trouvent dans leurs recherches Google.',
    icon: <Search aria-hidden="true" strokeWidth={1.8} className="h-14 w-14" />,
  },
  {
    title: 'Vente en ligne',
    description: 'Une boutique e-commerce qui tourne 24h/24.',
    icon: <ShoppingCart aria-hidden="true" strokeWidth={1.8} className="h-14 w-14" />,
  },
  {
    title: 'Un outil métier sur mesure',
    description: 'Gestion, publication, administration : un outil développé sur mesure pour votre activité.',
    icon: <Wrench aria-hidden="true" strokeWidth={1.8} className="h-14 w-14" />,
  },
  {
    title: 'Gestion technique',
    description: "Hébergement, mises à jour, sécurité : je gère tout pour vous, vous n'avez rien à faire.",
    icon: <ShieldCheck aria-hidden="true" strokeWidth={1.8} className="h-14 w-14" />,
  },
  {
    title: 'Des tarifs transparents',
    description: 'Des prix clairs annoncés et détaillés à l’avance.',
    icon: <Euro aria-hidden="true" strokeWidth={1.8} className="h-14 w-14" />,
  },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="scroll-mt-18 bg-sage-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-stone-900 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Je vous aide à développer votre activité en ligne
        </motion.h2>
        <motion.p
          className="mt-3 text-stone-600 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          Des solutions concrètes pour développer votre activité et votre visibilité en ligne.
        </motion.p>

        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex h-full flex-col rounded-xl border border-stone-200 bg-stone-50 p-5 shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="shrink-0 text-sage-600">{item.icon}</div>
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
              </div>
              <p className="mt-2 text-base text-stone-500 leading-relaxed text-center">{item.description}</p>
              <Link
                to="/tarifs"
                className="group/link mt-auto pt-4 flex items-center justify-center gap-1.5 text-base font-semibold text-sage-600 hover:text-sage-700"
              >
                Voir les tarifs
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1.5"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        >
          <Link
            to="/tarifs"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-sage-600 bg-white
             px-4 py-2.5 text-sm font-semibold text-sage-600 hover:bg-sage-600 hover:text-white transition-colors"
          >
            Voir tous les services en détail
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
