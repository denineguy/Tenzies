import React from 'react'
import Die from './Die'


export default function App() {
  const value = Math.floor(Math.random() * 6) + 1
  return (
    <div>
        <main>
            <div className="die--container">
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
            </div>
        </main>
    </div>
  )
}