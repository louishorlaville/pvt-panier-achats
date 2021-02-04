import './ListeProduits.css';
import Produit from "./Produit";

export default function ListeProduits(props) {
  return (
    <>
      <h2>Produits disponibles</h2>
      <ul className="ListeProduits">
        <Produit nom="T-Shirt col rond" prix="19.99" id="prd0004" />
        <Produit nom="Chandail à manche longue" prix="25.50" id="prd0002" />
      </ul>
    </>
  );
}