import React from 'react'

import './Jeu.css'


export default function Jeu ()  {
        return (
            <div className="Jeu">
                <h1 className="TitreJeu">La roue de l'amour 💘 ?</h1>

                <div id="tableauJeu">
                    <div className="Card">
                    <img className="ImageJeu" src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg" alt="Luke"/>
                    <div id="ligneJeu">Name Player</div>  
                    </div> 
                    <p id="icon18">🔞</p>  
                    <div className="Card">
                    <img className="ImageJeu" src="https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg" alt= "Alien" />
                    <div id="ligneJeu">Name Player</div>  
                    </div>   
                </div> 
            </div>
        )
    }

