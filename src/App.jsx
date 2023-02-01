import React from 'react'
import Die from './Die'


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

  const diceElements = dice.map(die => <Die value={die}/>)

  function allNewDice() {
    const newArray = [];
    for(let i = 0; i < 10; i++) {
        newArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return newArray;
  }

  function reRoll() {
    setDice(allNewDice())
  }

  return (
    <div>
        <main>
            <div className="die--container">
                {diceElements}
            </div>
            <button className="die--roll" onClick={reRoll}>Roll</button>
        </main>
    </div>
  )
}