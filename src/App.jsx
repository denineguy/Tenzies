import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every( die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every( die => die.value === firstValue)

    if(allHeld && allSameValue){
      setTenzies(true)
      console.log("You won")
    }
  })

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
    // setDice(allNewDice())
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  return (
    <div>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die--container">
          {diceElements}
        </div>
        <button className="die--roll" onClick={rollDice}>Roll</button>
      </main>
    </div>
  )
}