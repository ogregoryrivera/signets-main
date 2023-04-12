import './Dossier.scss';
import couvertureDefaut from '../images/couverture-defaut.jpg';
import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import FrmDossier from './FrmDossier';
import { useState } from 'react';

export default function Dossier({ id, titre, couverture, couleur, dateModif, supprimerDossier, modifierDossier }) {
  // État d'ouverture du formulaire
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  return (
    // Remarquez l'objet JS donné à la valeur de l'attribut style en JSX, voir : 
    // https://reactjs.org/docs/dom-elements.html#style
    <article className="Dossier" style={{ backgroundColor: couleur }}>
      <div className="couverture">
        <IconButton className="tourner" aria-label="Tourner" disableRipple={true} size="small">
          <ThreeSixtyIcon />
        </IconButton>
        <img 
          src={couverture ? couverture : couvertureDefaut} 
          alt={titre} 
          onError={evt => evt.target.src = couvertureDefaut} 
        />
        <IconButton onClick={() => supprimerDossier(id)} className="supprimer" aria-label="supprimer" size="small">
          <ClearIcon />
        </IconButton>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {new Date(dateModif).toLocaleDateString('fr-CA', {dateStyle: 'long'})}</p>
        <IconButton
          onClick={() => setFrmDossierOuvert(true)} className="modifier" aria-label="modifier" size="small">
          <EditIcon />
        </IconButton>
        <FrmDossier
          ouvert={frmDossierOuvert}
          setOuvert={setFrmDossierOuvert}
          actionDossier={modifierDossier}
          id_p={id}
          titre_p={titre}
          couverture_p={couverture}
          couleur_p={couleur}
        />
      </div>
    </article>
  );
}