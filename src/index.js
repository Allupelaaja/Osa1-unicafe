import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Statistics = (props) => {
  if(props.value1 === 0 && props.value2 === 0 && props.value3 === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text={props.types[0]} value = {props.value1}/>
          <StatisticLine text={props.types[1]} value = {props.value2}/>
          <StatisticLine text={props.types[2]} value = {props.value3}/>
          <StatisticLine text={props.types[3]} value = {props.value1 + props.value2 + props.value3}/>
          <StatisticLine text={props.types[4]} value = {(props.value1 - props.value3) / (props.value1 + props.value2 + props.value3)}/>
          <StatisticLine text={props.types[5]} value = {(props.value1 / (props.value1 + props.value2 + props.value3) * 100 + "%")}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return(<tr><td>{props.text}</td><td>{props.value}</td></tr>)
}

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
    "good", "neutral", "bad", "all", "average", "positive"
  ]

  return (
    <div>
      <Header name={headerFeedback}/>
      <OmaButton onClick ={() => setGood(good + 1)} text={types[0]}/>
      <OmaButton onClick ={() => setNeutral(neutral + 1)} text={types[1]}/>
      <OmaButton onClick ={() => setBad(bad + 1)} text={types[2]}/>
      <Header name={headerStats}/>
      <Statistics types = {types} value1 = {good} value2 = {neutral} value3 = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)