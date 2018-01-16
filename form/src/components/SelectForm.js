import React from 'react'
import {OptionList} from "./OptionList";

const arr = ['Grapefruit', 'Lime', 'Coconut', 'Mango', 'AsherSun']

export class SelectForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 'AsherSun'
		}
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					Pick your favorite La Croix flavor:
					<select value={this.state.value} onChange={this.handleChange.bind(this)}>
						<OptionList value={arr}/>
						{/*<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>*/}
					</select>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}