import React from 'react'
import {BoilingVerDict} from "./BoilingVerdict"
import {TemperatureInput} from "./TemperatureInput"
import {tryConvert, toCelsius, toFahrenheit} from "../utils"

export class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {temperature: '', scale: 'c'}
	}

	render() {
		const scale = this.state.scale
		const temperature = this.state.temperature
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
		return (
			<div>
				<TemperatureInput
					scale='c'
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange.bind(this)}/>
				<TemperatureInput
					scale='f'
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange.bind(this)}/>
				<div>BoilingVerDict: <BoilingVerDict celsius={parseFloat(celsius)}/></div>
			</div>
		)
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature})
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature})
	}
}