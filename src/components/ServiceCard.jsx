import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ACCENTS = {
  teal: {
    hover: 'hover:border-teal-400 hover:shadow-[0_0_8px_rgb(45_212_191/50%),0_0_18px_rgb(45_212_191/25%)]',
    check: 'text-teal-400',
    price: 'text-teal-300',
    link: 'hover:decoration-teal-400',
  },
  amber: {
    hover: 'hover:border-amber-400 hover:shadow-[0_0_8px_rgb(251_191_36/50%),0_0_18px_rgb(251_191_36/25%)]',
    check: 'text-amber-400',
    price: 'text-amber-300',
    link: 'hover:decoration-amber-400',
  },
  violet: {
    hover: 'hover:border-violet-400 hover:shadow-[0_0_8px_rgb(167_139_250/50%),0_0_18px_rgb(167_139_250/25%)]',
    check: 'text-violet-400',
    price: 'text-violet-300',
    link: 'hover:decoration-violet-400',
  },
};

export default function ServiceCard({ service, idx, accent = 'teal' }) {
  const colors = ACCENTS[accent] ?? ACCENTS.teal;

  return (
    <motion.article
      className={`flex flex-col rounded-xl border border-slate-800 bg-linear-to-b from-slate-800/80 to-slate-950/40 p-6
             transition-colors duration-300 ${colors.hover}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.04 }}
    >
      <h3 className="font-mono text-xl text-white">{service.title}</h3>
      <p className="mt-3 text-slate-400 text-sm leading-relaxed">{service.description}</p>

      <ul className="mt-4 space-y-2 flex-1">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
            <svg
              aria-hidden="true"
              className={`mt-0.5 h-4 w-4 shrink-0 ${colors.check}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
        <span className={`font-mono ${colors.price}`}>
          {service.priceFrom
            ? `À partir de ${service.priceFrom} €${service.billing === 'monthly' ? '/mois' : ''}`
            : 'Sur devis'}
        </span>
        <Link
          to="/contact"
          className={`text-sm text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 ${colors.link}`}
        >
          Demander un devis
        </Link>
      </div>
    </motion.article>
  );
}