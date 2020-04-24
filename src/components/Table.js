import React, { Component } from "react";
import MaterialTable from "material-table";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { withRouter } from "react-router-dom";

export class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredData: [],
			columns: [],
		};
	}

	componentWillMount() {
		let arr = this.props.filteredData.map((data) => ({
			id: data.id,
			name: data.name,
			email: data.email,
			company: data.company,
			department: data.department,
		}));
		this.setState({ filteredData: arr });
	}

	render() {
		return (
			<div>
				<MaterialTable
					title="Employee-Data"
					columns={[
						{ title: "Id", field: "id" },
						{ title: "Name", field: "name" },
						{ title: "Email", field: "email" },
						{ title: "Company", field: "company" },
						{ title: "Department", field: "department" },
					]}
					data={this.props.filteredData}
					actions={[
						{
							icon: OpenInNewIcon,
							tooltip: "Show User Details",
							onClick: (event, rowData) => {
								this.props.history.push(`/profile?id=${rowData.id}`);
							},
						},
					]}
					options={{
						actionsColumnIndex: -1,
					}}
				/>
			</div>
		);
	}
}

export default withRouter(Table);
