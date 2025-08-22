import { motion } from 'framer-motion';
import projects from '../Data/projects.json';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-18 border-t border-teal-900/80 pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="projects-perso"
          className="font-mono text-2xl sm:text-3xl text-white scroll-mt-34"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Projet Personnel :
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.projects
            .filter((p) => p.type === 'perso')
            .map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} />
            ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <motion.h2
          id="projects-formation"
          className="font-mono text-2xl sm:text-3xl text-white scroll-mt-34"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Projets de formation :
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.projects
            .filter((p) => p.type === 'formation')
            .map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}
