import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { CircleCheckBig } from 'lucide-react';

export default function ServiceCard({ service, idx }) {
  return (
    <motion.article
      className="grid grid-rows-subgrid row-span-5 rounded-xl border border-stone-200 border-t-4 border-t-sage-500 bg-white p-7 shadow-md
             transition-shadow duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', delay: idx * 0.04 } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-[#2d343b] text-center">{service.title}</h3>
      <p className="mt-0.5 border-b border-stone-200 pb-5 text-stone-500 text-base leading-relaxed text-center">
        {service.description}
      </p>

      <p className="font-archivo border-b border-stone-200 pb-5 text-xl font-extrabold text-terracotta-600 text-center">
        {service.priceFrom
          ? `À partir de ${service.priceFrom} €${service.billing === 'monthly' ? '/mois' : ''}`
          : 'Sur devis'}
      </p>

      <div>
        <ul className="mt-6 space-y-5">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-base text-stone-500">
              <CircleCheckBig aria-hidden="true" strokeWidth={3} className="mt-0.5 mr-2 h-5 w-5 shrink-0 text-sage-500" />
              <span className="-mt-0.5">{item}</span>
            </li>
          ))}
        </ul>
        {service.note && <p className="mt-5 text-sm italic text-stone-400">{service.note}</p>}
      </div>

      <Link
        to="/contact"
        className="mt-7 justify-self-center inline-flex items-center justify-center rounded-md bg-sage-600 shadow-soft
               px-4 py-2.5 text-base font-semibold text-white hover:bg-sage-700 transition-colors"
      >
        Demander un devis
      </Link>
    </motion.article>
  );
}
