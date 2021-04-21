import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './SubHead.css'

const SubHead = () => {
    return (
        <div className="SubHeader__container">
            <div className="SubHeader__firstSectionContainer">
                <div className="Subheader__firstsection">
                    <MenuIcon className="menuIcon"/>
                    <div className="toutes">Toutes</div>
                </div>
                <div className="SubHeader__firstsectionText">
                    <div>Meilleures Ventes</div>
                    <div>Amazon Basics</div>
                    <div>Derniéres Nouveautés</div>
                    <div>Prime</div>
                    <div className="ventes">Ventes Flash</div>
                    <div className="service">Service Client</div>
                    <div className="livres">Livres</div>
                    <div className="cuisine">Cuisine et Maison</div>
                    <div className={"high"}>High-Tech</div>
                    <div className="informatique">Informatique</div>
                </div>
            </div>
            <div className="Subheader__secondsection">
                <PlayArrowIcon className="playArrowIcon"/>
                <div className="primeVideo">Prime Video</div>
                <div className="SubHeader__verticalline"></div>
                <div style={{fontSize:"20px"}}>Essai gratuit de 30 jours</div>
            </div>

        </div>
    );
};

export default SubHead;
