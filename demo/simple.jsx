import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReduiIcons from '../src'

class DemoSimple extends Component {

  render() {
    return (
      <ReduiIcons>Demo Simple</ReduiIcons>
    )
  }
}

ReactDOM.render(
  <DemoSimple />,
  document.getElementById('red-ui-entry')
)