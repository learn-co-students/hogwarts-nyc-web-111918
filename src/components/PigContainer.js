import React from 'react'
import PigCard from './PigCard.js'

export default class PigContainer extends React.Component{


  formatPigs = () => {
    return this.props.pigs.map((pig, index) => {
      return <PigCard key={index} pig={pig} />
    })
  }

  render(){
    return(
      <div className="ui link cards" id="pig-container">
        {this.formatPigs()}

      </div>
    )
  } // End of render()
} // End of PigContainer class
