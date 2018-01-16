import React from 'React'
import {UserInfo} from './userInfo'

export function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author}/>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{props.date}
			</div>
		</div>
	)
}