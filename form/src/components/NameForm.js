import React from 'react'

export class NameForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: ''}
	}

	// change
	handleChange(event) {
		this.setState({value: event.target.value.toUpperCase()})
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label> name:
					<input type="text" value={this.state.value}
					       onChange={this.handleChange.bind(this)}
					/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}