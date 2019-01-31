import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Hog from './Hog'


class App extends Component {

  state = {
    hogs: hogs,
    filters: {
      type: 'all'
    }
  }


   pigImages = hogs.map(hog => {
        return hog.name.replace(/ /g,"_").toLowerCase()+ ".jpg"
      })

  render() {
    return (
      <div className="App">
          < Nav />
          <HogContainer hogs={this.state.hogs} jpegs={this.pigImages}/>
      </div>
    )
  }
}

export default App;
