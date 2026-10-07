// Brand logo "le sceau": italic serif M on a coral disc with an ocean offset shadow.
// Geometry mirrors the PNG assets in public/brand/ (see public/brand/README.md).

const SOFT = { fontVariationSettings: '"SOFT" 100' };

// Transparent margin around the drawing (in viewBox units). When the mark is rotated on hover, the
// browser rasterizes it as one layer and doesn't antialias edges that touch the layer bounds, which made
// the ink outline look jagged. The negative margin keeps the visual footprint at exactly `size`.
const PAD = 8;

export function LogoMark({ size = 44, dark = false, className = '' }) {
  const box = (size * (100 + 2 * PAD)) / 100;
  return (
    <svg
      viewBox={`${-PAD} ${-PAD} ${100 + 2 * PAD} ${100 + 2 * PAD}`}
      width={box}
      height={box}
      style={{ margin: -(box - size) / 2 }}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="54" cy="54" r="40" fill={dark ? 'var(--color-ocean-400)' : 'var(--color-ocean-500)'} />
      <circle
        cx="45"
        cy="45"
        r="38"
        fill="var(--color-coral-600)"
        stroke={dark ? 'var(--color-paper)' : 'var(--color-ink)'}
        strokeWidth="4"
      />
      <text
        x="44"
        y="46"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-serif)"
        fontStyle="italic"
        fontWeight="600"
        fontSize="50"
        fill="#fff"
        style={SOFT}
      >
        M
      </text>
    </svg>
  );
}

export default function Logo({ dark = false, size = 44 }) {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark size={size} dark={dark} className="transition-transform duration-300 group-hover:-rotate-12" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.3rem] font-semibold tracking-tight ${dark ? 'text-paper' : 'text-ink'}`}
          style={SOFT}
        >
          Michaël Jongeau
        </span>
        <span
          className={`mt-1.5 font-archivo text-[0.6rem] font-extrabold uppercase tracking-[0.28em] ${
            dark ? 'text-sun' : 'text-coral-600'
          }`}
        >
          Développeur web
        </span>
      </span>
    </span>
  );
}
