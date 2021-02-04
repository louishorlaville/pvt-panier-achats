import './ListeProduits.css';
import Produit from "./Produit";
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {

  let tab = [1,2,3];
  let tabDouble = tab.map(function(x){return 2*x}); //[2,4,6]

  return (
    <>
      <h2>Produits disponibles</h2>
      <ul className="ListeProduits">
        {/* On va générer les produits à partir de la 
          structure obtenue du fichier JSON des produits */}
        
        {tabProduits.map(prd => 
          <Produit nom={prd.nom} prix={prd.prix} id={prd.id} />
        )}
      </ul>
    </>
  );
}