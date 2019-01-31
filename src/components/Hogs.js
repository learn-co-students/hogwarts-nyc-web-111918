import React, { PureComponent } from 'react';
// import hogs from '../porkers_data';
import HogCard from './HogCard.js'
class Hogs extends PureComponent {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     hogs: this.props.hogs,
  //   }
  // }

  hogsMapper = () => {
    return this.props.hogs.map( hog => {
      return <HogCard key={hog.name} hog={hog}/>
    })//add filter.map statement
  }




  render() {
    //console.log(this.state.showGreased)
    return (
      <div>

        <div className="ui grid container">
        {console.log('Re render Hogs')}
        {this.hogsMapper()}
        </div>
      </div>
    )
  }

}

export default Hogs
