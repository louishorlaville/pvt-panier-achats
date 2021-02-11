import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) {
  const [panier, setPanier] = props.etatPanier;
  
  // Calculer le nombre d'articles dans le panier
  // const panier = {
  //   prd0005: { prix: 19.5, qte: 1 },
  //   prd0002: { prix: 9.55, qte: 3 }
  // }
  // const nbArticlesDiff = Object.values(panier).length;
  const valeursPanier = Object.values(panier);
  
  // // console.log("Le tableau des valeurs du panier : ",valeursPanier);

  // let totalArticles = 0;
  // for (let i = 0; i < valeursPanier.length; i++) {
  //   totalArticles += valeursPanier[i].qte;
  // }

  // // Calcul du total des quantités avec reduce()
  // const totalArticles2 = valeursPanier.reduce(
  //   (valInit, valCourante) => valInit + valCourante.qte
  // , 0);
  // console.log("Total des articles avec reduce() : ", totalArticles2);

  return (
    <header className="Entete">
      <div className="logo">Magasin</div>
      <ul className="navPrincipale">
        <li>Produits</li>
        <li>À propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtilisateur">
        <li>
          <Badge badgeContent={valeursPanier.reduce((valInit, valCourante) => valInit + valCourante.qte, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <div className="sommairePanier">
            lalala
          </div>
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  )
}

export default Entete;