import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export class Navbar extends Component {
	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6">Employee Portal</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Navbar;
