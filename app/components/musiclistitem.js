import React  from 'react';
import Pubsub from 'pubsub-js';
import './musiclistitem.less';

let MusicListItem = React.createClass({
	playMusic(item, e) {
		PubSub.publish('PLAY_MUSIC', item);
	},
	deleteHandler(item, event) {
		event.stopPropagation();
		PubSub.publish('DEL_MUSIC', item);
	},
	render(){
		let musicItem = this.props.musicItem;
		return (
			<li onClick={this.playMusic.bind(this, musicItem)} className={`components-listitem row${this.props.focus ? ' focus' : ''}`}>
				<p><strong>{ musicItem.title }</strong> - { musicItem.artist }</p>
				<p className="-col-auto delete" onClick={this.deleteHandler.bind(this, musicItem)}></p>
			</li>
		);
	}
});

export default MusicListItem;
