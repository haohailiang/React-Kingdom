import React   from 'react';
import Process from './../components/progress';
import './player.less';

var duration = null;

let Player = React.createClass({
	getInitialState(){
		return {
			progress : 0,
			volume   : 0,
			isPlay   : true
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
				volume : e.jPlayer.status.volume * 100,
				progress: Math.round(e.jPlayer.status.currentPercentAbsolute)
			});
		});
	},
	componentWillUnmount(){
		$("#player").unbind($.jPlayer.event.timeupdate);
	},
    // 改变音量大小
	changeVolumeHandler(process){
		this.setState({
			volume : process * 100
		});
		$("#player").jPlayer('volume', process)
	},
    // 改变播放进度
	progressChangeHandler(process){
		$("#player").jPlayer('play', duration * process)
	},
    // 播放-暂停的转换
	play(){
		if(this.state.isPlay){
			$("#player").jPlayer('pause');
		}else{
			$("#player").jPlayer('play');
		}
		this.setState({
			isPlay:!this.state.isPlay
		});
	},
	render(){
		return (
			<div>
				<div className="player-page">
	                <h1 className="caption">我的私人音乐坊 &gt;</h1>
	                <div className="mt20 row">
	                	<div className="controll-wrapper">
	                		<h2 className="music-title">{ this.props.currentMusicItem.title}</h2>
	                		<h3 className="music-artist mt10">{ this.props.currentMusicItem.artist}</h3>
	                		<div className="row mt20">
	                			<div className="left-time -col-auto">-2:00</div>
	                			<div className="volume-container">
	                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
	                				<div className="volume-wrapper">
										<Process
											progress={ this.state.volume }
											onProgressChange={ this.changeVolumeHandler }
											barColor="#aaa">
										</Process>
									</div>
								</div>
							</div>
							<div style={{height: 10, lineHeight: '10px'}}>
								<Process
									progress={ this.state.progress }
									onProgressChange={ this.progressChangeHandler }>
								</Process>
							</div>
							<div className="mt35 row">
	                			<div>
		                			<i className="icon prev"></i>
		                			<i className={`icon ml20 ${this.state.isPlay? 'pause' : 'play'}`} onClick={ this.play }></i>
		                			<i className="icon next ml20"></i>
	                			</div>
	                			<div className="-col-auto">
	                				<i className={`icon repeat-cycle`}></i>
	                			</div>
	                		</div>
						</div>
						<div className="-col-auto cover">
	                		<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
	                	</div>
					</div>
				</div>
			</div>
		)
	}
});

export default Player;
