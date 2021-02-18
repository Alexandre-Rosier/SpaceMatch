import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Jeu.css'

export default function Jeu ()  {
    const [StarsData, setStarsData] = useState("");

    const url = 'https://miadil.github.io/starwars-api/api/all.json';

    useEffect(() => {
       async function request () {
        const res = await axios.get(url)
        setStarsData(res.data)
       }
       request()
    },[])
// console.log(StarsData)
    return (
            <div className="Jeu">
                <h1 className="TitreJeu">La roue de l'amour 💘 ?</h1>

                <div id="tableauJeu">
                    <div className="Card">
                    <img className="ImageJeu" src={setStarsData[0].image} alt="Luke"/>
                    <div id="ligneJeu">{setStarsData[0].name}</div>  
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
