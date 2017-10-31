import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      squares: null,
      active: 0,
      starts: 0
    }
    this.addScore = this.addScore.bind(this)
    this.reportStop = this.reportStop.bind(this)
    this.generateSquares = this.generateSquares.bind(this)
    this.start = this.start.bind(this)
  }

  componentDidMount () {
    this.start()
  }

  addScore (value) {
    this.setState({
      score: this.state.score + value
    })
  }

  reportStop () {
    this.setState({
      active: this.state.active - 1
    })
  }

  start () {
    this.setState({
      score: 0,
      starts: this.state.starts + 1
    })
    this.generateSquares(36)
  }

  generateSquares (number) {
    let squares = []
    for (let i = 0; i < number; i++) {
      squares.push(<Square key={this.state.starts * number + i} addScore={this.addScore} reportStop={this.reportStop} />)
    }
    this.setState({
      active: number,
      squares: squares
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='help'>Score points for squares before their value reaches 13</div>
        <div className='field'>
          {this.state.squares}
        </div>
        <div className='score'>Score: {this.state.score}</div>
        <button onClick={this.start}>Start</button>
      </div>
    )
  }
}

export default App
