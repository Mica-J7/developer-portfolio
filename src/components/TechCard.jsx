export default function TechCard({ tech }) {
  return (
    <li
      className="group inline-flex items-center gap-2.5 rounded-full border border-paper/25 py-2 pl-2.5 pr-4
      transition-colors duration-200 hover:border-paper hover:bg-paper"
    >
      <span className="text-paper/70 transition-colors group-hover:text-coral-600 [&_svg]:h-5 [&_svg]:w-5">
        {tech.svg}
      </span>
      <span className="text-sm font-semibold text-paper transition-colors group-hover:text-ink">{tech.label}</span>
    </li>
  );
}
