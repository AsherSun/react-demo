import React from 'react'
import {FancyBorder} from "./FancyBorder";

export function Dialog(props) {
	return (
		<FancyBorder color='blue'>
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
		</FancyBorder>
	)
}

export function WelcomeDialog(props) {
	return (
		<Dialog
			title='Welcome'
			message='Thank you for visiting our spacecraft!'
		/>
	)
}