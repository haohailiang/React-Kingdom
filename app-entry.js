import React         from 'react'
import { render }    from 'react-dom'
import Circle        from './components/Circle'
import CounterParent from './components/CounterParent'
import Colorizer     from './components/Colorizer'

var theCircle = <Circle bgColor="#F9D240"></Circle>;

function showCircle() {
	var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];

	var renderData = [];
	for(var i=0; i<colors.length; i++) {
		var ran = Math.floor(Math.random() * colors.length);
		renderData.push(<Circle bgColor={ colors[ran] } key= { colors[ran] + '' + i} ></Circle>);
	}

	return renderData;
}

render((
	<div>
		<h1>调色板</h1>
		<Colorizer></Colorizer>
		<h1>计数器</h1>
		<CounterParent></CounterParent>
		<h1>画圆圈</h1>
		{ showCircle() }
	</div>
), document.getElementById('container'))
