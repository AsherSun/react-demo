/* 搜索框容器 */
import React from 'react'

export class SearchBar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="searchBar">
				<p><input type="text" placeholder={'search...'}/></p>
				<p><input type="checkbox"/> Only show products in stock</p>
			</div>
		)
	}
}