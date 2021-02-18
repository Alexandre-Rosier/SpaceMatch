import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
import axios from 'axios'

import Card from './Card'

import './Jeucopy.css'
import './BoutonMatch.css'

export default function Jeucopy () {
    const [StarsData, setStarsData] = useState ([""]);
    const [ImgRandom, setImgRandom] = useState (['']);

    useEffect(() => {

    async function fetchData(){
        const req = await axios.get("https://miadil.github.io/starwars-api/api/all.json")
        setStarsData(req.data)
        StarsData.map(star => (
            setImgRandom(star.image)
        ))
    }
    fetchData()
   
    },[])

     const random =Math.floor(Math.random() * StarsData.length)
    setImgRandom(StarsData[random].image)
    // console.log(ImgRandom)
        return (
            <div className="Jeu">
                <h1 className="TitreJeu">La roue de l'amour 💘 ?</h1>

                <div id="tableauJeu">
                    <div className="Card">
                     
                    </div> 
                    <p id="icon18">🔞</p>  
                    <div className="Card">
                        {/* {StarsData.map(starData => (
                            <img src={starData.image} alt="image"></img>
                        ))} */}
                    </div>       
                </div> 
                {/* pb pour lier action au boutton */}
                <button type="button" id="buttonMatch" >
                    Etes vous faits l'un pour l'autre ? 
                     <span id="hart">🌈💖🔥</span>
                </button>

                {/* <Link
                    to={{
                     pathname: "/Caro_Kev",
                     data: {
                      Datasurlespersos: this.props.location.data.Datasurlespersos,
                    },
                    }}
                 className="xxxxxxxxxxx"
                >
                 Let's go Fight
                </Link> */}

            </div>
        )
}

