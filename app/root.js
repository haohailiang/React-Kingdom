import React          from 'react';
import Header         from './components/header';
import Player         from './page/player';
import MusicList      from './page/musiclist';
import { MUSIC_LIST } from './config/musiclist';

let Root = React.createClass({
	getInitialState(){
		return {
			musicList        : MUSIC_LIST,
			currentMusicItem : MUSIC_LIST[0]
		};
	},
	render(){
		return (
			<div>
				<div id="player"></div>
				<Header></Header>
				<MusicList
					currentMusicItem={ this.state.currentMusicItem }
					musicList={ this.state.musicList }>
				</MusicList>
			</div>
		)
	}
});

export default Root;
