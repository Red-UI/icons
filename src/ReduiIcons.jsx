import React, { Component, PropTypes } from 'react'
import './ReduiIcons.less'

export default class ReduiIcons extends Component {
  static displayName = "ReduiIcons"

  static propTypes = {
    foo: PropTypes.string
  }

  static defaultProps = {

  }

  state = {}

  componentDidMount() {

  }

  render() {
    const { children, ...others } = this.props
    return (
      <i className="redui-icons" {...others} >
        {children}
      </i>
    )
  }
}
