import React from 'react'
import './FightScreen.css'

const MonsterCol = (props) =>{
    return (
        <div className="monster">
            <h4>{props.name}</h4>
            <p>Puissance: {props.att}</p>
            <p>PV: {props.def}</p>
            <img className="monsterImg" src={props.img} alt="#"/>
        </div>
    )
}

export default MonsterCol