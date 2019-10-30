import React , {Component} from 'react'
import './FightScreen.css'
import PlayerCol from './PlayerCol'
import MonsterCol from './MonsterCol'
import axios from 'axios'
import ActionCard from './ActionCard'
import BG from '../images/fightBG.jpg'

class FightScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            isPlayerTurn: true,
            endGame:false,
            winner:'',
            playerAtt:10,
            playerDef:30,
            playerAction:"",
            playerRatio:"",
            playerCompteur:"",
            monsterAction:"",
            monsterRatio:"",
            monsterCompteur:"",
            monsterName:"",
            monsterImg:"",
            monsterAtt:"",
            monsterDef:""
        }
    }

    getMonster= ()=> {
        // Send the request
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
          // Extract the DATA from the received response
          .then(response => response.data)
          // Use this data to update the state
          .then(data => {
              let id = Math.floor(Math.random()*20)
            this.setState({
                monsterName: data.monsters[id].name,
                monsterImg: data.monsters[id].picture,
                monsterAtt: data.monsters[id].attack,
                monsterDef: data.monsters[id].defense,
            })
        });
    }

    changeTurn=()=>{
        this.setState({
            isPlayerTurn: !this.state.isPlayerTurn,
            endGame: false,
            playerAction:"",
            playerRatio:"",
            playerCompteur:"",
            monsterAction:"",
            monsterRatio:"",
            monsterCompteur:"",
        })
    }

    monsterAttack=()=>{
        let att = Math.ceil(Math.random()*this.state.monsterAtt)
        this.setState({
            monsterAction: `${this.state.monsterName} attaque!`,
            monsterCompteur: att,
            playerRatio: `${-att}pv`,
        })
        if (this.state.playerDef-att>=0) {
            this.setState({
            playerDef: this.state.playerDef-att,
            playerCompteur: this.state.playerDef
        })
        setTimeout(this.changeTurn, 2000)}
        else {
            this.setState({
                playerDef: 0,
                playerCompteur: 0,
                endGame: true,
                winner:`${this.state.monsterName} t'a vaincu...`
            })
        }
   
    }

    playerAttack=()=>{
        let att = Math.ceil(Math.random()*this.state.playerAtt)
        this.setState({
            playerAction: "Tu attaques!",
            playerCompteur: att,
            playerRatio:"",
            monsterRatio: `${-att}pv`,
        })
        if (this.state.monsterDef-att>=0) {
            this.setState({
            monsterDef: this.state.monsterDef-att,
            monsterCompteur: this.state.monsterDef
            })
            setTimeout(this.changeTurn, 2000)
            setTimeout(this.monsterAttack,3000)
        }
        else {
            this.setState({
                monsterDef: 0,
                monsterCompteur: 0,
                endGame: true,
                winner:`Tu as vaincu ${this.state.monsterName}!`
            })}
        
        
    }

    playerPowerUp=()=>{
        this.setState({
            playerAction: "Tu augmentes ta puissance!",
            playerAtt: this.state.playerAtt+2,
            playerRatio: '+2pv',
            playerCompteur: this.state.playerAtt
        })
        setTimeout(this.changeTurn,2000)
        setTimeout(this.monsterAttack,3000)
    }

    playerSoin=()=>{
        this.setState({
            playerAction: "Tu te soignes!",
            playerDef: this.state.playerDef+2,
            playerRatio: '+2',
            playerCompteur: this.state.playerDef
        })
        setTimeout(this.changeTurn,2000)
        setTimeout(this.monsterAttack,3000)
    }
    
    componentDidMount=()=>{
        this.getMonster()
    }

    render(){
        const{
            isPlayerTurn,
            endGame,
            winner,
            playerAtt,
            playerDef,
            playerAction,
            playerRatio,
            playerCompteur,
            monsterAction,
            monsterRatio,
            monsterCompteur,
            monsterName,
            monsterImg,
            monsterAtt,
            monsterDef
        }=this.state

        return(
            <div className='container' style={{backgroundImage:`url(${BG})`}}>
                {endGame && <div className='endGame' style={{backgroundImage:`url(${BG})`}}>
                    <p>{winner}</p>
                    <button>go back to the theater</button>
                    </div>}
                <PlayerCol
                    turn={isPlayerTurn}
                    att={playerAtt}
                    def={playerDef}
                    getAtt={this.playerAttack}
                    getPow={this.playerPowerUp}
                    getSoin={this.playerSoin}
                />
                <div className="fightZone">
                    <ActionCard
                        action={playerAction}
                        ratio={playerRatio}
                        compteur={playerCompteur}
                    />
                    <div className="separator"></div>
                    <ActionCard
                        action={monsterAction}
                        ratio={monsterRatio}
                        compteur={monsterCompteur}
                    />
                </div>
                <MonsterCol
                    name={monsterName}
                    img={monsterImg}
                    att={monsterAtt}
                    def={monsterDef}
                />
            </div>
        )
    }
}

export default FightScreen