import React, { Component } from 'react'
import axios from 'axios'

import Card from './Card'

import './Jeucopy.css'

export default class Jeucopy extends Component {
    state = {
        StarsData : [],
    }

    componentDidMount() {
        axios
                .get('https://miadil.github.io/starwars-api/api/all.json')
                .then((res) => this.setState({StarsData : res.data}))
    }

    render() {
        const {StarsData}  = this.state

    //     const gameFood = test.filter((data) =>
    //     data["Catégorie Jeux"].includes(this.props.name)
    //     );
    //     const remainingGameFood = gameFood.slice(0);
    //     const randomTen = [];
    //     while (randomTen.length < 10)
    //     randomTen.push(
    //     remainingGameFood.splice(
    //     Math.floor(Math.random() * remainingGameFood.length),
    //     1
    //     )[0]
    //   );

        return (
            <div className="Jeu">
                <h1 className="TitreJeu">La roue de l'amour 💘 ?</h1>

                <div id="tableauJeu">
                    <div className="Card">
                       {StarsData.map((item) => (
                            <Card {...item} key={item.id}/>
                        ))}
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
}
