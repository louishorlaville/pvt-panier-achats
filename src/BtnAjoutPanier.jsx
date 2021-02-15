import { Badge } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';

import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props) {
  const [texte, setTexte] = useState("Ajouter au panier");
  const [qte, setQte] = useState(0);

  return (
    <Badge badgeContent={qte} color="primary">
      <button onClick={function(event) {props.onClick(); setTexte(<AddCircleOutlineIcon/>); setQte(qte+1); event.target.classList.add('rouge')}} className="BtnAjoutPanier">
        {texte}
      </button>
    </Badge>
  );
} 

