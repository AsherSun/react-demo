import React from 'react'

const scaleNames = {
	c: '摄氏度',
	f: '华氏度'
}

export class TemperatureInput extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {temperature: ''}
	}

	render() {
		// const temperature = this.state.temperature
		const temperature = this.props.temperature
		const scale = this.props.scale
		return (
			<fieldset>
				<legend>请输入{scaleNames[scale]} 温度</legend>
				<input type="text"
				       value={temperature}
				       onChange={this.handleChange.bind(this)}/>
			</fieldset>
		)
	}

	handleChange(e) {
		// this.setState({
		// 	temperature: e.target.value
		// })
		console.log(this.props)
		this.props.onTemperatureChange(e.target.value)
	}
}