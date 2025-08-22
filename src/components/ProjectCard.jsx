import { motion } from 'framer-motion';

export default function ProjectCard({ p, idx }) {
  return (
    <motion.article
      key={p.id}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 
             bg-slate-900/60
             hover:border-teal-400
             hover:shadow-[0_0_10px_rgb(45_212_191/90%),0_0_25px_rgb(45_212_191/50%),0_0_50px_rgb(45_212_191/30%)]
             hover:scale-105
             transition-transform duration-800"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={p.image}
          alt={`Image du site ${p.title}`}
          className="h-44 w-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-mono text-xl text-white">{p.title}</h3>
        <p className="mt-2 text-slate-400 text-sm">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.techs.map((t) => (
            <li key={t} className="rounded border border-slate-700 px-2 py-1 text-xs text-slate-300">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center h-full gap-3">
          {p.live && (
            <motion.a
              href={p.live}
              className="inline-flex items-center gap-0.5 rounded-md border border-teal-400/40 
                      bg-teal-400/10 px-2 py-1.5 text-sm text-teal-300"
              aria-label="Ouvrir le site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.91 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              Site
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 -4 24 22"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7 M10 14 21 3" />
              </svg>
            </motion.a>
          )}
          {p.repo && (
            <motion.a
              href={p.repo}
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-2 py-1.5 text-sm text-slate-300"
              aria-label="Ouvrir le repo GitHub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.91 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <span className="pb-0.5">GitHub</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.29-3.7-1.29-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.7.77 1.13 1.75 1.13 2.95 0 4.23-2.56 5.15-5 5.43.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
