import React, { Component } from 'react'
import Hog from './Hog'

export default class HogContainer extends Component{ // syntactic sugar for React.Component



  render () {


    const allHogs = this.props.hogs.map((hog, index) => {
      return <Hog key={index} hog={hog} jpeg={this.props.jpegs.map(jpeg => {
        return jpeg})}/>
    })
    return (
      <div className="ui grid container">
        {allHogs}
       </div>

    )
  }

}
