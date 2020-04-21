import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return(
			<nav className= "navbar navbar-dark bg-dark navbar-expand-lg col-5">
	  			<div className= "collapse navbar-collapse">
	  			<ul className= "navbar-nav mr-auto">
	  				<li className= "navbar-item">
	  					<Link to= "/homepage" className= "nav-link">Home</Link>
	  				</li>
	  				<li className= "navbar-item">
	  					<Link to= "/login" className= "nav-link">Login</Link>
	  				</li>
	  			</ul>
	  			</div>
			</nav>
		);
	}
}

export default Navbar;