import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function meta() {
  return [
    { title: 'Conditions Générales de Vente | Michaël Jongeau' },
    {
      name: 'description',
      content: 'Conditions générales de vente applicables aux prestations de Michaël Jongeau, développeur web freelance.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/conditions-generales-de-vente' },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function Terms() {
  return (
    <section className="scroll-mt-18">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <h1 className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[#2d343b] text-balance">
          Conditions Générales de Vente
        </h1>

        <div className="mt-8 space-y-8 text-stone-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">1. Objet</h2>
            <p className="mt-2">
              Les présentes conditions générales de vente s'appliquent à toutes les prestations proposées par
              Michaël Jongeau, développeur web freelance (entrepreneur individuel, SIRET : 99458742600010) :
              création de sites web et d'applications sur mesure, accompagnement mensuel (maintenance,
              hébergement, suivi SEO/SEA) et prestations d'optimisation ponctuelles. Toute commande implique
              l'acceptation sans réserve des présentes conditions. Les présentes conditions générales de vente
              s'appliquent exclusivement aux clients agissant dans le cadre de leur activité professionnelle.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">2. Devis et commande</h2>
            <p className="mt-2">
              Chaque projet fait l'objet d'un devis gratuit et personnalisé, établi après un premier échange sur
              les besoins du client. Le devis précise le prix, le périmètre de la prestation et les modalités de
              paiement. La commande est considérée comme ferme à réception du devis signé (ou de son acceptation
              écrite) et du versement de l'acompte prévu.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">3. Prix</h2>
            <p className="mt-2">
              Les tarifs indiqués sur le site sont donnés à titre indicatif ; le prix définitif figure sur le
              devis. Les prix sont exprimés en euros. TVA non applicable, art. 293 B du CGI.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">4. Modalités de paiement</h2>

            <h3 className="mt-4 font-semibold text-[#2d343b]">Prestations ponctuelles</h3>
            <p className="mt-2">
              Un acompte est demandé à la validation du devis, le solde étant réglé à la livraison du projet. Le
              montant de l'acompte est précisé sur chaque devis. Le solde doit être réglé dans un délai de 30
              jours à compter de la réception de la facture. Tant que le solde n'est pas intégralement réglé, la
              livraison finale (mise en ligne, transfert des accès et du code source) peut être différée.
            </p>
            <p className="mt-2">
              En cas de retard de paiement, une pénalité calculée à un taux égal à 3 fois le taux d'intérêt légal
              en vigueur ainsi qu'une indemnité forfaitaire de 40&nbsp;€ pour frais de recouvrement sont
              applicables de plein droit, conformément à l'article L441-10 du Code de commerce. En cas de
              non-paiement persistant après mise en demeure restée sans effet, toute prestation en cours ou à
              venir pourra être suspendue, et le recouvrement de la créance pourra être engagé par voie
              contentieuse.
            </p>

            <h3 className="mt-4 font-semibold text-[#2d343b]">
              Abonnements mensuels (maintenance, hébergement, suivi SEO/SEA)
            </h3>
            <p className="mt-2">
              Le cycle de facturation démarre à la date de début de la prestation, et non au 1ᵉʳ du mois
              calendaire. La facture correspondant à un mois travaillé est émise à l'issue de ce mois et doit être
              réglée dans un délai de 30 jours à compter de sa réception. Par exemple, pour une prestation
              débutant le 14 d'un mois, le mois travaillé se termine le 13 du mois suivant, et la facture est
              émise le 14.
            </p>
            <p className="mt-2">
              Ces abonnements sont sans engagement de durée et résiliables à tout moment, sans préavis, par
              simple demande écrite (email suffisant). La résiliation prend toutefois effet à la fin du cycle
              mensuel en cours : tout mois entamé reste dû dans son intégralité, y compris en cas d'arrêt de la
              prestation en cours de mois. Sauf résiliation, l'abonnement est reconduit automatiquement chaque
              mois.
            </p>
            <p className="mt-2">
              En cas de retard de paiement, une pénalité calculée à un taux égal à 3 fois le taux d'intérêt légal
              en vigueur ainsi qu'une indemnité forfaitaire de 40&nbsp;€ pour frais de recouvrement sont
              applicables de plein droit, conformément à l'article L441-10 du Code de commerce. En cas de
              non-paiement persistant après mise en demeure restée sans effet, la prestation pourra être
              suspendue jusqu'à régularisation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">5. Délais de réalisation</h2>
            <p className="mt-2">
              Les délais de livraison sont communiqués à titre indicatif dans le devis et dépendent notamment de
              la réactivité du client dans la fourniture des contenus et validations nécessaires à l'avancement
              du projet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">6. Propriété intellectuelle</h2>
            <p className="mt-2">
              Le code source et les livrables développés dans le cadre d'une prestation sont transférés en
              pleine propriété au client à réception du paiement intégral (acompte et solde). Jusqu'au paiement
              complet, Michaël Jongeau reste titulaire des droits sur les livrables.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">7. Annulation</h2>
            <p className="mt-2">
              En cas d'annulation du projet par le client après versement de l'acompte, celui-ci reste acquis et
              ne peut faire l'objet d'un remboursement, en compensation du temps déjà consacré au projet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">8. Garantie après livraison</h2>
            <p className="mt-2">
              Une période de garantie de 30 jours à compter de la livraison est incluse pour la correction
              gratuite des bugs et anomalies constatés, hors ajout de nouvelles fonctionnalités. Au-delà de
              cette période, toute intervention relève d'un contrat de maintenance ou d'un nouveau devis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">9. Responsabilité</h2>
            <p className="mt-2">
              Michaël Jongeau s'engage à réaliser les prestations avec soin et selon les règles de l'art. Sa
              responsabilité ne saurait être engagée en cas de dommages indirects, de perte de données non
              sauvegardées par le client, ou de dysfonctionnement lié à un service tiers (hébergeur, API
              externe, etc.) indépendant de sa volonté.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2d343b]">10. Litiges et droit applicable</h2>
            <p className="mt-2">
              Les présentes conditions sont soumises au droit français. En cas de litige, les parties
              s'efforceront de trouver une solution amiable avant tout recours contentieux. À défaut d'accord,
              le litige sera porté devant les juridictions compétentes.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-stone-600">Dernière mise à jour : 16 septembre 2026</p>

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
