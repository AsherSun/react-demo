import React from 'react'
import ReactDOM from 'react-dom'
import {NameForm} from "./components/NameForm";
import {EssayForm} from './components/EssayForm'
import {SelectForm} from "./components/SelectForm";
import {Reservation} from "./components/Reservation";

ReactDOM.render(
	<div className="content">
		<NameForm/>
		<EssayForm/>
		<SelectForm/>
		<Reservation/>
	</div>,
	document.getElementById('root')
)