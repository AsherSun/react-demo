import React from 'react'

export function BoilingVerDict(props) {
	if (props.celsius >= 100) {
		return <p>水会烧开</p>
	}
	return <p>水不会烧开</p>
}