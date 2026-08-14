import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

function BulletList({ label, items }) {
  if (!items) return null;
  return (
    <div className="mt-4">
      <p className="text-xs font-mono uppercase tracking-wide text-teal-400/80">{label}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
            <svg
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-teal-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({ p, idx }) {
  // Split a trailing "(note)" out of the title so it can be styled smaller, e.g. "My Session (projet toujours en cours)"
  const titleMatch = p.title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  const mainTitle = titleMatch ? titleMatch[1] : p.title;
  const titleNote = titleMatch ? titleMatch[2] : null;

  const hasDetails = Boolean(p.features || p.technical);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const imageLayoutId = `project-image-${p.id}`;

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setZoomed(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [zoomed]);

  return (
    <motion.article
      key={p.id}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-800
             bg-linear-to-b from-slate-800/80 to-slate-950/40
             hover:border-teal-400
             hover:shadow-[0_0_8px_rgb(45_212_191/50%),0_0_18px_rgb(45_212_191/25%)]
             transition-colors duration-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.04 }}
    >
      <div className="relative overflow-hidden p-4 pb-0">
        <motion.img
          layoutId={imageLayoutId}
          src={p.image}
          alt={`Image du site ${p.title}`}
          className="aspect-1200/630 w-full cursor-zoom-in rounded-lg object-cover"
          loading="lazy"
          onClick={() => setZoomed(true)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-mono text-2xl text-white">
          {mainTitle}
          {titleNote && <span className="ml-2 text-sm font-normal text-slate-400">({titleNote})</span>}
        </h3>
        <p className="mt-2 text-slate-400 text-sm">{p.description}</p>

        {hasDetails && (
          <>
            <button
              type="button"
              onClick={() => setDetailsOpen((prev) => !prev)}
              aria-expanded={detailsOpen}
              className="mt-4 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-teal-400 hover:text-teal-300 cursor-pointer"
            >
              <span>{detailsOpen ? 'Masquer le détail' : 'Voir le détail'}</span>
              <motion.svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                animate={{ rotate: detailsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {detailsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <BulletList label="Fonctionnalités" items={p.features} />
                  <BulletList label="Aspects techniques" items={p.technical} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
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
              className="inline-flex items-center gap-0.5 rounded-md border border-teal-400
                      bg-teal-400/10 px-2 py-1.5 text-sm text-teal-300"
              aria-label="Ouvrir le site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.91 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <span className="pb-0.5">Voir le site</span>
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
              className="inline-flex items-center gap-2 rounded-md border border-teal-400 bg-slate-900 px-2 py-1.5 text-sm text-slate-300"
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

      {createPortal(
        <AnimatePresence>
          {zoomed && (
            <motion.div
              className="fixed inset-0 z-50 cursor-zoom-out overflow-auto bg-slate-950/90 p-6 backdrop-blur-sm
              pointer-fine:flex pointer-fine:items-center pointer-fine:justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setZoomed(false)}
            >
              {/* Desktop: image scales down to fit the screen. Touch: rendered at natural size inside
                  a scrollable area, since a screen-constrained "zoom" would be pointless on a small viewport. */}
              <motion.img
                layoutId={imageLayoutId}
                src={p.image}
                alt={`Image du site ${p.title}`}
                className="mx-auto max-w-none rounded-lg object-contain shadow-2xl pointer-fine:max-h-full pointer-fine:max-w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </motion.article>
  );
}
