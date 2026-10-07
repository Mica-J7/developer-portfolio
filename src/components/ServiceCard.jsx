import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';

export default function ServiceCard({ service, idx }) {
  return (
    <motion.article
      className="grid grid-rows-subgrid row-span-5 rounded-2xl border-2 border-ink bg-white p-7
      shadow-offset transition-[translate,box-shadow] duration-200
      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset-lg"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', delay: idx * 0.04 } }}
      viewport={{ once: true }}
    >
      <h3 className="font-serif text-2xl sm:text-[1.7rem] font-semibold leading-tight text-ink text-center text-balance">{service.title}</h3>
      <p className="mt-0.5 text-ink-soft text-sm leading-relaxed">{service.description}</p>

      <p className="flex flex-col items-center gap-2 border-y border-dashed border-ink/25 py-4 text-center">
        <span className="font-hand text-[2rem] leading-none text-coral-600">
          {service.priceFrom
            ? `dès ${service.priceFrom} €${service.billing === 'monthly' ? '/mois' : ''}`
            : 'Sur devis'}
        </span>
        {service.billing === 'monthly' && (
          <span className="rounded-full bg-ocean-50 px-2.5 py-0.5 text-xs font-semibold text-ocean-700">
            Sans engagement
          </span>
        )}
      </p>

      <div>
        <ul className="mt-1 space-y-3">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-sun">
                <Check aria-hidden="true" strokeWidth={3} className="h-3 w-3 text-ink" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {service.note && <p className="mt-5 font-hand text-xl leading-tight text-ocean-500">{service.note}</p>}
      </div>

      <Link
        to="/contact"
        className="group mt-3 inline-flex items-center justify-center gap-2 justify-self-center rounded-full border-2 border-ink bg-ink
        px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-coral-600
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 focus-visible:ring-offset-2"
      >
        Demander un devis
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
