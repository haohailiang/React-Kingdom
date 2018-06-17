import React    from 'react'
import Home     from './Home'
import { IndexLink, Link } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div className="whole-page">
				<h1>Simple SPA</h1>
				<ul className="header">
					<li><IndexLink to="/" activeClassName="active">李白</IndexLink></li>
					<li><Link to="/df" activeClassName="active">杜甫</Link></li>
					<li><Link to="/lsy" activeClassName="active">李商隐</Link></li>
				</ul>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		)
	}
})
