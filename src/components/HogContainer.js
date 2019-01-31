import React from 'react'
import HogCard from './HogCard.js'
// import hogs from '../porkers_data';


const HogContainer = ({hogs}) => {

  const formatHogs = () => {
    return hogs.map((hog, idx) => {
      return <HogCard key={idx} name={hog.name} specialty={hog.specialty} medal={hog['highest medal achieved']}/>;
    })
  }

  return (
    <div className="ui grid container">
      {formatHogs()}
    </div>
  )

}

export default HogContainer
