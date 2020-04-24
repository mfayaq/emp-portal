import React, { Component } from "react";
import Navbar from "../components/Navbar";
import SelectBox from "../components/SelectBox";
import Table from "../components/Table";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import mockdata from "../data/MOCK_DATA (3).json";

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			filteredData: [],
			company: [],
			department: [],
		};
	}

	componentDidMount() {
		const setData = () => {
			let data = mockdata;
			this.setState({ data });
		};

		const selectData = (parameter) => {
			let mapData = new Map(mockdata.map((obj) => [obj[parameter], 1]));
			console.log(mapData);
			let array = Array.from(mapData.keys());
			console.log(array);
			this.setState({ [parameter]: array });
		};

		setData();
		selectData("company");
		selectData("department");
	}

	render() {
		const filterData = (key, selectBoxValue) => {
			let filteredData;
			if (this.state.filteredData.length === 0) {
				filteredData = this.state.data.filter(
					(obj) => obj[key] === selectBoxValue
				);
			} else {
				filteredData = this.state.filteredData.filter(
					(obj) => obj[key] === selectBoxValue
				);
			}
			this.setState({ filteredData });
		};

		return (
			<div>
				<Grid container>
					<Grid xs="12" style={{ marginBottom: "2%" }}>
						<Navbar />
					</Grid>
					<Grid xs style={{ display: "flex", justifyContent: "center" }}>
						<div style={{ width: "75%" }}>
							<Grid container justify="space-evenly">
								<SelectBox
									autoWidth="true"
									label="company"
									data={this.state.company}
									filterData={filterData}
								/>
								<SelectBox
									label="department"
									data={this.state.department}
									filterData={filterData}
								/>
								{/* <Button
									variant="contained"
									color="primary"
									style={{ height: "70%", alignSelf: "flex-end" }}
								>
									Submit
								</Button> */}
							</Grid>
						</div>
					</Grid>
					{/* <Grid xs></Gx></Grid> */}
					<Grid
						xs="12"
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: "2%",
						}}
					>
						<Paper style={{ width: "75%" }} elevation={3}>
							<Table filteredData={this.state.filteredData} />
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Home;
