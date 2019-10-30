import React from 'react'
import './FightScreen.css'
import './PlayerCol.css'
import playerImage from '../images/playerAvatar.jpg'

const PlayerCol = (props) =>{

    return (
        <div className="player">
                    <img className="playerImg" src={playerImage} alt="player_Image"/>
                    <table>
                        <tr>
                            <td>Puissance:</td>
                            <td className="score">{props.att}</td>
                        </tr>
                        <tr>
                            <td>PV:</td>
                            <td className="score">{props.def}</td>
                        </tr>
                    </table>
                    <div className={props.turn ? 'buttonList' : 'buttonNone'}>
                        <button className="att"  onClick={props.getAtt}>Attaque!</button>
                        <button className="pow"  onClick={props.getPow}>Augmente ta puissance!</button>
                        <button className="soin"  onClick={props.getSoin}>Soigne toi!</button>
                    </div>
        </div>
    )
}

export default PlayerCol