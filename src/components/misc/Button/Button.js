import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button className={`btn btn-${this.props.type}`}>
        {this.props.children}
      </button>
    )
  }
}

export default Button