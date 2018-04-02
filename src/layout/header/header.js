import React from "react";
import classes from "./header.css";
import { Link } from 'react-router-dom';

const header = (props) => (
	<div className={classes.Header}>
		<span className={classes.item}>	<Link to="/" className={classes.nav} style={{width:'6rem', display:'inline-block'}}>Home</Link></span>
		<span className={[classes.item, classes.center].join(' ')}>AIMS MEXICO TEST</span>
		<span className={[classes.item, classes.navContainer].join(' ')}>
			<Link to="/ex1" className={classes.nav}>Exc1</Link>
			<Link to="/ex2" className={classes.nav}>Exc2</Link>
		</span>
	</div>
)

export default header;