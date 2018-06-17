import React from 'react'
import Home  from './Home'

export default React.createClass({
	render() {
		return (
			<div>
				<h1>Simple SPA</h1>
				<ul className="header">
					<li>李白</li>
					<li>杜甫</li>
					<li>李商隐</li>
				</ul>
				<div className="content">
					<Home></Home>
				</div>
			</div>
		)
	}
})
