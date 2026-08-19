import { route, index } from '@react-router/dev/routes';

export default [
  index('pages/Home.jsx'),
  route('tarifs', 'pages/Tarifs.jsx'),
  route('realisations', 'pages/Realisations.jsx'),
  route('contact', 'pages/Contact.jsx'),
  route('mentions-legales', 'pages/LegalNotice.jsx'),
];
