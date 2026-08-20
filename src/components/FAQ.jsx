import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faq } from '../Data/faq.js';

const MotionChevronDown = motion.create(ChevronDown);

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="scroll-mt-18 bg-sage-100">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          className="font-archivo text-3xl sm:text-4xl font-extrabold text-stone-900"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Questions fréquentes&nbsp;:
        </motion.h2>

        <div className="mt-8 space-y-3">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-md">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400/70"
                >
                  <span className="text-base sm:text-lg font-medium text-stone-800">{item.question}</span>
                  <MotionChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-stone-500"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
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
                      <p className="px-5 pb-4 text-base text-stone-600 leading-relaxed">{item.answer}</p>
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
