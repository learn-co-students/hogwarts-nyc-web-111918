import React, { Component } from 'react'

export default class Hog extends Component{ // syntactic sugar for React.Component
      state = { showing: false }

  render () {
    const { showing } = this.state

    return (
      <div className="ui eight wide column">
        <p onClick={() => this.setState({ showing: !showing })}>{this.props.hog.name}</p>
          { showing ?
            <div><p>Specialty:  {this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased ? "true" : "false" }</p></div>
            : null
          }
      </div>
    )
  }
}
