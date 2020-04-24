import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";

export class ProfileUpper extends Component {
	render() {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Avatar
					alt={this.props.emp.name}
					src="/static/images/avatar/1.jpg"
					style={{
						height: "1.5em",
						width: "1.5em",
						fontSize: "4em",
						marginRight: "6px",
					}}
				/>
				<Typography variant="h4" gutterBottom style={{ alignSelf: "center" }}>
					{this.props.emp.name}
				</Typography>
			</div>
		);
	}
}

export default ProfileUpper;
