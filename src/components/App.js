import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer.js'

class App extends Component {
  state = {
    pigs: hogs
  }

  handleSort = (event) => {
    const word = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (event.target.className ==='Name'){
      let tempPigs = [...this.state.pigs]
      tempPigs.sort(function(a,b){
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : 1
      })
      this.setState({
        pigs: tempPigs
      })
    } else if (event.target.className ==='Weight'){
      let tempPigs = [...this.state.pigs]
      tempPigs.sort(function(a,b){
        return a[word] - b[word]
      })
      this.setState({
        pigs: tempPigs
      })
    }
  }

  handleCheckBox = (event) => {
    if (event.target.checked === true){
      this.setState({
        pigs: this.state.pigs.filter(function(pig){
          return pig.greased === true
        })
      })
    } else {
      this.setState({
        pigs: hogs
      })
    }
  }

  render() {
    return (
      <div className="App">
        <button className="Name" onClick={this.handleSort}>Name</button>
        <button className="Weight" onClick={this.handleSort}>Weight</button>
        <input onChange={this.handleCheckBox} type="checkbox" /> Filter by Grease?
        < Nav />
        < PigContainer pigs={this.state.pigs} />
      </div>
    )
  }
}

export default App;
