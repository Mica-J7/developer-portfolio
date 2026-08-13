import Presentation from '../components/Presentation.jsx';
import About from '../components/About.jsx';
import ServicesTeaser from '../components/ServicesTeaser.jsx';
import Techs from '../components/Techs.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
      <ServicesTeaser />
      <Techs />
      <CtaBanner />
    </>
  );
}
