import React                                                           from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';
import Header                                                          from './components/header';
import Player                                                          from './page/player';
import MusicList                                                       from './page/musiclist';
import { MUSIC_LIST }                                                  from './config/musiclist';

let App = React.createClass({
	getInitialState(){
		return {
			musicList        : MUSIC_LIST,
			currentMusicItem : MUSIC_LIST[0]
		};
	},
	componentDidMount() {
		PubSub.subscribe('PLAY_NEXT', () => {
			this.playNext();
		});
		PubSub.subscribe('PLAY_PREV', () => {
			this.playNext('prev');
		});
	},
	playMusic(musicItem){
		$('#player').jPlayer("setMedia", {
			mp3: musicItem.file
		}).jPlayer('play');
	},
	playNext(type="next"){
		let index = this.findMusicIndex(this.state.currentMusicItem);
		let newIndex = null;
		let musicLength = this.state.musicList.length
		if(type === "next"){
			newIndex = (index + 1) % musicLength;
		}else{
			newIndex = (index - 1 + musicLength) % musicLength;
		}
		let musicItem = this.state.musicList[newIndex];
		this.setState({
			currentMusicItem: musicItem
		});
		this.playMusic(musicItem);
	},
	findMusicIndex(musicItem){
		return this.state.musicList.indexOf(musicItem);
	},
	render(){
		return (
			<div>
				<Header></Header>
				{ React.cloneElement(this.props.children, this.state) }
				{/* { this.props.children } */}
				<MusicList
					currentMusicItem={ this.state.currentMusicItem }
					musicList={ this.state.musicList }>
				</MusicList>
			</div>
		)
	}
});

let Root = React.createClass({
	render() {
	    return (
		    <Router history={hashHistory}>
		        <Route path="/" component={App}>
		            <IndexRoute component={Player}/>
		            <Route path="/list" component={MusicList} />
		        </Route>
		    </Router>
		);
	}
});

export default Root;
