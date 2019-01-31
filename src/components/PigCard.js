import React from 'react'
import PigDetails from './PigDetails.js'

export default class PigCard extends React.Component{
  state = {
    isHidden: true
  }

  makeUrl = (str) => {
    return (str.toLowerCase().split(" ").join("_") + '.jpg')
  }

  handleClick = (event) => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){

    return(
      <div onClick={this.handleClick} className="ui card">
        <div className="image">
          <img alt={this.props.pig.name} src={require(`../hog-imgs/${this.makeUrl(this.props.pig.name)}`)}/>
        </div>
        <div className="content">
          <div className="header">{this.props.pig.name}</div>
        </div>
        <div className="description">
          {!this.state.isHidden && <PigDetails pig={this.props.pig} />}
        </div>
      </div>
    )
  } // End of render()
} // End of PigCard class
