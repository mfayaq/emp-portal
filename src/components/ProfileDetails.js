import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export class ProfileDetails extends Component {
	render() {
		console.log(Object.entries(this.props.emp));
		let userData = Object.entries(this.props.emp).map((data) => (
			<div>
				<Divider />
				<ListItem button>
					<ListItemText primary={data[0]} />
					<ListItemText secondary={data[1]} />
				</ListItem>
			</div>
		));
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<List component="nav" style={{ width: "75%" }}>
					{userData}
				</List>
			</div>
		);
	}
}

export default ProfileDetails;
