import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {

  // let tab = [1,2,3];
  // let tabDouble = tab.map(x => 2*x);
  // console.log(tabDouble);

  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        {/* On va générer les produits à partir de la 
          structure obtenue du fichier JSON des produits */}
        
        {tabProduits.map(prd => 
         <Produit key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id} />
        )}
      </ul>
    </div>
  );
}