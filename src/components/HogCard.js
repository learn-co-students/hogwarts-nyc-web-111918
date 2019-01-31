import React, { PureComponent } from 'react';

class HogCard extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      showFront: "",
      showBack: 'hidden'
    }
  }

  hogImgConverter = hogname => {
    let imgName = hogname.toLowerCase();
    imgName = imgName.split(' ').join('_')
    return require(`../hog-imgs/${imgName}.jpg`)
  }

  handleClick = event => {
    if (this.state.showBack === "hidden"){
      this.setState({
        showFront: "hidden",
        showBack: ""
      })
    } else {
      this.setState({
        showFront: "",
        showBack: "hidden"
      })
    }
  }

  render() {
    return (
      <div className ="ui eight wide column" onClick={this.handleClick}>
        <div className="Front" hidden={this.state.showFront}>
          <h3>{this.props.hog.name}</h3>
          <img src={this.hogImgConverter(this.props.hog.name)}/>
        </div>
        <div className="Back" hidden={this.state.showBack}>
          <h3>specialty: {this.props.hog.specialty}</h3>
          <h3>Greased: {this.props.hog.greased.toString()}</h3>
          <h5>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h5>
          <h5>highest medal achieved: {this.props.hog['highest medal achieved']}</h5>
        </div>
      </div>
    );
  }

}

export default HogCard;
