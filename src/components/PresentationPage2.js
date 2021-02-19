import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import'./PresentationPage2.css';

const Background = styled.section`
        background-image: url("./imageAlex/BackgroundPresPage2.png");
        background-size: cover;
        background-position: center;
        width: 700px;
        height: 600px;
        position:relative`

export default function PresPage2() {
    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(true)
    const [visible3, setVisible3] = useState(true)

    useEffect(()=> {
        setTimeout(() => {
            setVisible1(!visible1)
            setVisible2(!visible2)
        },5000)
        setTimeout(() => {
            setVisible2(visible2)
            setVisible3(!visible3)
        },10000)
    },[])

    return(
        <div className="container-pres-page2">
            <Background className="background-pres-page2">
                <div className={visible1 ? "presentateur1" : "invisible"}>
                    <img className="bulle-pres1" src="imageAlex/bulle.png" alt="texte présentateur"/>
                    <p className="text-p1">Bienvenue dans tournez manège!</p>
                </div>
                <div className={visible2 ? "invisible" : "presentateur2"}>
                    <img className="bulle-pres2" src="imageAlex/bulle.png" alt="texte présentateur"/>
                    <p className="text-p2">Que se passerait-il si les héros de Futurama pouvaient rencontrer les héros de star wars</p>
                </div>
                <div className={visible3 ? "invisible" : "presentateur3"}>
                    <img className="bulle-pres3" src="imageAlex/bulle.png" alt="texte présentateur"/>
                    <p className="text-p3">Pour le découvrir, simulons ces rencontres!</p>
                </div>
            </Background>
        </div>
    )
}