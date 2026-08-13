import Projects from '../components/Projects.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

export default function Realisations() {
  return (
    <>
      <Projects />
      <CtaBanner
        title="Votre projet pourrait être le prochain"
        description="Parlons de ce que vous voulez construire."
        tone="alt"
      />
    </>
  );
}
