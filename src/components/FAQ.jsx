import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '../Data/faq.js';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="scroll-mt-18">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Questions fréquentes&nbsp;:
        </motion.h2>

        <div className="mt-8 space-y-3">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
                >
                  <span className="font-mono text-sm sm:text-base text-slate-100">{item.question}</span>
                  <motion.svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
