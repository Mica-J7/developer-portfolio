import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

// Project cards mapped from an array instead of hardcoding
const PROJECTS = [
  {
    title: 'My Session',
    description: "Site permettant d'enregistrer ses séances de sport. JWT auth, API REST, responsive design.",
    image: 'public/images-projects/my-session.webp',
    tech: ['React', 'Sass', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Mica-J7/My-Session',
    type: 'perso',
  },
  {
    title: 'Booki',
    description:
      'Site permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.',
    image: 'public/images-projects/booki.webp',
    tech: ['HTML', 'CSS', 'Figma'],
    live: 'https://mica-j7.github.io/Projet2/',
    repo: 'https://github.com/Mica-J7/Projet2',
    type: 'formation',
  },
  {
    title: "Sophie Bluel - Architecte d'intérieur",
    description: "Site portfolio de l'architecte d'intérieur Sophie Bluel.",
    image: 'public/images-projects/sophiebluel.webp',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/Mica-J7/Projet3',
    type: 'formation',
  },
  {
    title: 'Nina Carducci - Photographe',
    description: "Site portfolio d'une photographe indépendante. Amélioration performances, SEO, accessibilité, debug.",
    image: 'public/images-projects/nina.webp',
    tech: ['JavaScript', 'jQuery'],
    live: 'https://mica-j7.github.io/Projet4/',
    repo: 'https://github.com/Mica-J7/Projet4',
    type: 'formation',
  },
  {
    title: 'Kasa',
    description:
      'Kasa est une entreprise de location d’appartements entre particuliers. Récupération de données depuis un fichier JSON.',
    image: 'public/images-projects/kasa.webp',
    tech: ['HTML', 'CSS', 'Sass', 'JavaScript', 'React'],
    live: 'https://mica-j7.github.io/Projet5/',
    repo: 'https://github.com/Mica-J7/Projet5',
    type: 'formation',
  },
  {
    title: 'Mon Vieux Grimoire',
    description: "Site de référencement et de notation de livres. Création d'une API REST.",
    image: 'public/images-projects/mvg.webp',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    repo: 'https://github.com/Mica-J7/Projet6',
    type: 'formation',
  },
];

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
          {PROJECTS.filter((p) => p.type === 'perso').map((p, idx) => (
            <ProjectCard key={idx} p={p} />
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
          {PROJECTS.filter((p) => p.type === 'formation').map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
