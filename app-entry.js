import React      from 'react'
import { render } from 'react-dom'
import Circle     from './components/Circle'

var theCircle = <Circle bgColor="#F9D240"></Circle>;

function showCircle() {
	var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];

	var ran = Math.floor(Math.random() * colors.length);

	return <Circle bgColor={ colors[ran] }></Circle>
}

render((
	<div>
		{ showCircle() }
	</div>
), document.getElementById('container'))
