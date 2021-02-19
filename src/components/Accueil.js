import React, {useState} from 'react';
import './Accueil.css';

function Accueil () {
    const [start, setStart]= useState("")
    const handleClick = () => {
        setStart("c'est parti")
    }

    const submit = (e) => {
        e.preventDefault();
            //alert ("c'est parti");
          }

        return (
            <div className="first-background">
                <audio src="musique/les-inconnus-ingrid-est-ce-que-tu-baises.mp3" controls></audio>
                <div className="accueil-background">
                    <div className="accueil-titre">
                        <img src="images/coeur1.jpeg" alt="coeur" className="coeur1" />
                            <h1 className="titre-h1">TOURNEZ MENAGE</h1>
                            <img src="images/flingue.jpg" alt="flingue" className="flingue" />
            </div>

            <div className="accueil-btn">
                    <form onSubmit={submit}>
                        <input onClick = {handleClick} type="submit" value="GO" className="start" />
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
