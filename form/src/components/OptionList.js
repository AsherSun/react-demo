import React from 'react'

export function OptionList(props) {
	return (
		props.value.map((item, index) => <option key={index} value={item}>{item}</option> )
	)
}