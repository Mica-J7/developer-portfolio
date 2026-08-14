import { motion } from 'framer-motion';
import projects from '../Data/projects.json';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-18 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Mes réalisations&nbsp;:
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          Mes projets développés de bout en bout.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 items-start gap-x-8 gap-y-10">
          {projects.projects
            .filter((p) => p.type === 'perso')
            .map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}
