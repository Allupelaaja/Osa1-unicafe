import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Stats = (props) => (
  <div>
    <p>{props.name1} {props.value1}</p>
    <p>{props.name2} {props.value2}</p>
    <p>{props.name3} {props.value3}</p>
  </div>
  
)

const OmaButton = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headerFeedback = "give feedback"
  const headerStats = "statistics"
  const types = [
    "good", "neutral", "bad"
  ]

  return (
    <div>
      <Header name={headerFeedback}/>
      <OmaButton onClick ={() => setGood(good + 1)} text={types[0]}/>
      <OmaButton onClick ={() => setNeutral(neutral + 1)} text={types[1]}/>
      <OmaButton onClick ={() => setBad(bad + 1)} text={types[2]}/>
      <Header name={headerStats}/>
      <Stats name1={types[0]} name2={types[1]} name3={types[2]} value1={good} value2={neutral} value3={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)