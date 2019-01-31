import React from 'react'

class Sort extends React.Component {

  render() {
    return (
      <div className="ui form">
      <br/>
        <div className="field">
          <button
            value="name"
            className="ui secondary button"
            onClick={this.props.onSortHogsClick}
            >Sort by Name
          </button>
          <button
            value="weight"
            className="ui secondary button"
            onClick={this.props.onSortHogsClick}
            >Sort by Weight
          </button>
        </div>
      <br/>
      </div>
    )
  }
}

export default Sort
