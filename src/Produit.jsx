import BtnAjoutPanier from './BtnAjoutPanier';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Produit.scss';

export default function Produit({nom, id, etatPanier, prix}) {
  const [panier, setPanier] = etatPanier;

  function ajouterPanier() {
    console.log("Le panier : ", panier);
    if(panier[id]) {
      panier[id].qte++;
    }
    else {
      panier[id] = {nom: nom, prix: prix, qte: 1}
    }
    setPanier(JSON.parse(JSON.stringify(panier))); // {...panier}
  } 

  let qte = 0;
  let texte = "Ajouter au panier";
  let classeCss = "";
  if(panier[id]) {
    qte = panier[id].qte;
    texte = <AddCircleOutlineIcon />; // JSX = Javascript Syntax eXtension
    classeCss = "rouge";
  }

  return(
    <li className="Produit">
      <img src={'images-produits/' + id + '.webp'} alt=""/>
      <div className="info">
        <p className="nom">{nom}</p>
        <p className="prix">{prix}</p>
      </div>
      <BtnAjoutPanier onClick={ajouterPanier} qte={qte} texte={texte} classeCss={classeCss} />
    </li>
  );
}