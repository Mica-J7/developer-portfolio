import { useEffect } from 'react';
import { Meta, Links, Outlet, Scripts, useLocation, useRouteError, isRouteErrorResponse, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
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

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="bg-site-backdrop text-stone-900 antialiased selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <main id="content">
        <section className="scroll-mt-18">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-26 md:py-32 text-center">
            {is404 && (
              <p className="font-archivo text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none text-terracotta-600">
                404
              </p>
            )}
            <h1 className="font-archivo mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[#2d343b] text-balance">
              {is404 ? 'Page introuvable' : 'Une erreur est survenue'}
            </h1>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              {is404
                ? "Zut ! La page que vous cherchez n'existe pas."
                : "Quelque chose s'est mal passé de notre côté. Réessayez ou revenez à l'accueil."}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-sage-600 shadow-soft
                px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
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
