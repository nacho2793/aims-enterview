import React from "react";
import classes from './timeItem.css';

const timeItem = (props) => (
    <div className={classes.Container}>
			<div className={classes.full} onClick={props.up}>
        <i className="fas fa-caret-up"></i>
			</div>
			
			<div className={classes.number}>
        {props.number}
			</div>
			<div className={classes.measure}>
        {props.measure}
			</div>
			<div className={classes.full} onClick={props.down}>
        <i className="fas fa-caret-down"></i>
			</div>
    </div>
);

export default timeItem;