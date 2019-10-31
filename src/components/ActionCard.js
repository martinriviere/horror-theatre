import React from 'react'
import './FightScreen.css'

const ActionCard = (props) =>{
    return (
        <div className="actionCard">
            <p className="action">{props.action}</p>
            <p className="valeur">{props.valeur}</p>
            <p className="consequence">{props.consequence}</p>
            <p className="resultat">{props.resultat}</p>
            <button onClick={props.valid} className={props.resultat!=="" ? "displayOn" : "displayOff"}>OK</button>
        </div>
    )
}

export default ActionCard