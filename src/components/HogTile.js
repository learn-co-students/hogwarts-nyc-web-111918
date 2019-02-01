import React from 'react';
// functional component // kinds of like render function .
// vs a Class Component
class HogTile extends React.Component {
  // HogTile = ({name, specialty}) => {
  // You can give the card state and if the state is changed to hiddeny you can give it a
  // display proprity

state = {
  clicked: false
}

formatAHogUrl = () => {
      return this.props.name.toLowerCase().split(' ').join('_')
  }

onClickImg = e => {
  this.setState({
    clicked: !this.state.clicked
  })
}

  render() {
    //test what you have in other componets after the render!
    //react will yell at you if you do not have a return statement.
  return (
    <div className="ui eight wide column">
      <div>
        <h1>{this.props.name}</h1>
        <img onClick={this.onClickImg} src={require(`../hog-imgs/${this.formatAHogUrl()}.jpg`)} />
        <div style={{display: this.state.clicked ? "block" : "none" }}>
          <h4>{this.props.specialty}</h4>
          <h4>{this.props.greased}</h4>
          <h4>{this.props.weight}</h4>
          <h4>{this.props.medal}</h4>
        </div>
      </div>
    </div>
    )
  } //end of render
} //End of Class

export default HogTile;
