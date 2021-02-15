import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';

function Entete({etatPanier}) {
  const [panier] = etatPanier;
  const valeursPanier = Object.values(panier);

  const [sommaireAffichable, setSommaireAffichable] = useState(false);

  function basculerAffichageSommairePanier() {
    setSommaireAffichable(!sommaireAffichable);
  }

  return (
    <header className="Entete">
      <div className="logo">Magasin</div>
      <ul className="navPrincipale">
        <li>Produits</li>
        <li>À propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtilisateur">
        <li>
          <Badge onClick={basculerAffichageSommairePanier} badgeContent={valeursPanier.reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier panier={panier} affichable={sommaireAffichable} />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  )
}

export default Entete;