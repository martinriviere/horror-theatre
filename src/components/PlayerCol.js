import React from 'react'
import './FightScreen.css'
import './PlayerCol.css'
import playerImage from '../images/playerAvatar.jpg'

const PlayerCol = (props) =>{

    return (
        <div className="player">
                    <img className="playerImg" src={playerImage} alt="player_Image"/>
                    <p>Puissance: {props.att}</p>
                    <p>PV: {props.def}</p>
                    <div className={props.turn ? 'buttonList' : 'buttonNone'}>
                        <button className="att"  onClick={props.getAtt}>Attaque!</button>
                        <button className="pow"  onClick={props.getPow}>Augmente ta puissance!</button>
                        <button className="soin"  onClick={props.getSoin}>Soigne toi!</button>
                    </div>
        </div>
    )
}

export default PlayerCol