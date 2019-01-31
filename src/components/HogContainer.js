import React from 'react';
import HogCard from './HogCard'

export default class HogContainer extends React.Component{

  changeHogNameIntoImgName=(hogName)=>{
    return hogName.toLowerCase().split(" ").join("_")
  }

  mapHogData = (hoggies)=>{
    return hoggies.map((hog, index)=>{
          return <HogCard key={index} indexHog={index} hogObject={hog} img={this.changeHogNameIntoImgName(hog.name)} showDetails={this.props.showDetails}/>
        })
  }

  render(){
    const filterGreased = this.props.hogData.filter((hog)=>hog.greased)
    return (
      <div className="ui grid container">
      {this.props.checkGreased ? this.mapHogData(filterGreased) : this.mapHogData(this.props.hogData)}
      </div>
    )
  }

}
