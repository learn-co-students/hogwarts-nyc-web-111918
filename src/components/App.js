import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    hogs: hogs,
    checkGreased: false,
  }

  showDetails = (hogName) => {
    const copyHogs = [...this.state.hogs]
    const findHog = copyHogs.find(hog => hog.name === hogName)
    const findHogIndex = copyHogs.indexOf(findHog)
    const newHog = {...findHog, showDetails: true}
    copyHogs[findHogIndex] = newHog

    console.log(newHog.showDetails ===true)

    this.setState({ hogs: copyHogs })
  }

  sortByName = ()=>{
    const copySortHogs = [...this.state.hogs]
    this.setState({
      hogs: copySortHogs.sort((a, b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;})
    })
  }

  sortByWeight = ()=>{
    const copySortHogs = [...this.state.hogs]
    const lengthyKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    this.setState({
    hogs: copySortHogs.sort((a, b)=>{
      if(a[lengthyKey] < b[lengthyKey]) { return -1; }
      if(a[lengthyKey] > b[lengthyKey]) { return 1; }
      return 0;
    })})
  }


  handleGreased=()=>{
    this.setState({
      checkGreased: !this.state.checkGreased
    })
  }
  // filterGreased = ()=>{
  //   this.setState({
  //     hogs: this.state.hogs.filter((hog)=>{hog.greased})
  //   })
  // }
  //
  // hideDetails = (hogName) => {
  //   //if you click on a button, it changes the state of that hog object to false
  //   const copyHogs = [...this.state.hogs]
  //   const findHog = copyHogs.find(hog => hog.name === hogName)
  //   const findHogIndex = copyHogs.indexOf(findHog)
  //   const newHog = {...findHog, showDetails: false}
  //   copyHogs[findHogIndex] = newHog
  //
  //   this.setState({ hogs: copyHogs })
  // }

  render() {
    return (
      <div className="App">
          < Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight} checkGreased={this.state.checkGreased}
          handleGreased={this.handleGreased}/>
          < HogContainer hogData={this.state.hogs} showDetails={this.showDetails}
          checkGreased={this.state.checkGreased}/>

      </div>
    )
  }
}

export default App;
