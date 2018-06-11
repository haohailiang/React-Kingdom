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
				<div className="player-page">
	                <h1 className="caption">我的私人音乐坊 &gt;</h1>
	                <div className="mt20 row">
	                	<div className="controll-wrapper">
	                		<h2 className="music-title">歌曲名称</h2>
	                		<h3 className="music-artist mt10">歌手</h3>
	                		<div className="row mt20">
	                			<div className="left-time -col-auto">-2:00</div>
	                			<div className="volume-container">
	                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
	                				<div className="volume-wrapper">
										音量控制部分
									</div>
								</div>
							</div>
							<div style={{height: 10, lineHeight: '10px'}}>
								播放进度部分
								{/* <Process
									progress={ this.state.progress }
									onProgressChange={ this.progressChangeHandler }
									barColor="#FF0000">
								</Process> */}
							</div>
							<div className="mt35 row">
                			<div>
	                			<i className="icon prev"></i>
	                			<i className={`icon ml20 play`}></i>
	                			<i className="icon next ml20"></i>
                			</div>
                			<div className="-col-auto">
                				<i className={`icon repeat-cycle`}></i>
                			</div>
                		</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default Player;
