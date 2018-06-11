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
	render(){
		return (
			<div>
				<Header></Header>
				{ React.cloneElement(this.props.children, this.state) }
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
