import './Appli.scss';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>
      <PiedDePage />
    </div>
  );
}

export default Appli;
