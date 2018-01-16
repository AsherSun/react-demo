import React from 'react'
import {Comment} from './Comment'

let text = '我是Comment-text'
let date = '2018-01-06'
let author = {
	avatarUrl: 'http://cdn.wenpaiting.com/bearshop/data/upload/shop/auction/20170415/1EzgSdcRL2p-Zy-2ioLLV1UKG1UHFD7oOKAWNrUhvTvEcGOuRoar8X8T5KHgBxMk.jpg-BigWater',
	name: '庞若云 雲朵軒美術馆'
}

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>
}

export function App() {
	return (
		<div>
			<Welcome name="World"/>
			<Welcome name="React"/>
			<Welcome name="Asher"/>
			<Comment text={text} date={date} author={author}/>
		</div>
	)
}