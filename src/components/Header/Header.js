import React, {useState} from 'react';
import logo from '../../images/amazon_logo.png'
import './Header.css'
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {useTextWidth} from "@tag0/use-text-width";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    const [selectedCategorie, setSelectedCategorie] = useState("Toutes nos categories")
    const width = useTextWidth({text: selectedCategorie, font: "12px Arial"});
    return (
        <div className="Header__container">
            <img src={logo} className="logo"/>
            <div className="Header__localisation">
                <div className={"Header__placeIcon"}>
                    <PlaceOutlinedIcon fontSize="small"/>
                </div>
                <div className="Header__localisationText">
                    <p style={{color: "#ccc", fontSize: 'small'}}>Bonjour</p>
                    <p style={{color: "#fff", fontSize: 'medium', fontWeight: 'bold'}}>Entrez votre adresse</p>
                </div>
            </div>
            <div className="Header__searchBar">
                <select className="Header__dropDown" value={selectedCategorie}
                        onChange={(e) => {
                            setSelectedCategorie(e.target.value)
                        }}
                        style={{width: width + 24, fontSize: "12px", fontFamily: "Arial"}}>
                    <option>Toutes nos categories</option>
                    <option>sqddsq</option>
                    <option>jhgjgjg</option>
                    <option>wxcwxc</option>
                </select>
                <input className="search_input" type="text"/>
                <SearchIcon className="icon_search"/>
            </div>
            <div className="Header__option Header__dropDownOption">
                <span className="option__firstline">Bonjour, Identifiez-vous</span>
                <div className="ComptelisteArrow__container">
                    <span className="option__secondline">Compte et listes</span>
                    <ArrowDropDownIcon/>
                    <div className="Header__model">
                        <button className="model__button">
                            identifiez-vous
                        </button>
                        <div><span className="NouveauClient">Nouveau client ?</span> <span style={{fontSize:'12px'}}>Commencez ici. </span></div>
                        <hr className="line_break"/>
                        <div className="model__footer">
                            <div className="model__firstSection model__sectionOptions">
                                <div className="model__sectionHeader">Vos listes d'envies</div>
                                <div>Créer une liste</div>
                                <div>Trouver une liste</div>
                                <div>Liste de naissance</div>
                            </div>
                            <div className="lineAndTextContainer">
                                <div className="model__verticalline"></div>
                                <div className="model__sectionOptions">
                                    <div className="model__sectionHeader" >Votre compte</div>
                                    <div>Votre compte</div>
                                    <div>Vos commandes</div>
                                    <div>Vos recommendations</div>
                                    <div>Votre Prime Video</div>
                                    <div>Amazon Drive</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header__option">
                <span className="option__firstline">Retours</span>
                <span className="option__secondline">et Commandes</span>
            </div>
            <div>
                <ShoppingCartIcon className="Header__cartIcon"/>
                <span style={{color: "white"}}>0</span>
            </div>
        </div>
    );
};

export default Header;
