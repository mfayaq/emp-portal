import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<Link to="/" style={{ textDecoration: "none", color: "white" }}>
							<Typography variant="h6">Employee Portal</Typography>
						</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Navbar;
