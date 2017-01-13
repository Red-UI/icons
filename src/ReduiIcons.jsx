import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './ReduiIcons.less'

export default class ReduiIcons extends Component {
  static displayName = "ReduiIcons"

  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    className: PropTypes.string
  }

  static defaultProps = {
    type: 'success',
    size: 'small',
    className: ''
  }

  render() {

    const {
      type,
      size,
      children,
      className,
      ...others
    } = this.props

    const cls = classNames(
      'redui-icon',
      `redui-icon-${type}`,
      `redui-icon-${size}`,
      className
    );
    return (
      <i
        className={cls}
        {...others}
      >
        {children}
      </i>
    )
  }
}
