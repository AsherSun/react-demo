import React from 'react'


function ListItem(props) {
	return (<li className='list-item' id={props.id}>{props.value}</li> )
}

export function NumberList(props) {
	const numbers = props.numbers
	// const listItems = numbers.map((num, index) => <ListItem key={num.toString()} value={num}/>)
	return (<ul>
		{
			numbers.map((num, index) => <ListItem key={num.toString()} value={num} id={index}/>)
		}
	</ul>)
}