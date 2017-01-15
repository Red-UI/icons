import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Icon from '../src'

class DemoSimple extends Component {
  render() {

    const types = [
      'alert',
      'prompt',
      'wait',
      'tick',
      'close',
      'warning',
      'success'
    ]

    const typesIcon = size =>
                        types.map((type, index) =>
                          <Icon
                            key={index}
                            type={type}
                            size={size}
                          >
                            {type}<br/>
                          </Icon>)

    return (
      <div>
        { typesIcon('small') }
        { typesIcon('large') }
      </div>
    )
  }
}



ReactDOM.render(
  <DemoSimple />,
  document.getElementById('red-ui-entry')
)
