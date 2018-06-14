import React    from 'react';
import Pubsub   from 'pubsub-js';
import Process  from './../components/progress';
import { Link } from 'react-router';
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
	playNext() {
		PubSub.publish('PLAY_NEXT');
	},
	playPrev() {
		PubSub.publish('PLAY_PREV');
	},
	changeRepeat() {
		PubSub.publish('CHANAGE_REPEAT');
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
	                <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
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
		                			<i className="icon prev" onClick={ this.playPrev }></i>
		                			<i className={`icon ml20 ${this.state.isPlay? 'pause' : 'play'}`} onClick={ this.play }></i>
		                			<i className="icon next ml20" onClick={ this.playNext }></i>
	                			</div>
	                			<div className="-col-auto">
	                				<i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
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
