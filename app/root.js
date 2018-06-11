import React      from 'react';
import Header     from './components/header';
import Player     from './page/player';
import { MUSIC_LIST } from './config/musiclist';

let Root = React.createClass({
	getInitialState(){
		return {
			currentMusicItem:MUSIC_LIST[0]
		};
	},
	render(){
		return (
			<div>
				<div id="player"></div>
				<Header></Header>
				<Player
					currentMusicItem={ this.state.currentMusicItem }></Player>
			</div>
		)
	}
});

export default Root;
