import { motion } from 'framer-motion';

// Accordion panel that stays in the DOM when closed (collapsed to zero height) instead of being unmounted,
// so its text is part of the pre-rendered HTML and readable by search engines. `inert` keeps the closed
// content out of keyboard focus and screen readers.
export default function Collapsible({ open, id, children }) {
  return (
    <motion.div
      id={id}
      className="overflow-hidden"
      initial={false}
      animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      inert={!open}
    >
      {children}
    </motion.div>
  );
}
