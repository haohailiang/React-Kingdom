import React from 'react';

let Process = React.createClass({
	render(){
		return (
			<div className="components-process row">
				{ this.props.process }S
			</div>
		)
	}
});

export default Process;
