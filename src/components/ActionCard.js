import React from 'react'
import './FightScreen.css'

const ActionCard = (props) =>{
    return (
        <div className="actionCard">
            <h2>{props.action}</h2>
            <div className="displayCompteur">
                <h3 style={{fontSize:'64px'}}>{props.compteur}</h3>
                <p style={{fontSize:'32px'}}>{props.ratio}</p>
            </div>
        </div>
    )
}

export default ActionCard