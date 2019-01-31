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

  onChangeType = (e) => {
    switch(e.target.value) {
      case "Greased":
        this.setState({
          hogs: hogs.filter(hog => hog.greased)
        })
        break;
      case "All": {
        this.setState({
          hogs: hogs
        })
      }
    }
  }


   pigImages = hogs.map(hog => {
        return hog.name.replace(/ /g,"_").toLowerCase()+ ".jpg"
      })

  render() {
    return (
      <div className="App">
          < Nav onChangeType={this.onChangeType}/>
          <HogContainer hogs={this.state.hogs} jpegs={this.pigImages}/>
      </div>
    )
  }
}

export default App;
