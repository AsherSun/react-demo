import React from 'react'

function formatName(user) {
	if (user) {
		return user.firstName + ' ' + user.lastName
	}
	return 'react'
}

let user = {
	firstName: 'asher',
	lastName: 'sun'
}

export const element = (
	<h1>
		Hello, {formatName(user)}!
		<div tabIndex="0" className={user ? 'true' : 'false'}>我是div</div>
	</h1>
)
