import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0
    }
    this.addScore = this.addScore.bind(this)
  }
  addScore (value) {
    this.setState({
      score: this.state.score + (25 - value)
    })
  }
  render () {
    let squares = []
    for (let i = 0; i < 120; i++) {
      squares.push(<Square key={i} addScore={this.addScore} />)
    }
    return (
      <div>
        <div className='container'>
          {squares}
        </div>
        <div className='score'>Score: {this.state.score}</div>
      </div>
    )
  }
}

export default App
