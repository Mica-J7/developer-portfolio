import { motion } from 'framer-motion';

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

// Editorial section heading: handwritten aside above a large serif title, left-aligned by default.
// `as` lets page heroes reuse it for their h1.
export default function SectionHeading({
  aside,
  title,
  intro,
  as = 'h2',
  align = 'left',
  tone = 'light',
  className = '',
}) {
  const Title = motion[as];
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {aside && (
        <motion.p
          className={`font-hand text-2xl sm:text-[1.7rem] -rotate-2 ${centered ? '' : 'origin-left'} ${
            dark ? 'text-sun' : 'text-ocean-500'
          }`}
          {...fadeUp(0)}
        >
          {aside}
        </motion.p>
      )}
      <Title
        className={`font-serif mt-2 font-semibold tracking-tight text-balance leading-[1.05] ${
          as === 'h1' ? 'text-[2.6rem] sm:text-6xl lg:text-[4.2rem]' : 'text-[2.1rem] sm:text-5xl'
        } ${dark ? 'text-paper' : 'text-ink'}`}
        style={{ fontVariationSettings: '"SOFT" 100' }}
        {...fadeUp(0.05)}
      >
        {title}
      </Title>
      {intro && (
        <motion.p
          className={`mt-5 text-lg leading-relaxed ${dark ? 'text-paper/75' : 'text-ink-soft'} ${
            centered ? 'mx-auto' : ''
          } max-w-2xl`}
          {...fadeUp(0.1)}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
