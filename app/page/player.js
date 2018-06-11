import React   from 'react';
import Process from './../components/progress';
import './player.less';

var duration = null;

let Player = React.createClass({
	getInitialState(){
		return {
			progress: '-'
		}
	},
	componentDidMount(){
		$("#player").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
				}).jPlayer('play');
			},
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration;
			this.setState({
				// progress: Math.round(e.jPlayer.status.currentTime)
				progress: Math.round(e.jPlayer.status.currentPercentAbsolute)
			});
		});
	},
	componentWillUnmount(){
		$("#player").unbind($.jPlayer.event.timeupdate);
	},
	progressChangeHandler(process){
		$("#player").jPlayer('play', duration * process)
	},
	render(){
		return (
			<div>
				<div id="player"></div>
				<Process
					progress={ this.state.progress }
					onProgressChange={ this.progressChangeHandler }
					barColor="#FF0000">
				</Process>
			</div>
		)
	}
});

export default Player;
