/* 展示每个产品数据的 容器 */
import React from 'react'

export function ProductRow(props) {
	return (
		<ul className={'productRow_list'}>
			<li className={'productRow_list_item'}>
				<div className="left">Football</div>
				<div className="right">$49.99</div>
			</li>
		</ul>
	)
}