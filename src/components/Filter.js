import React from 'react'

class Filter extends React.Component {

  render() {
    return (
      <div className="ui form">
        <h3>Filter</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onFilterChangeType}>
            <option value="all">All</option>
            <option value="greased">Greased</option>
            <option value="ungreased">Ungreased</option>
          </select>
        </div>

        <div className="field">
          <button
            className="ui secondary button"
            onClick={this.props.onFindHogsClick}
            >Find hogs</button>
        </div>
      </div>
    )
  }
}

export default Filter
