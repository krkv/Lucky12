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
      score: this.state.score + (10 - value)
    })
  }
  render () {
    let squares = []
    for (let i = 0; i < 25; i++) {
      squares.push(<Square key={i} addScore={this.addScore} />)
    }
    return (
      <div className='container'>
        <div className='field'>
          {squares}
        </div>
        <div className='score'>Score: {this.state.score}</div>
      </div>
    )
  }
}

export default App
