import React      from 'react'
import { render } from 'react-dom'
import Circle     from './components/Circle'

render((
	<div>
		<Circle bgColor="#F9D240"></Circle>
	</div>
), document.getElementById('container'))
