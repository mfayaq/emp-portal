import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export const SelectBox = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setValue(event.target.value);
		// console.log(setValue);
		props.filterData(props.label, event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="open-select-label">{props.label}</InputLabel>
				<Select
					labelId="open-select-label"
					id="open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={value}
					onChange={handleChange}
					autoWidth
				>
					{props.data.map((item) => (
						<MenuItem value={item}>{item}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectBox;
