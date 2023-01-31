import React from 'react'
import Die from './Die'


export default function App() {
  function allNewDice() {
    const newArray = [];
    for(let i = 0; i < 10; i++) {
        newArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return newArray;
}
console.log(allNewDice())
  return (
    <div>
        <main>
            <div className="die--container">
                <Die value="1"/>
                <Die value="2"/>
                <Die value="3"/>
                <Die value="4"/>
                <Die value="5"/>
                <Die value="6"/>
                <Die value="1"/>
                <Die value="2"/>
                <Die value="3"/>
                <Die value="4"/>
            </div>
        </main>
    </div>
  )
}