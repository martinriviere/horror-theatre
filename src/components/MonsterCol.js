import React from 'react'
import './FightScreen.css'

const MonsterCol = (props) =>{
    return (
        <div className="monster" style={props.start ? {marginTop:'2000px'} : {marginTop:'0px'}}>
            <table>
                <tbody>
                    <tr>
                        <td>Puissance:</td>
                        <td className="score">1 / {props.att}</td>
                    </tr>
                    <tr>
                        <td>PV:</td>
                        <td className="score">{props.def}</td>
                    </tr>
                </tbody>
            </table>
            <img className="monsterImg" src={props.img} alt="#"/>
        </div>
    )
}

export default MonsterCol