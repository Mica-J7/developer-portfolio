import Presentation from '../components/Presentation.jsx';
import About from '../components/About.jsx';
import ServicesTeaser from '../components/ServicesTeaser.jsx';
import ServicesLadder from '../components/ServicesLadder.jsx';
import Techs from '../components/Techs.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

export function meta() {
  return [
    { title: 'Michaël Jongeau - Développeur Web Freelance React & Django' },
    {
      name: 'description',
      content:
        'Développeur web freelance basé à Rochefort : sites vitrines, applications web sur mesure et maintenance en React/Django. Devis gratuit sous 24h.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/' },
    { property: 'og:title', content: 'Michaël Jongeau - Développeur Web Freelance' },
    {
      property: 'og:description',
      content: 'Sites vitrines, applications web sur mesure et maintenance. Demandez un devis gratuit.',
    },
    { property: 'og:url', content: 'https://jongeau-m.fr/' },
    { property: 'og:image', content: 'https://jongeau-m.fr/portfolio.jpg' },
    { name: 'twitter:title', content: 'Michaël Jongeau - Développeur Web Freelance' },
    {
      name: 'twitter:description',
      content: 'Sites vitrines, applications web sur mesure et maintenance.',
    },
    { name: 'twitter:image', content: 'https://jongeau-m.fr/portfolio.jpg' },
  ];
}

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
      <ServicesTeaser />
      <ServicesLadder />
      <Techs />
      <CtaBanner
        title="Vous voulez un site qui vous ramène des clients ?"
        description="Premier échange gratuit et sans engagement."
        note="Réponse sous 24h"
      />
    </>
  );
}
