import React from 'react'
import {SplitPane} from "./SplitPane";

function Contacts() {
	return (
		<div className="Contacts">left</div>
	)
}

function Chat() {
	return (<div className="Chat">right</div>)
}

export function Content() {
	return (
		<SplitPane
			left={<Contacts/>}
			right={<Chat/>}
		/>
	)
}