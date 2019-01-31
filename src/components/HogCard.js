import React from 'react'


class HogCard extends React.Component {

  state = {
    clicked: false,
  }

  getImageUrls = (name) => {
    const imgName = name.toLowerCase().split(' ').join('_')
    const imgUrl = imgName + ".jpg"
    return require("../hog-imgs/" + imgUrl)
  }

  handleDetailsClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  hideHog = () => {
    const hog = document.querySelector(`#${this.props.name.split(" ").join("-")}`)
    hog.style.display = "none"
  }


  render() {
    return (
      <div className="pig-tile" id={this.props.name.split(" ").join("-")}>
        <h3 className="center-text">{this.props.name}</h3>
        <div className="hog-image">
        {this.state.clicked ? <p>Speciality: {this.props.specialty} <br/>  Medal: {this.props.medal}</p> : <img alt={this.props.name} src={this.getImageUrls(this.props.name)} /> }
        </div>
        <input type="button" value="Hide Hog" onClick={this.hideHog}/>
        <input type="button" value="Details" onClick={this.handleDetailsClick}/>
      </div>
    )
  }
}


export default HogCard
