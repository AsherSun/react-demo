/*  整个业务的容器 */
import React from 'react'
import {ProductTable} from "./ProductTable";
import {SearchBar} from "./SearchBar";

export function FilterableProductTable() {
	return (
		<div className="filterable_product_table">
			<SearchBar></SearchBar>
			<ProductTable></ProductTable>
		</div>
	)
}