import React   from 'react'
import Counter from './Counter'

export default React.createClass({
	getInitialState() {
		return ({
			count : 0
		});
	},

	render() {
		var backgroundStyle = {
			padding         : 50,
			backgroundColor : "#FFC53A",
			width           : 250,
			height          : 100,
			borderRadius    : 10,
			textAlign       : "center"
		};

		var buttonStyle = {
			fontSize   : "1em",
			width      : 30,
			height     : 30,
			fontFamily : "sans-serif",
			color      : "#333333",
			fontWeight : "bold",
			lineWeight : "3px"
		};

		return (
			<div style={ backgroundStyle }>
				<Counter display={ this.state.count }></Counter>
				<button style={ buttonStyle } onClick={ this.increase }> + </button>
			</div>
		);
	},

	increase(e) {
		var currentCount = this.state.count;

		if (e.shiftKey === true) {
			currentCount += 10;
		} else {
			currentCount += 1;
		}

		this.setState({
			count: currentCount
		})
	}
})
