import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>        
        {tabProduits.map(prd => 
         <Produit nom={prd.nom} prix={prd.prix} id={prd.id} etatPanier={props.etatPanier} key={prd.id} />
        )}
      </ul>
    </div>
  );
}