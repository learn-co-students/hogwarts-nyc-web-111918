import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogs from './Hogs.js'

class App extends Component {


  state = {
    nameSorted: false,
    weightSorted: false,
    greased: false,
    hogs:hogs,
    currentHogs: hogs
  }

  sortedHogs = () => {
    const hogs = [...this.state.hogs].sort(function(a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    return hogs
  }

  weightSortedHogs = () => {
    const hogs = [...this.state.hogs].sort(function(a, b) {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
  })
  return hogs

  }

  filterGrease = () => {
    const hogs = [...this.state.hogs].filter(function(hog){
      return hog.greased === false
    })
    return hogs
  }

  buttonChecker = (buttonPressed) => {
    if (buttonPressed === 'sortName'){
      if (this.state.nameSorted === true){
        this.setState({
          nameSorted: !this.state.nameSorted,
          currentHogs: this.state.hogs
        })
      } else {
        this.setState({
          nameSorted: !this.state.nameSorted,
          currentHogs: this.sortedHogs()
        })
      }
    }
    if (buttonPressed ==="sortWeight"){
      if (this.state.weightSorted === true){
        this.setState({
          weightSorted: !this.state.weightSorted,
          currentHogs: this.state.hogs
        })
      } else {
        this.setState({
          weightSorted: !this.state.weightSorted,
          currentHogs: this.weightSortedHogs()
        })
      }
    }
    if (buttonPressed ==='greaseFilter'){
      console.log('hi')
      if (this.state.greased === true){
        this.setState({
          greased: !this.state.greased,
          currentHogs: this.state.hogs
        })
      } else {
        this.setState({
          greased: !this.state.greased,
          currentHogs: this.filterGrease()

        })
      }

    }
  }

  

  render() {
    return (
      <div className="App">

          < Nav />

          <button onClick={() => this.buttonChecker('sortName')}> sorta da piggy by der alphabootz</button>

          <button onClick={() => this.buttonChecker('sortWeight')}>  sorta da piggy by der Pounds</button>

          <button onClick={() => this.buttonChecker('greaseFilter')}> Keep it Greasy y'guys (fuck using y'all) </button>

          {console.log("About to render hogs  ---> ", hogs)}

          <Hogs hogs={this.state.currentHogs}/>
      </div>
    )
  }
}

export default App;
