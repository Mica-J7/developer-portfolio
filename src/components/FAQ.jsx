import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faq } from '../Data/faq.js';
import SectionHeading from './SectionHeading.jsx';

const MotionPlus = motion.create(Plus);

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="scroll-mt-18 bg-sand">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading aside="Vous vous demandez..." title="Questions fréquentes" />
            </div>
          </div>

          <div className="lg:col-span-8 border-t-2 border-ink">
            {faq.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="border-b border-ink/20">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400/70"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-ink transition-colors group-hover:text-coral-700">
                      {item.question}
                    </span>
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink transition-colors ${
                        isOpen ? 'bg-coral-600 text-white' : 'bg-paper text-ink group-hover:bg-sun'
                      }`}
                    >
                      <MotionPlus
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={2.2}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
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
                        <p className="max-w-2xl pb-7 text-lg text-ink-soft leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
