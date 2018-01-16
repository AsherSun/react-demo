import React from 'react'

export class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {date: new Date()}
	}

	render() {
		return (
			<div>
				<h1>Hello, React</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}

	// 开始挂载
	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000)
	}

	// 开始卸载
	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}
}