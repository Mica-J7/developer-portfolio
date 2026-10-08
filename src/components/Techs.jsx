import { motion } from 'framer-motion';
import { techs } from '../Data/techs.jsx';
import TechCard from './TechCard.jsx';
import SectionHeading, { fadeUp } from './SectionHeading.jsx';

const groups = [
  { type: 'front', label: 'Front-end' },
  { type: 'back', label: 'Back-end' },
  { type: 'cms', label: 'CMS' },
];

export default function Skills() {
  return (
    <section id="techs" className="scroll-mt-18 bg-ink">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <SectionHeading
          aside="Pour les curieux"
          title="Ma stack technique"
          intro="Des outils modernes et éprouvés, choisis selon votre projet : sur mesure quand il le faut, CMS quand c'est plus simple pour vous."
          tone="dark"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {groups.map((g, gIdx) => (
            <motion.div key={g.type} className="border-t border-paper/20 pt-6" {...fadeUp(gIdx * 0.08)}>
              <h3 className="font-hand text-3xl leading-none text-sun">{g.label}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {techs
                  .filter((t) => t.type === g.type)
                  .map((t) => (
                    <TechCard key={t.id} tech={t} />
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
