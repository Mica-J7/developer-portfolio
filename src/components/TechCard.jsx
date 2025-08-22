import { motion } from 'framer-motion';

export default function TechCard({ tech, idx }) {
  return (
    <motion.div
      key={tech.id}
      className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4  
             hover:scale-[1.05] 
             hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]
             transition-transform duration-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
    >
      <div className="flex items-center gap-3">
        {tech.svg}
        <span className="font-mono text-sm text-slate-200">{tech.label}</span>
      </div>
    </motion.div>
  );
}
