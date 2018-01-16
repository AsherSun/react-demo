import React from 'react'
import {LoginButton} from "./LoginButton";
import {LogoutButton} from "./LogoutButton";
import {Greeting} from "./Greeting";

export class LoginControl extends React.Component {
	constructor(props) {
		super(props)
		this.state = {isLoggedIn: false}
	}

	handelLoginClick() {
		this.setState({isLoggedIn: true})
	}

	handelLogoutClick() {
		this.setState({isLoggedIn: false})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn
		let button = null
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handelLogoutClick.bind(this)}/>
		} else {
			button = <LoginButton onClick={this.handelLoginClick.bind(this)}/>
		}
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}
			</div>
		)
	}
}