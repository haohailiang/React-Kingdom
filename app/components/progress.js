import React from 'react';
import './progress.less';

let Progress = React.createClass({
	changeProgress(e){
		let progressBar = this.refs.progressBar;
		let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		console.log( "  e.clientX: "+ e.clientX + "  progressBar.getBoundingClientRect: " + progressBar.getBoundingClientRect().left + "  progressBar.clientWidth: " + progressBar.clientWidth + "  progressBar.clientHeight: " + progressBar.clientHeight  );
		console.log( progress );
		// this.props.onProgressChange && this.props.onProgressChange(progress);
	},
	render(){
		return (
			<div className="components-progress row" ref="progressBar" onClick={ this.changeProgress }>
				<div className="progress" style={{ width:`${this.props.progress}%` }}></div>
			</div>
		)
	}
});

export default Progress;
