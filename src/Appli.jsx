import './Appli.scss';
import {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import Contact from './Contact';
import Apropos from './Apropos'
import Accueil from './Accueil'

export default function Appli() {
  const [compteur, setCompteur] = useState(0);

  // Gérer l'état avec les "React Hooks"
  // useState va créer une variable d'état initialisée à {}
  // const etatPanier = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('panier')) || {};
  //   /*
  //   let panierDansLS = window.localStorage.getItem('panier');
  //   if(panierDansLS !== null) {
  //     return JSON.parse(panierDansLS);
  //   }
  //   else {
  //     return {};
  //   }*/
  // });

  // const [panier] = etatPanier;

  // Sauvegarder l'état du panier dans LocalStorage
  // Corriger avec useEffect() (hook)
  // useEffect(() => window.localStorage.setItem('panier', JSON.stringify(panier)), [panier]);
  
  const etatPanier = useLocalStorageState({}, "panier");

  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <Switch>
          <Route path="/" component={Accueil} exact/>
          <Route path="/nos-produits">
            <ListeProduits etatPanier={etatPanier}/>
          </Route>
          <Route path="/a-propos">
            <Apropos/>
          </Route>
          <Route path="/contactez-nous" component={Contact}/>
        </Switch>
      </section>
      <PiedDePage />
    </div>
  );
}