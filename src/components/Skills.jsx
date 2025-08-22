import { motion } from 'framer-motion';
import TechGrid from './TechGrid.jsx';
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiFigma,
  SiNotion,
} from '@icons-pack/react-simple-icons';
// Tech stack cards mapped from data array
const TECH = [
  {
    label: 'HTML',
    svg: <SiHtml5 color="default" size={32} />,
    type: 'front',
  },
  {
    label: 'CSS',
    svg: <SiCss color="default" size={32} />,
    type: 'front',
  },
  {
    label: 'Sass',
    svg: <SiSass color="default" size={32} />,
    type: 'front',
  },
  {
    label: 'Tailwind',
    svg: <SiTailwindcss color="default" size={32} />,
    type: 'front',
  },
  {
    label: 'JavaScript',
    svg: <SiJavascript color="default" size={32} />,
    type: 'front',
  },
  {
    label: 'React',
    svg: <SiReact color="default" size={32} />,
    type: 'front',
  },
  {
    label: 'Angular',
    svg: <SiAngular color="red" size={32} />,
    type: 'front',
  },
  {
    label: 'Node.js',
    svg: <SiNodedotjs color="default" size={32} />,
    type: 'back',
  },
  {
    label: 'Express',
    svg: <SiExpress color="white" size={32} />,
    type: 'back',
  },
  {
    label: 'MongoDB',
    svg: <SiMongodb color="default" size={32} />,
    type: 'back',
  },
  {
    label: 'Git',
    svg: <SiGit color="default" size={32} />,
    type: 'tools',
  },
  {
    label: 'GitHub',
    svg: <SiGithub color="white" size={32} />,
    type: 'tools',
  },
  {
    label: 'Vite',
    svg: <SiVite color="yellow" size={32} />,
    type: 'tools',
  },
  {
    label: 'Postman',
    svg: <SiPostman color="default" size={32} />,
    type: 'tools',
  },
  {
    label: 'Figma',
    svg: <SiFigma color="default" size={32} />,
    type: 'tools',
  },
  {
    label: 'Notion',
    svg: <SiNotion color="white" size={32} />,
    type: 'tools',
  },
];

export default function Skills() {
  return (
    <section id="stack" className="scroll-mt-18 border-t border-teal-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <motion.h2
          id="stack-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Mes compétences :
        </motion.h2>
        <motion.p
          className="mt-10 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          • Front-end :
        </motion.p>

        <TechGrid techs={TECH} type="front" />

        <motion.p
          className="mt-8 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          • Back-end :
        </motion.p>
        <TechGrid techs={TECH} type="back" />

        <motion.p
          className="mt-8 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          • Autres Outils :
        </motion.p>
        <TechGrid techs={TECH} type="tools" />
      </div>
    </section>
  );
}
