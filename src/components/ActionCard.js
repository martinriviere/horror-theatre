import React from 'react'
import './FightScreen.css'

const ActionCard = (props) =>{
    return (
        <div className="actionCard">
            <p className={props.action!=="" ? "action" : ""}>{props.action}</p>
            <p className={props.action!=="" ?"valeur" : ""}>{props.valeur}</p>
            <p className={props.action!=="" ?"consequence" : ""}>{props.consequence}</p>
            <p className={props.action!=="" ?"resultat" : ""}>{props.resultat}</p>
            <button onClick={props.valid} className={props.resultat!=="" ? "displayOn" : "displayOff"}>OK</button>
        </div>
    )
}

export default ActionCard