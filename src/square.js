import React, { Component } from 'react'

class Square extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: Math.floor(Math.random() * 7),
      running: false,
      won: false
    }
    this.stop = this.stop.bind(this)
    this.tick = this.tick.bind(this)
    this.getBackground = this.getBackground.bind(this)
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
    if (this.state.value < 12) {
      this.setState((prevState) => {
        return {value: prevState.value + 1}
      })
    } else if (this.state.value === 12) {
      this.setState({
        value: 13
      })
      this.stop()
    }
  }

  getBackground () {
    if (this.state.won) {
      return 'won'
    } else if (!this.state.running) {
      return 'lost'
    } else if (this.state.value < 7) {
      return 'stage-1'
    } else if (this.state.value < 10) {
      return 'stage-2'
    } else {
      return 'stage-3'
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
