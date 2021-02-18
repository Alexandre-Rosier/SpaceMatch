import React from 'react'

import BoutonMatch from '../components/BoutonMatch'
import Jeu from '../components/Jeu'

import './Game.css'

export default function Game () {
  
        return (
            <div className="BodyJeu">
                <Jeu />
                <BoutonMatch />
            </div>
        )
    }

