import React, { useState } from 'react'
const Header = (props) => {
  return [
    <h1>{props.header}</h1>
  ]
}
const App = () => {
  const header1 = 'give feedback'
  const header2 = 'statistics'
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={header1}/>

      <Header header={header2}/>
    </div>
  )
}

export default App
