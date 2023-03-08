import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [timer, setTimer] = React.useState(0)
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every( die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every( die => die.value === firstValue)
    let interval = null;

    if(allHeld && allSameValue){
      setTenzies(true)
      console.log("You won")
      setIsActive(false)
    } 

    if(isActive) {
      interval = setInterval(() => {
        setTimer(timer + 1);        
      }, 1000);
    } else if(!isActive && timer !== 0) {
      clearInterval(!interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer])

  const dieText = !tenzies && !isActive ? "Start Game" : "Roll Dice";

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice;
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  const diceElements = dice.map(die => (
  <Die 
    key={die.id}
    value={die.value}
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}/>
  ))

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice)
      setCount(0)
      setIsActive(true)
      setTimer(0)
    } else {
      setCount(count + 1)
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
      setIsActive(true)
    }
  }


  return (
    <div>
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die--container">
          {diceElements}
        </div>
        <button 
          className="die--roll" 
          onClick={rollDice}>
            {tenzies ? "New Game" : dieText}
        </button>
        <p className="die--roll_count_title">Roll Count: {count}</p>
        <div>{formatTime()}</div>
        {/* <p>{isActive ? "true" : "false"}</p> */}
      </main>
    </div>
  )
}
