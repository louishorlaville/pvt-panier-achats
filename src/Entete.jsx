import './Entete.scss';

function Entete(props) {
  return (
    <header className="Entete">
      <div className="logo">Magasin</div>
      <ul className="navPrincipale">
        <li>Produits</li>
        <li>À propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtilisateur">
        <li>Panier d'achats</li>
        <li>Mon compte</li>
      </ul>
    </header>
  )
}

export default Entete;