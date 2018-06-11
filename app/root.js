import React   from 'react';
import Header  from './components/header';
import Process from './components/progress';

let Root = React.createClass({
	getInitialState(){
		return {
			progress: '0'
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
		console.log( `from root widget ${process}` );
	},
	render(){
		return (
			<div>
				<div id="player"></div>
				<Header></Header>
				<Process
					progress={ this.state.progress }
					onProgressChange={ this.progressChangeHandler }>
				</Process>
			</div>
		)
	}
});

export default Root;
