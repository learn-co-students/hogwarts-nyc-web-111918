import React, { Component } from 'react';
import HogTile from './HogTile';

class HogContainer extends Component {

  // formatHogs(){} also works
  formatHogs = () => {
    return this.props.hogs.map(hog => {
      let weight = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      // console.log(weight);\
      let medal = hog['highest medal achieved']
      return <HogTile key={hog.name} name={hog.name} specialty={hog.specialty} weight={weight} medal={medal} greased={hog.greased}/>
    })
  }

  render() {
    return (
      <div className="ui grid container">
        {/*do i want an function invocation or refernce? If we want the
        function to invoke right away, we need an invocation. For event handlers
        we would want a refernce*/}
        {this.formatHogs()}
      </div>
    )
  }

} //End of Hog Container


export default HogContainer;
