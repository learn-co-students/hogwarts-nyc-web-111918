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
      case "Name": {
        this.setState({
          hogs: hogs.sort((a, b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
          })
        })
      }
      case "Weight": {
        this.setState({
          hogs: hogs.sort((a, b) => {
            return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
          })
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
