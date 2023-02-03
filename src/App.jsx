import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

  const diceElements = dice.map(die => <Die value={die.value}/>)

  function allNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++) {
        newDice.push({
          value: Math.floor(Math.random() * 6) + 1,
          isHeld: false,
          id: nanoid()
        })
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <div>
        <main>
            <div className="die--container">
                {diceElements}
            </div>
            <button className="die--roll" onClick={rollDice}>Roll</button>
        </main>
    </div>
  )
}