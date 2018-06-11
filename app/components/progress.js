import React from 'react';

let Progress = React.createClass({
	render(){
		return (
			<div className="components-progress row">
				{ this.props.progress }S
			</div>
		)
	}
});

export default Progress;
