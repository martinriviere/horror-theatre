import React from 'react'
import './FightScreen.css'

const MonsterCol = (props) =>{
    return (
        <div className="monster">
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
            <img className="monsterImg" src={props.img} alt="#"/>
        </div>
    )
}

export default MonsterCol