import React from 'react'
import {FancyBorder} from "./FancyBorder"

function Dialog(props) {
	return (
		<FancyBorder color='blue'>
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	)
}

export class SignUpDialog extends React.Component {
	constructor() {
		super()
		this.state = {login: ''}
	}

	render() {
		return (
			<Dialog
				title={'Mars Exploration Program'}
				message={'How should we refer to you ?'}
			>
				<input
					type="text"
					value={this.state.login}
					onChange={this.handleChange.bind(this)}
				/>
				<button onClick={this.handleSignUp.bind(this)}>
					Sing Me Up!
				</button>
			</Dialog>
		)
	}

	handleChange(e) {
		this.setState({login: e.target.value})
	}

	handleSignUp(e) {
		console.log(e.target)
		alert(`Welcome aboard, ${this.state.login}!`)
	}
}