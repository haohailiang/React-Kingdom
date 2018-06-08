import React from 'react';
import './header.less';

let Header = React.createClass({
	render(){
		return (
			<div className="component-header">
				<img src="/static/images/logo.png" width="40" />
				<h1 className="caption">React music player</h1>
			</div>
		)
	}
});

export default Header;
