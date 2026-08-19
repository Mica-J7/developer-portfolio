import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const MotionLink = motion.create(Link);

export default function CtaBanner({
  title = 'Un projet en tête ?',
  description = 'Discutons-en, le premier échange est gratuit et sans engagement.',
  note,
  tone = 'base',
}) {
  return (
    <section className={tone === 'alt' ? 'bg-sage-100' : 'bg-stone-50'}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-14 md:py-16 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-stone-900"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-3 text-stone-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
        >
          <MotionLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-sage-600
            px-4 py-2.5 text-sm text-white font-semibold shadow-soft focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-sage-400 hover:bg-sage-700"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-nowrap">Me contacter</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </MotionLink>
        </motion.div>
        {note && (
          <motion.p
            className="mt-4 text-sm text-stone-500"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          >
            {note}
          </motion.p>
        )}
      </div>
    </section>
  );
}
