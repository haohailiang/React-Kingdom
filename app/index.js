import React      from 'react';
import { render } from 'react-dom';
import Hello      from './components/hello';

console.log( React.version );
render(
	<Hello></Hello>,
	document.getElementById('root')
);
