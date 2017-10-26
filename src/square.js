import React, { Component } from 'react'

class Square extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: Math.floor(Math.random() * 30) + 5,
      running: true,
      won: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }
  tick () {
    if (this.state.running) {
      this.setState({ value: this.state.value - 1 })
    }
    if (this.state.value === 0) {
      this.setState({ running: false })
      clearInterval(this.time)
    }
  }
  getBackground () {
    if (this.state.won) {
      return 'won'
    } else if (!this.state.running) {
      return 'stopped'
    } else if (this.state.value > 10) {
      return 'green'
    } else if (this.state.value > 5) {
      return 'yellow'
    } else {
      return 'red'
    }
  }
  handleClick () {
    if (this.state.running) {
      this.props.addScore(this.state.value)
      this.setState({ won: true })
    }
    this.setState({ running: false })
    clearInterval(this.time)
  }
  render () {
    return (
      <div className={'square ' + this.getBackground()} onClick={this.handleClick}>
        { this.state.value }
      </div>
    )
  }
}

export default Square
