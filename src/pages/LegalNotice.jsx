import { Link } from 'react-router-dom';

export default function LegalNotice() {
  return (
    <section className="scroll-mt-18">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <h1 className="font-mono text-2xl sm:text-3xl text-white">Mentions légales</h1>

        <div className="mt-8 space-y-8 text-slate-300/90 leading-relaxed">
          <div>
            <h2 className="font-mono text-lg text-teal-300">Éditeur du site</h2>
            <p className="mt-2">
              Michaël Jongeau — Entrepreneur individuel (auto-entrepreneur)
              <br />
              SIRET : 99458742600010
              <br />
              Adresse : Rochefort (17), France
              <br />
              Email :{' '}
              <a href="mailto:jongeau.m@gmail.com" className="text-teal-300 hover:text-teal-100">
                jongeau.m@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-mono text-lg text-teal-300">Directeur de la publication</h2>
            <p className="mt-2">Michaël Jongeau</p>
          </div>

          <div>
            <h2 className="font-mono text-lg text-teal-300">Hébergement</h2>
            <p className="mt-2">
              Netlify, Inc.
              <br />
              2325 3rd Street, Suite 296, San Francisco, California 94107, États-Unis
              <br />
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-100"
              >
                netlify.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-mono text-lg text-teal-300">Propriété intellectuelle</h2>
            <p className="mt-2">
              L'ensemble des contenus présents sur ce site (textes, visuels, code) est la propriété de Michaël Jongeau,
              sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-lg text-teal-300">Données personnelles</h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre
              demande et ne sont ni cédées ni utilisées à des fins commerciales. Vous pouvez demander leur suppression à
              tout moment en écrivant à{' '}
              <a href="mailto:jongeau.m@gmail.com" className="text-teal-300 hover:text-teal-100">
                jongeau.m@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-md border border-slate-700/70 bg-slate-900/60
          px-4 py-2 text-sm text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
          </svg>
          <span className="pb-0.5">Retour à l'accueil</span>
        </Link>
      </div>
    </section>
  );
}
