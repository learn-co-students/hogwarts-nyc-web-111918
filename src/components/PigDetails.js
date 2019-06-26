import React from 'react'

export default class PigDetails extends React.Component{


  render(){
    const word = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    return (
      <div>
      <p>specialty: {this.props.pig.specialty}</p>
      <p>greased: {this.props.pig.greased}</p>
      <p>weight: {this.props.pig[`${word}`]}</p>
      <p>medal: {this.props.pig['highest medal achieved']}</p>

      </div>
    )



  }




}//end of component
