import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function meta() {
  return [
    { title: 'Mentions légales & Confidentialité | Michaël Jongeau' },
    {
      name: 'description',
      content: 'Mentions légales et politique de confidentialité du site de Michaël Jongeau, développeur web freelance.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/mentions-legales' },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function LegalNotice() {
  return (
    <section className="scroll-mt-18">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <h1 className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[#2d343b] text-balance">
          Mentions légales &amp; Confidentialité
        </h1>

        <div className="mt-8 space-y-8 text-stone-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">Éditeur du site</h2>
            <p className="mt-2">
              Michaël Jongeau — Entrepreneur individuel (auto-entrepreneur)
              <br />
              SIRET : 99458742600010
              <br />
              Adresse : Rochefort (17), France
              <br />
              Email :{' '}
              <a href="mailto:jongeau.m@gmail.com" className="text-stone-700 underline hover:text-stone-900">
                jongeau.m@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">Directeur de la publication</h2>
            <p className="mt-2">Michaël Jongeau</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">Hébergement</h2>
            <p className="mt-2">
              Netlify, Inc.
              <br />
              2325 3rd Street, Suite 296, San Francisco, California 94107, États-Unis
              <br />
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 underline hover:text-stone-900"
              >
                netlify.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">Propriété intellectuelle</h2>
            <p className="mt-2">
              L'ensemble des contenus présents sur ce site (textes, visuels, code) est la propriété de Michaël Jongeau,
              sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">Données personnelles</h2>
            <p className="mt-2">
              Le responsable du traitement des données est Michaël Jongeau. Les informations transmises via le
              formulaire de contact (nom, email, message) sont utilisées uniquement pour répondre à votre demande et
              ne sont ni cédées ni utilisées à des fins commerciales.
            </p>
            <p className="mt-2">
              Ce traitement est fondé sur votre consentement, recueilli lors de l'envoi du formulaire. Les données
              sont conservées pendant une durée maximale de 6 mois, puis supprimées.
            </p>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos
              données, que vous pouvez exercer à tout moment en écrivant à{' '}
              <a href="mailto:jongeau.m@gmail.com" className="text-stone-700 underline hover:text-stone-900">
                jongeau.m@gmail.com
              </a>
              . Vous disposez également du droit d'introduire une réclamation auprès de la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 underline hover:text-stone-900"
              >
                CNIL
              </a>{' '}
              si vous estimez que vos droits ne sont pas respectés.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">Cookies</h2>
            <p className="mt-2">
              Ce site n'utilise aucun cookie de suivi, de mesure d'audience ou publicitaire. Aucun consentement n'est
              donc requis.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-stone-600">Dernière mise à jour : 25 août 2026</p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border-2 border-sage-600 bg-white
            px-4 py-2 text-sm font-semibold text-sage-600 transition-colors hover:bg-sage-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400/70"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="pb-0.5">Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
