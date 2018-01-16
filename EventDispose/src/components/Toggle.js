import React from 'react'

export class Toggle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggleOn: true,
			current: 0
		}
		// this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		// setState方法中的参数为匿名函数的时候，该函数的第一个参数为  this.state
		this.setState(state => {
			state.current++
			return {
				isToggleOn: !state.isToggleOn,
				current: state.current
			}
		})
	}

	render() {
		return (
			<button onClick={this.handleClick.bind(this, 'id')}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
				{this.state.current}
			</button>
		)
	}
}