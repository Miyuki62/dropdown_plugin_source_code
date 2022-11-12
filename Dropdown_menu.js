import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @returns custom Dropdown menu
 */

function Dropdown_menu({ name, datas, onChange, required }) {
	return React.createElement(
		"div",
		{ className: "input" },
		React.createElement(
			"label",
			{ className: "input__label", htmlFor: name },
			name
		),
		React.createElement(
			"select",
			{
				className: "input__input",
				name: name,
				id: name,
				onChange: onChange,
				required: required
			},
			datas.map(data => React.createElement(
				"option",
				{ key: data.name, value: data.value },
				data.name
			))
		)
	);
}

export default Dropdown_menu;



Dropdown_menu.propTypes = {
	name: PropTypes.string,
	datas: PropTypes.array,
	onChange: PropTypes.func,
};
