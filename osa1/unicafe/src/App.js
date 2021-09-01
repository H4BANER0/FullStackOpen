import React, { useState } from 'react'

const sum = (p1,p2) => {
  return p1+p2
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const average = 0
  const [pos, setPos] = useState(0)
  
  const header1 = 'give feedback'
  const header2 = 'statistics'
  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>{header1}</h1>
      <button onClick={handleGoodClick}>
        good
      </button>
      <button onClick={handleNeutralClick}>
        neutral
      </button>
      <button onClick={handleBadClick}>
        bad
      </button>
      <h1>{header2}</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good-bad)/all}</p>
      <p>positive {good/all*100} %</p>
    </div>
  )
}

export default App;
