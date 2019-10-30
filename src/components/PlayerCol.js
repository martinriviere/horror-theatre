import React from 'react'
import './FightScreen.css'

const PlayerCol = () =>{
    return (
        <div className="player">
                    <img className="playerImg" src="#" alt="#"/>
                    <p>Puissance: 12</p>
                    <p>Santé: 12</p>
                    <button>Attaquer</button>
                    <button>Augmenter puissance</button>
                    <button>Se soigner</button>
        </div>
    )
}

export default PlayerCol