import React     from 'react'
import TodoItems from './TodoItems'

export default React.createClass({
	getInitialState: function(){
		return {
			items : []
		}
	},
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={ this.addItem }>
						<input placeholder="请输入一个任务" ref={ (a)=> this._inputElement = a} />
						<button type="submit">添加</button>
					</form>
				</div>
				<TodoItems entries={ this.state.items }></TodoItems>
			</div>
		)
	},
	addItem(e) {
		var itemArray = this.state.items;
		itemArray.push({
			text : this._inputElement.value,
			key  : Date.now()
		});

		this.setState({
			items: itemArray
		});

		this._inputElement.value = '';
		this._inputElement.focus();

		e.preventDefault();
	}
})
