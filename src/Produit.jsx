import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {

  //console.log("Props de Produit", props);

  const [panier, setPanier] = props.etatPanier;
  // panier = {
  //   prd0005: { prix: 19.5, qte: 1 },
  //   prd0002: { prix: 9.55, qte: 3 }
  // }

  const {nom, prix, id} = props;

  function ajouterPanier() {
    if(panier[id]) {
      panier[id].qte++;
    }
    else {
      panier[id] = {nom: nom, prix: prix, qte: 1}
    }
    //console.log("Le panier d'achats (Objet) : ",panier);
    //console.log("Le panier d'achats (Tab des valeurs", Object.values(panier));
    
    setPanier(JSON.parse(JSON.stringify(panier))); // {...panier}
  } 

  return(
    <li className="Produit">
      <img src={'images-produits/' + props.id + '.webp'} alt=""/>
      <div className="info">
        <p className="nom">{props.nom}</p>
        <p className="prix">{props.prix}</p>
      </div>
      <BtnAjoutPanier onClick={ajouterPanier} />
    </li>
  );
}