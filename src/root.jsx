import { useEffect } from 'react';
import { Meta, Links, Outlet, Scripts, useLocation, useRouteError, isRouteErrorResponse, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
// Self-hosted via Fontsource (bundled, no third-party font requests): editorial serif + handwritten accent
import '@fontsource-variable/fraunces/soft.css';
import '@fontsource-variable/fraunces/soft-italic.css';
import '@fontsource/caveat/latin-600.css';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export function meta() {
  return [
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
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
    <div className="bg-site-backdrop text-ink antialiased selection:bg-sun selection:text-ink">
      <ScrollToTop />
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="bg-site-backdrop text-ink antialiased selection:bg-sun selection:text-ink">
      <Navbar />
      <main id="content">
        <section className="scroll-mt-18 bg-paper-dots">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-26 md:py-32 text-center">
            {is404 && <p className="font-hand text-6xl sm:text-7xl leading-none text-coral-600 -rotate-3">404</p>}
            <h1 className="font-serif mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-ink text-balance">
              {is404 ? 'Page introuvable' : 'Une erreur est survenue'}
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              {is404
                ? "Zut ! La page que vous cherchez n'existe pas."
                : "Quelque chose s'est mal passé de notre côté. Réessayez ou revenez à l'accueil."}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-coral-600 shadow-offset
                px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                <span className="pb-0.5">Retour à l'accueil</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
