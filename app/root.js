import React   from 'react';
import Header  from './components/header';
import Process from './components/process';

let Root = React.createClass({
	render(){
		return (
			<div>
				<Header></Header>
				<Process
					process="1">
				</Process>
			</div>
		)
	}
});

export default Root;
