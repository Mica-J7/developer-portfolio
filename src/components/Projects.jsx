import projects from '../Data/projects.json';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-18 bg-transparent py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 gap-x-8 gap-y-10">
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
