import React                                                           from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';
import Header                                                          from './components/header';
import Player                                                          from './page/player';
import MusicList                                                       from './page/musiclist';
import { randomRange }                                                 from './utils/util';
import { MUSIC_LIST }                                                  from './config/musiclist';

let App = React.createClass({
	getInitialState(){
		return {
			musicList        : MUSIC_LIST,
			currentMusicItem : MUSIC_LIST[0],
			repeatType       : 'cycle'
		};
	},
	componentDidMount() {
		$("#player").jPlayer({
			supplied          : "mp3",
			wmode             : "window",
			useStateClassSkin : true
		});
		console.log( this.state.currentMusicItem );
		this.playMusic(this.state.currentMusicItem);

		$("#player").bind($.jPlayer.event.ended, (e) => {
			this.playWhenEnd();
		});

		PubSub.subscribe('PLAY_NEXT', () => {
			this.playNext();
		});
		PubSub.subscribe('PLAY_PREV', () => {
			this.playNext('prev');
		});
        // msg 操作名称 PLAY_MUSIC
        // item 操作的节点
		PubSub.subscribe('PLAY_MUSIC', (msg, item) => {
			this.playMusic(item);
		});
		PubSub.subscribe('DEL_MUSIC', (msg, item) => {
			this.setState({
				musicList: this.state.musicList.filter((music) => {
					return music !== item;
				})
			});
		});
		let repeatList = [
			'cycle',
			'once',
			'random'
		];
		PubSub.subscribe('CHANAGE_REPEAT', () => {
			let index = repeatList.indexOf(this.state.repeatType);
			index = (index + 1) % repeatList.length;
			this.setState({
				repeatType: repeatList[index]
			});
		});
	},
	componentWillUnmount() {
		PubSub.unsubscribe('PLAY_MUSIC');
		PubSub.unsubscribe('DEL_MUSIC');
		PubSub.unsubscribe('CHANAGE_REPEAT');
		PubSub.unsubscribe('PLAY_NEXT');
		PubSub.unsubscribe('PLAY_PREV');
	},
	playWhenEnd() {
		if (this.state.repeatType === 'random') {
			let index = this.findMusicIndex(this.state.currentMusitItem);
			let randomIndex = randomRange(0, this.state.musicList.length - 1);
			while(randomIndex === index) {
				randomIndex = randomRange(0, this.state.musicList.length - 1);
			}
			this.playMusic(this.state.musicList[randomIndex]);
		} else if (this.state.repeatType === 'once') {
			this.playMusic(this.state.currentMusitItem);
		} else {
			this.playNext();
		}
	},
	playMusic(musicItem){
		$('#player').jPlayer("setMedia", {
			mp3: musicItem.file
		}).jPlayer('play');

		this.setState({
			currentMusicItem: musicItem
		});
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
				{/* <MusicList
					currentMusicItem={ this.state.currentMusicItem }
					musicList={ this.state.musicList }>
				</MusicList> */}
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
