import React from 'react'
import ReactDOM from 'react-dom'
import {WelcomeDialog} from "./components/WelcomeDialog";
import './css/main.css'
import {Content} from "./components/Content"
import {SignUpDialog} from './components/Dialog'

ReactDOM.render(
	<div className='root-child'>
		<WelcomeDialog/>
		<Content/>
		<SignUpDialog/>
	</div>,
	document.getElementById('root')
)