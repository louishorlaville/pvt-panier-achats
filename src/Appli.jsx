import './Appli.scss';
import {useState} from 'react';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

export default function Appli() {
  // Exemple de la structure panier
  // const panier = {
  //   prd0005: { prix: 19.5, qte: 1 },
  //   prd0002: { prix: 9.55, qte: 3 }
  // }

  // Gérer l'état avec les "React Hooks"
  // useState va créer une variable d'état initialisée à {}
  const etatPanier = useState(() => {
    let panierDansLS = window.localStorage.getItem('panier');
    if(panierDansLS !== null) {
      return JSON.parse(panierDansLS);
    }
    else {
      return {};
    }
  });

  // Sauvegarder l'état du panier dans LocalStorage
  window.localStorage.setItem('panier', JSON.stringify(etatPanier[0]));
  
  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier} />
      </section>
      <PiedDePage />
    </div>
  );
}