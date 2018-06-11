import React from 'react';
import './progress.less';

let Progress = React.createClass({
	render(){
		return (
			<div className="components-progress row">
				<div className="progress" style={{ width:`${this.props.progress}%` }}>
					{ this.props.progress }S
				</div>
			</div>
		)
	}
});

export default Progress;
