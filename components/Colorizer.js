import React   from 'react'

export default React.createClass({
	getInitialState() {
		return {
			color   : '',
			bgColor : ''
		}
	},

	render() {
		var squareStyle = {
			backgroundColor: this.state.bgColor
		};

		var self = this;

		return (
			<div className="colorArea">
				<div style={ squareStyle } className="colorSquare"></div>
				<form onSubmit={ this.setNewColor }>
					<input placeholder="please enter a color" ref={ function(el) {
						self._input = el;
					}} onChange={ this.colorValue } />
					<button>Show</button>
				</form>
			</div>
		)
	},

	colorValue(e) {
		this.setState({
			color: e.target.value
		});
	},

	setNewColor(e) {
		this.setState({
			bgColor: this.state.color
		});

		this._input.value = '';
		this._input.focus();

		e.preventDefault();
	}
})
