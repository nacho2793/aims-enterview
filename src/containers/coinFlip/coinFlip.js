import React, { Component } from "react";
import classes from './coinFlip.css';

class CoinFlip extends Component {
    state = {
        seed: 500,
        random: null
    }
    flip = () => {
        return Math.random() >= 0.5;
    }
    changeSeed = (event) => {
        let newNumber = Number(event.target.value);
        if (newNumber < 1) {
            newNumber = 1;
        } else if (newNumber > 1000000) {
            newNumber = 1000000;
        }
        this.setState({
            seed: newNumber
        })
    }
    randomNumber = () => {
        let random = 0;
        for (let i=0; i<this.state.seed; i++) {
            if(this.flip()){
                random += i;
            }
        }
        random %= this.state.seed;
        this.setState({ random: random });
    }
    render() {
        return (
            <div className={classes.CoinFlip}>
                <h1>Coin Flip</h1>
                <span>Seed: </span>
                <input type="text" onChange={this.changeSeed} value={this.state.seed} />
                <p>Random: {this.state.random !== null ? this.state.random : '???'}</p>
                <button onClick={this.randomNumber}>Randon Number</button>
            </div>
        );
    }
}

export default CoinFlip;