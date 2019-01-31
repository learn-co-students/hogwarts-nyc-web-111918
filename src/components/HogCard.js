import React from 'react';

const lengthyKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

export default class HogCard extends React.Component{


  render(){
    console.log("In HG. -->", this.props.hogObject)
    return (
      <div className="ui eight wide column">
        <p>{this.props.hogObject.name}</p>
      <img src={require(`../hog-imgs/${this.props.img}.jpg`)} alt={this.props.hogObject.name}/>

        <div>
          {this.props.hogObject.showDetails ?
            <div>
            <button className="ui button" onClick={() => this.props.showDetails(this.props.hogObject.name)}>
          hide details</button>
              <p>Specialty: {this.props.hogObject.specialty}</p>
              <p>{this.props.hogObject.greased? "greased": "not greased"}</p>
              <p>Weight: {this.props.hogObject[lengthyKey]}</p>
            </div>
               : <button className="ui button" onClick={() => this.props.showDetails(this.props.hogObject.name)}>show more details</button>}
        </div>
      </div>
    )
  }

}
