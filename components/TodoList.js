import React    from 'react'

export default React.createClass({
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form>
						<input placeholder="请输入一个任务" />
						<button>添加</button>
					</form>
				</div>
			</div>
		)
	}
})
