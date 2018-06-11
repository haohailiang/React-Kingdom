import React   from 'react';
import Header  from './components/header';
import Player  from './page/player';

let Root = React.createClass({
	getInitialState(){
		return {};
	},
	render(){
		return (
			<div>
				<div id="player"></div>
				<Header></Header>
				<Player></Player>
			</div>
		)
	}
});

export default Root;
