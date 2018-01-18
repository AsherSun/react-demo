/* 展示数据集合容器 */
import React from 'react'
import {ProductCategoryRow} from "./ProductCategoryRow"
import {ProductRow} from "./ProductRow"

export function ProductTable(props) {
	return (
		<div className="productTable">
			<h2 className={'productTable_title'}>
				<div className="left">Name</div>
				<div className="right">Price</div>
			</h2>
			<ProductCategoryRow title={'Sporting Goods'}/>
			<ProductRow/>
			<ProductCategoryRow title={'Electronics'}/>
			<ProductRow/>
		</div>
	)
}