import React, { Component } from 'react'
import './BoutonMatch.css'

export default class BoutonMatch extends Component {
    render() {
        return (
            <div>
                <button id="buttonMatch">
                    It's a match ! <span id="hart">🌈💖🔥</span>
                </button>
                <button id="buttonNoMatch">
                    It's a FIGHT ! <span id="hart">🔪💣🍆</span>
                </button>
            </div>
        )
    }
}
