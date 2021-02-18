import React from 'react'

import BoutonMatch from '../components/BoutonMatch'
import Jeucopy from '../components/Jeucopy'

import './Game.css'

export default function Game () {
  
        return (
            <div className="BodyJeu">
                <Jeucopy />
                <BoutonMatch />
            </div>
        )
    }

