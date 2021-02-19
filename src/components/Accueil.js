import React, {useState} from 'react';
import './Accueil.css';
import {Link} from "react-router-dom";

function Accueil () {
    const [start, setStart]= useState("")
    const handleClick = () => {
        setStart("c'est parti")
    }

    const submit = (e) => {
        e.preventDefault();
          }

        return (
            <div className="first-background">
                <div className="accueil-background">
                    <div className="accueil-titre">
                      
                        <h1 className="titre-h1">TOURNEZ MENAGE</h1>
                  
                    </div>
                    <div className="accueil-btn">
                    <form onSubmit={submit}>
                        <Link to="/game">
                            <input onClick = {handleClick} type="submit" value="GO" className="HomeBtnStart" />
                        </Link>
                        <div className="message-start">
                            {start}
                        </div>
                    </form>
            </div>

            <div className="accueil-texte">
                <p className="shake shake-crazy">LE JEU : tu niques ou tu meurs !!!</p>
            </div> 
                
            <div className="accueil">
                <div className="accueil-image">
                    <img src="images/tournermanège1.svg" alt="photos.meufs" />
                </div>
            </div>
                </div>
            </div>
        )
    }


export default Accueil;
