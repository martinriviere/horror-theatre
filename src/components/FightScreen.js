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
            playerAtt:8,
            playerAttMin:0,
            playerDef:20,
            action:"",
            valeur:"",
            consequence:"",
            resultat:"",
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
            action:"",
            valeur:"",
            consequence:"",
            resultat:""
        })
        this.state.isPlayerTurn && setTimeout(this.monsterAttack, 1000)
    }

    monsterAttack=()=>{
        let att = Math.ceil(Math.random()*this.state.monsterAtt)
        this.setState({
            action: `${this.state.monsterName} attaque!`,
            valeur: att,
            consequence: `tu reçois ${-att} points de dégats`,
        })
        if (this.state.playerDef-att>=0) {
            this.setState({
            playerDef: this.state.playerDef-att,
            resultat: `Il te reste ${this.state.playerDef-att}pv`
        })
        }
        else {
            this.setState({
                playerDef: 0,
                resultat: `Tu es KO`,
                endGame: true,
                winner:`${this.state.monsterName} t'a vaincu...`
            })
        }
   
    }

    playerAttack=()=>{
        let att = Math.ceil(Math.random() * (this.state.playerAtt - this.state.playerAttMin + 1) + this.state.playerAttMin)
        this.setState({
            action: "Tu attaques!",
            valeur: att,
            consequence: `Tu infliges ${att} points de dégats`,
        })
        if (this.state.monsterDef-att>=0) {
            this.setState({
            monsterDef: this.state.monsterDef-att,
            resultat: `${this.state.monsterName} tombe a ${this.state.monsterDef-att}pv`
            })
            
        }
        else {
            this.setState({
                monsterDef: 0,
                resultat: `Tu as vaincu ${this.state.monsterName}`,
                endGame: true,
                winner:`Tu as vaincu ${this.state.monsterName}!`
            })}
        
        
    }

    playerPowerUp=()=>{
        let pUp = Math.ceil(Math.random()*3)
        this.setState({
            action: "Tu augmentes ta puissance!",
            valeur: pUp,
            playerAtt: this.state.playerAtt+pUp,
            playerAttMin: this.state.playerAttMin+pUp,
            consequence: `Tu reçois ${pUp} points d'attaque`,
            resultat: `Ta puissance d'attaque est de ${this.state.playerAtt+pUp}`
        })
    }

    playerSoin=()=>{
        let soin = Math.ceil(Math.random()*3)
        this.setState({
            action: "Tu te soignes!",
            valeur: soin,
            playerDef: this.state.playerDef+soin,
            consequence: `Tu reçois ${soin} points de soin`,
            resultat: `Tu as ${this.state.playerDef+2}pv`
        })
    }
    
    componentDidMount=()=>{
        this.getMonster()
    }

    render(){
        const{
            isPlayerTurn,
            endGame,
            winner,
            action,
            valeur,
            consequence,
            resultat,
            playerAtt,
            playerAttMin,
            playerDef,
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
                    attMin={playerAttMin}
                    def={playerDef}
                    getAtt={this.playerAttack}
                    getPow={this.playerPowerUp}
                    getSoin={this.playerSoin}
                />
                <div className="fightZone">
                    <ActionCard
                        action={action}
                        valeur={valeur}
                        consequence={consequence}
                        resultat={resultat}
                        valid={this.changeTurn}
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