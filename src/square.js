import React, { Component } from 'react'

class Square extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: Math.floor(Math.random() * 7),
      running: false,
      won: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.setState({
      running: true
    })
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  stop () {
    clearInterval(this.timer)
    this.setState({
      running: false
    })
    this.props.reportStop()
  }

  tick () {
    if (this.state.value === 13) {
      this.stop()
    } else {
      this.setState({
        value: this.state.value + 1
      })
    }
  }

  getBackground () {
    if (this.state.won) {
      return 'won'
    } else if (!this.state.running) {
      return 'stopped'
    } else if (this.state.value < 7) {
      return 'green'
    } else if (this.state.value < 10) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  handleClick () {
    if (this.state.running) {
      this.stop()
      this.setState({
        won: true
      })
      this.props.addScore(this.state.value)
    }
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
