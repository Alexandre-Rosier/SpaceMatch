import React, { Component } from 'react'
import axios from 'axios'

import Card from './Card'

import './Jeucopy.css'
import './BoutonMatch.css'


export default class Jeucopy extends Component {
    state = {
        StarsData : [],
    }

    componentDidMount() {
        axios
                // .get('https://miadil.github.io/starwars-api/api/all.json')
                .get('https://simpsons-quotes-api.herokuapp.com/quotes')
                .then((res) => this.setState({StarsData : res.data}))
    }

    render() {
        const {StarsData}  = this.state
        // const RandomStars = StarsData.map[Math.floor(Math.random() * StarsData.map.lenght)]

        // document.body.innerHTML = RandomStars
        
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
                       {StarsData.map((item) => (
                            <Card {...item} key={item.id}/>
                        ))}  
                    </div>       
                </div> 
                <button id="buttonMatch">
                    Etes vous faits l'un pour l'autre ? 
                     <span id="hart">🌈💖🔥</span>
                </button>
            </div>
        )
    }
}
