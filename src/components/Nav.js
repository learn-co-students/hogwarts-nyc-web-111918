import piggy from '../porco.png'
import React, {Component} from 'react'

export default class Nav extends Component {
	render() {
		return (
			<div className="navWrapper">
					<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
					<span className="normalText">A React App for County Fair Hog Fans</span>
					<div className="field">
          <select name="type" id="type" onChange={(e) => this.props.onChangeType(e)}>
						<option value="All">All</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
            <option value="Greased">Greased</option>
          </select>
        </div>
			</div>
		)
	}
}
