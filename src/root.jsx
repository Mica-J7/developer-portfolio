import { useEffect } from 'react';
import { Meta, Links, Outlet, Scripts, useLocation } from 'react-router';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export function meta() {
  return [
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@Mica_J7' },
    { name: 'author', content: 'Michaël Jongeau' },
  ];
}

export function links() {
  return [
    { rel: 'icon', type: 'image/png', href: '/brand/favicon-32.png' },
    { rel: 'icon', href: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', href: '/brand/favicon-64.png', sizes: '64x64', type: 'image/png' },
    { rel: 'apple-touch-icon', href: '/brand/apple-touch-icon-180.png' },
    { rel: 'manifest', href: '/brand/manifest.webmanifest' },
  ];
}

export function Layout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // "instant" (not "auto") is required to override the site-wide scroll-smooth CSS on <html>
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <div className="bg-site-backdrop text-stone-900 antialiased selection:bg-stone-200 selection:text-stone-900">
      <ScrollToTop />
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
