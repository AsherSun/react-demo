import React from 'react'

export class EssayForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		alert('An essay was submittend: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					name:
					<textarea
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
						placeholder="Please write an essay about your favorite DOM element."
					/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}