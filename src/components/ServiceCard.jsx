import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { CircleCheckBig } from 'lucide-react';

export default function ServiceCard({ service, idx }) {
  return (
    <motion.article
      className="grid grid-rows-subgrid row-span-5 rounded-xl border-2 border-stone-300 border-t-4 border-t-sage-500 bg-white p-7 shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', delay: idx * 0.04 } }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-[#2d343b] text-center">{service.title}</h3>
      <p className="mt-0.5 border-b border-stone-200 pb-5 text-stone-500 text-sm leading-relaxed text-center">
        {service.description}
      </p>

      <p className="font-archivo border-b border-stone-200 pb-5 text-sm font-extrabold text-terracotta-600 text-center">
        {service.priceFrom
          ? `À partir de ${service.priceFrom} €${service.billing === 'monthly' ? '/mois' : ''}`
          : 'Sur devis'}
        {service.billing === 'monthly' && (
          <span className="mt-1 block text-xs font-semibold text-sage-600">Sans engagement</span>
        )}
      </p>

      <div>
        <ul className="mt-1 space-y-4">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone-500">
              <CircleCheckBig aria-hidden="true" strokeWidth={3} className="h-4 w-4 shrink-0 text-sage-500" />
              <span className="-mt-0.5">{item}</span>
            </li>
          ))}
        </ul>
        {service.note && <p className="mt-5 text-sm italic text-stone-400">{service.note}</p>}
      </div>

      <motion.span
        className="will-change-transform mt-3 justify-self-center inline-block"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.91 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <Link
          to="/contact"
          className="flex items-center justify-center rounded-md bg-sage-600 shadow-soft
                 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-700 transition-colors"
        >
          Demander un devis
        </Link>
      </motion.span>
    </motion.article>
  );
}
