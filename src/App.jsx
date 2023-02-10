import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
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
        setSeconds(seconds + 1);        
      }, 1000);
    } else if(!isActive && seconds !== 0) {
      clearInterval(!interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds])

  const dieText = !tenzies && !isActive ? "Start Game" : "Roll Dice"

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
      setSeconds(0)
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
        <p>{isActive ? "true" : "false"}</p>
        <div>{seconds}</div>
        {/* <div className="die--roll_count">
          <span className={`die--counter`}>{count}</span>
        </div> */}
      </main>
    </div>
  )
}

// set the timer to 00:00
// set the innerHTML for each setting second to 0, minute to 0 and hour to 0
//


//Figure out how to start the game do I need two buttons or just one button
// if tenzies is false and isActive is false then start came

//if you reach 60seconds set it back to zero and start counting up on minutes
// use same logic for hours