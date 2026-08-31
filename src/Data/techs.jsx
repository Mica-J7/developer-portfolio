import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiDjango,
  SiSymfony,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiWordpress,
  SiPrestashop,
  SiShopify,
} from '@icons-pack/react-simple-icons';
import { Database } from 'lucide-react';

export const techs = [
  {
    id: 1,
    label: 'React',
    svg: <SiReact color="currentColor" size={32} />,
    type: 'front',
  },
  {
    id: 20,
    label: 'Next.js',
    svg: <SiNextdotjs color="currentColor" size={32} />,
    type: 'front',
  },
  {
    id: 2,
    label: 'TypeScript',
    svg: <SiTypescript color="currentColor" size={32} />,
    type: 'front',
  },
  {
    id: 3,
    label: 'Tailwind',
    svg: <SiTailwindcss color="currentColor" size={32} />,
    type: 'front',
  },
  {
    id: 5,
    label: 'HTML',
    svg: <SiHtml5 color="currentColor" size={32} />,
    type: 'front',
  },
  {
    id: 6,
    label: 'CSS',
    svg: <SiCss color="currentColor" size={32} />,
    type: 'front',
  },

  {
    id: 9,
    label: 'Django',
    svg: <SiDjango color="currentColor" size={32} />,
    type: 'back',
  },
  {
    id: 22,
    label: 'Symfony',
    svg: <SiSymfony color="currentColor" size={32} />,
    type: 'back',
  },
  {
    id: 23,
    label: 'MySQL',
    svg: <Database aria-hidden="true" strokeWidth={1.8} className="h-8 w-8" />,
    type: 'back',
  },
  {
    id: 10,
    label: 'PostgreSQL',
    svg: <SiPostgresql color="currentColor" size={32} />,
    type: 'back',
  },
  {
    id: 11,
    label: 'Node.js',
    svg: <SiNodedotjs color="currentColor" size={32} />,
    type: 'back',
  },
  {
    id: 13,
    label: 'MongoDB',
    svg: <SiMongodb color="currentColor" size={32} />,
    type: 'back',
  },

  {
    id: 24,
    label: 'WordPress',
    svg: <SiWordpress color="currentColor" size={32} />,
    type: 'cms',
  },
  {
    id: 25,
    label: 'PrestaShop',
    svg: <SiPrestashop color="currentColor" size={32} />,
    type: 'cms',
  },
  {
    id: 26,
    label: 'Shopify',
    svg: <SiShopify color="currentColor" size={32} />,
    type: 'cms',
  },
];
