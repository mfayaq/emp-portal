import React, { Component } from "react";
import Navbar from "../components/Navbar";
import mockdata from "../data/MOCK_DATA (3).json";
import ProfileUpper from "../components/ProfileUpper";
import ProfileDetails from "../components/ProfileDetails";
import { parse } from "query-string";
import { withRouter } from "react-router-dom";

export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			employeeData: {},
		};
	}

	componentWillMount() {
		// console.log(id);
		const setData = () => {
			let data = mockdata;
			this.setState({ data });
		};
		setData();
	}

	componentDidMount() {
		let id = parse(this.props.location.search).id;

		// let empdata = this.state.data.filter((emp) => emp.id === 2);
		// console.log(empdata);

		const selectEmployee = (id) => {
			let empData = this.state.data.filter((emp) => emp.id == id);
			console.log(empData);
			this.setState({ employeeData: empData[0] });
		};

		selectEmployee(id);
	}

	render() {
		return (
			<div>
				<Navbar />
				<br />
				<ProfileUpper emp={this.state.employeeData} />
				<ProfileDetails emp={this.state.employeeData} />
			</div>
		);
	}
}

export default withRouter(Profile);
