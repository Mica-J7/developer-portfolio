import { motion } from 'framer-motion';

export default function TechCard({ tech, idx }) {
  return (
    <motion.div
      key={tech.id}
      className="will-change-transform w-44 shrink-0 group rounded-xl border border-stone-200 bg-white p-4 shadow-md
             hover:shadow-lg
             transition-shadow duration-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut', delay: idx * 0.03 } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <span className="text-sage-600">{tech.svg}</span>
        <span className="text-base font-semibold text-stone-700">{tech.label}</span>
      </div>
    </motion.div>
  );
}
