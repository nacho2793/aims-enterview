import React, { Component } from 'react';
import TimeItem from './timeItem/timeItem';
import classes from './countDown.css';

class Countdown extends Component {
	state = {
		timer: {
			days: 0,
			hours: 0,
			minutes: 1,
			seconds: 0,
		},
		started: false,
		ended : false
	}
	interval = 0;
	endMessage = '';
	plusOneHandler = (measure) => {
		let timer = this.state.timer;
		if (measure === 'seconds') {
			(timer.seconds) + 1 < 60 ? timer.seconds += 1 : (
				timer.minutes + 1 < 60 ? (timer.minutes += 1, timer.seconds = 0) : (
					timer.hours +1 < 24 ? (timer.seconds = 0, timer.minutes = 0, timer.hours += 1) : (timer.seconds = 0, timer.minutes = 0, timer.hours = 0, timer.days += 1)
				)
			);
		} else if (measure === 'minutes') {
			timer.minutes + 1 < 60 ? (timer.minutes += 1, timer.seconds = 0) : (
				timer.hours +1 < 24 ? (timer.seconds = 0, timer.minutes = 0, timer.hours += 1) : (timer.hours = 0, timer.days += 1)
			)
		} else if (measure === 'hours') {
			timer.hours +1 < 24 ? (timer.seconds = 0, timer.minutes = 0, timer.hours += 1) : (timer.hours = 0, timer.days += 1)
		} else if (measure === 'days') {
			timer.days += 1;
		}
		this.setState({ timer });
	}
	lessOneHandler = (measure) => {
		let timer = this.state.timer;
		if (measure === 'seconds') {
			timer.seconds - 1 > 0 ? timer.seconds -= 1 : (
				timer.minutes > 0 ? (timer.seconds = 59, timer.minutes -= 1) : (
					timer.hours > 0 ? (timer.seconds = 59, timer.minutes = 59, timer.hours -= 1) : (
						timer.days > 0 ? (timer.seconds = 59, timer.minutes = 59, timer.hours = 23, timer.days -= 1) : (
							this.state.started === true ? (timer.seconds = 0, this.endTimer()) : null
						)
					)
				)
			);
		} else if (measure === 'minutes') {
			timer.minutes - 1 >= 0 ? timer.minutes -= 1 : (
				timer.hours > 0 ? (timer.minutes = 59, timer.hours -= 1) : (
					timer.days > 0 ? (timer.minutes = 59, timer.hours = 23, timer.days -= 1) : null
				)
			)
		} else if (measure === 'hours') {
			timer.hours - 1 >= 0 ? timer.hours -= 1 : (
				timer.days > 0 ? (timer.hours = 23, timer.days -= 1) : null
			)
		} else if (measure === 'days') {
			timer.days - 1 >= 0 ? timer.days -= 1 : null
		} else {
			return null;
		}
		this.setState({ timer });
	}
	startHandler = () => {
		this.endMessage = '';
		this.setState({started: true, ended: false});
		this.options = (
			<button onClick={this.stopHandler}>Stop</button>
		)
		this.interval = setInterval(() => {
			this.lessOneHandler('seconds')
		}, 1000);
	}
	stopHandler = () => {
		this.setState({started: false});
		clearInterval(this.interval);
	}
	endTimer = () => {
		this.endMessage = (<p>DONE!</p>);
		this.stopHandler();
		this.setState({started:false, ended:true})
	}
	disableStart = () => {
		let disable = true;
		Object.keys(this.state.timer).map((key) => {
			if (this.state.timer[key] > 0) {
				disable = this.state.started;
			} 
		})
		return disable;
	}
  componentWillUnmount() {
    clearInterval(this.interval);
	}
	render() {
		return (
			<div className={classes.CountDown}>
				<h1>Count down Timer</h1>
				<div className={classes.container}>
					{Object.keys(this.state.timer).map((key) => (
						<TimeItem
							key={key}
							up={() => this.plusOneHandler(key)}
							down={() => this.lessOneHandler(key)}
							measure={key}
							number={('0' + this.state.timer[key]).slice(-2)} />
					))}
				</div>
				{this.endMessage}
				<button onClick={this.startHandler} className={classes.succes} disabled={this.disableStart()}>Start</button>
				<button onClick={this.stopHandler} disabled={!this.state.started}>Stop</button>
			</div>
		);
	}
}

export default Countdown;