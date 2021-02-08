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
  const etatPanier = useState({});
  // console.log("etatPanier : ", etatPanier);
  // console.log("Premier élément ", etatPanier[0]);
  // console.log("Deuxième élément ", etatPanier[1]);
  
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

  // const etatConnexion = useState(false);
  // const connexion = etatConnexion[0];
  // const setConnexion = etatConnexion[1];

  const [connexion, setConnexion] = useState(false); // Destructuring Arrays

  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>
      <PiedDePage />
    </div>
  );
}