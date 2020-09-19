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

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const headerFeedback = "give feedback"
  const headerStats = "statistics"
  const headerAnec = "Anecdote of the day"
  const headerMostVotes = "Anecdote with most votes"
  const types = [
    "good", "neutral", "bad", "all", "average", "positive"
  ]
  const anecText = "next anecdote"
  const voteText = "vote"

  return (
    <div>
      <Header name={headerFeedback}/>
      <OmaButton onClick ={() => setGood(good + 1)} text={types[0]}/>
      <OmaButton onClick ={() => setNeutral(neutral + 1)} text={types[1]}/>
      <OmaButton onClick ={() => setBad(bad + 1)} text={types[2]}/>
      <Header name={headerStats}/>
      <Statistics types = {types} value1 = {good} value2 = {neutral} value3 = {bad}/>
      <Header name={headerAnec}/>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <OmaButton onClick ={() =>{
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
      }} text={voteText}/>
      <OmaButton onClick ={() => setSelected(Math.floor(Math.random() * 6))} text={anecText}/>
      <Header name={headerMostVotes}/>
      <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>has {points[points.indexOf(Math.max(...points))]} votes</p>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)