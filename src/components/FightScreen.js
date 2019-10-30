import React , {Component} from 'react'
import './FightScreen.css'
import PlayerCol from './PlayerCol'
import MonsterCol from './MonsterCol'

class FightScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className='container'>
                <PlayerCol/>
                <div className="fightZone">
                    <div className="playerBoard"></div>
                    <div className="separator"></div>
                    <div className="monsterBoard"></div>
                </div>
                <MonsterCol/>
            </div>
        )
    }
}

export default FightScreen