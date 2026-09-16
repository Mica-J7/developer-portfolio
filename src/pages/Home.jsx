import Presentation from '../components/Presentation.jsx';
import About from '../components/About.jsx';
import ServicesTeaser from '../components/ServicesTeaser.jsx';
import ServicesLadder from '../components/ServicesLadder.jsx';
import Techs from '../components/Techs.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

export function meta() {
  return [
    { title: 'Michaël Jongeau - Développeur Web Freelance en Charente-Maritime' },
    {
      name: 'description',
      content:
        'Développeur web en Charente-Maritime : création de sites sur mesure et accompagnement SEO/SEA pour gagner en visibilité. Devis gratuit sous 24h.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/' },
    { property: 'og:title', content: 'Michaël Jongeau - Développeur Web Freelance en Charente-Maritime' },
    {
      property: 'og:description',
      content: 'Sites vitrines, applications web sur mesure et maintenance. Demandez un devis gratuit.',
    },
    { property: 'og:url', content: 'https://jongeau-m.fr/' },
    { property: 'og:image', content: 'https://jongeau-m.fr/home.jpg' },
    { name: 'twitter:title', content: 'Michaël Jongeau - Développeur Web Freelance en Charente-Maritime' },
    {
      name: 'twitter:description',
      content: 'Sites vitrines, applications web sur mesure et maintenance.',
    },
    { name: 'twitter:image', content: 'https://jongeau-m.fr/home.jpg' },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Michaël Jongeau - Développeur Web Freelance',
        image: 'https://jongeau-m.fr/home.jpg',
        url: 'https://jongeau-m.fr/',
        telephone: '+33635964465',
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rochefort',
          postalCode: '17300',
          addressRegion: 'Charente-Maritime',
          addressCountry: 'FR',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'City', name: 'Rochefort' },
          { '@type': 'City', name: 'La Rochelle' },
          { '@type': 'City', name: 'Châtelaillon-Plage' },
          { '@type': 'City', name: 'Aytré' },
          { '@type': 'City', name: 'Saint-Martin-de-Ré' },
          { '@type': 'City', name: 'Tonnay-Charente' },
          { '@type': 'City', name: 'Marennes' },
          { '@type': 'City', name: "Saint-Pierre-d'Oléron" },
          { '@type': 'City', name: 'Surgères' },
          { '@type': 'City', name: "Saint-Jean-d'Angély" },
          { '@type': 'City', name: 'Marans' },
          { '@type': 'City', name: 'Saintes' },
          { '@type': 'City', name: 'Pons' },
          { '@type': 'City', name: 'Royan' },
          { '@type': 'City', name: 'Saujon' },
          { '@type': 'City', name: 'Jonzac' },
        ],
        sameAs: [
          'https://github.com/Mica-J7',
          'https://www.linkedin.com/in/jongeau/',
          'https://x.com/Mica_J7',
        ],
      },
    },
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
