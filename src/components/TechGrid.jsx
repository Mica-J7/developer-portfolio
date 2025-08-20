import TechCard from './TechCard';

export default function TechGrid({ techs, type }) {
  const filtered = techs.filter((t) => t.type === type);

  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
      {filtered.map((t, idx) => (
        <TechCard key={t.label} tech={t} idx={idx} />
      ))}
    </div>
  );
}
