import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer.js'
import Filter from './Filter'
import Sort from './Sort'

class App extends Component {

  state = {
      hogs: hogs,
      filter: {
        type: 'all'
      }
    }

  filterAllHogs = () => {
    if (this.state.filter.type === 'greased') {
      const greasedHogs = hogs.filter(hog => hog.greased === true)
      this.setState({
        hogs: greasedHogs
      })
    } else if (this.state.filter.type === 'ungreased') {
      const ungreasedHogs = hogs.filter(hog => hog.greased === false)
      this.setState({
        hogs: ungreasedHogs
      })
    } else {
      this.setState({
        hogs
      })
    }
  }

  onFilterChangeType = ({target: { value }}) => {
    this.setState( {
      filter: {
        ...this.state.filter,
        type: value
      }
    })
  }

  onSortHogsClick = ({target: { value }}) => {
    const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    if (value === 'name') {
      const sortedHogsByName = [].concat(this.state.hogs).sort((a,b) => {
        if(a.name > b.name) {
          return 1
        }
        if(a.name < b.name) {
          return -1
        }
        return 0
      })
      this.setState({
        hogs: sortedHogsByName
      })

    } else if (value === 'weight') {
      const sortedHogsByWeight = [].concat(this.state.hogs).sort((a,b) => {
        return b[weightKey] - a[weightKey]
      })
      this.setState({
        hogs: sortedHogsByWeight
      })
    }
  }


  render() {
    return (
      <div className="App">
        < Nav />
        <div>
          <Filter onFilterChangeType={this.onFilterChangeType} onFindHogsClick={this.filterAllHogs}/>
        </div>
        <div>
          <Sort onSortHogsClick={this.onSortHogsClick} />
        </div>
        <div>
          <HogContainer
            hogs={this.state.hogs}
          />
        </div>
      </div>
    )
  }
}

export default App;
