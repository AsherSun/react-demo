import React from 'react'
import {OptionList} from "./OptionList";

export class Reservation extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			intro: '',
			hobby: '代码',
			isGoing: true
		}
		this.arr = ['代码', '看书', '钓鱼', '女']
	}

	handleSubmit(event) {
		const state = this.state
		alert(`你提交的数据为, 
			username:${state.username}, 
			password: ${state.password}, 
			intro: ${state.intro}, 
			hobby: ${state.hobby},
			isGoing: ${state.isGoing}`)
		event.preventDefault()
	}

	handleChange(event) {
		const target = event.target
		const name = target.name
		const value = target.type === 'checkbox' ? target.checked : target.value
		this.setState({
			[name]: value
		})
	}

	/*listOptions(props) {
			return (
				props.value.map((item, index) => <option key={index} value={item}>{item}</option>)
			)
		}*/
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					username:
					<input type="text"
					       value={this.state.username}
					       name="username"
					       placeholder="请输入用户名..."
					       onChange={this.handleChange.bind(this)}
					/>
				</label>
				<label>
					password:
					<input type="password"
					       value={this.state.password}
					       name="password"
					       placeholder="请输入密码..."
					       onChange={this.handleChange.bind(this)}
					/>
				</label>
				<label>
					intro:
					<textarea value={this.state.intro}
					          name="intro"
					          onChange={this.handleChange.bind(this)}
					          placeholder="请做下简介..."
					/>
				</label>
				<label>
					hobby:
					<select value={this.state.hobby}
					        onChange={this.handleChange.bind(this)}
					        name="hobby">
						{/*<this.listOptions value={this.arr}/>*/}
						<OptionList value={this.arr}/>
					</select>
				</label>
				<label>
					Is going
					<input type="checkbox"
					       name="isGoing"
					       checked={this.state.isGoing}
					       onChange={this.handleChange.bind(this)}/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}