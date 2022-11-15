# dropdown_plugin_source_code
Code source du package npm suivant https://www.npmjs.com/package/dropdown-menu_op

React simple dropdown component for a openclassroom project

## Installation

To install, you can use npm:

```bash
npm i dropdown-menu_op
```

## Usage

via file data
```jsx
import React, { Component } from 'react'
import data from "assets/data.json";
import Dropdown_menu from "dropdown-menu_op";

<Dropdown_menu
	<Dropdown_menu
	name={"name"} // it is the name of the field and it's id
	required={"required"} //only if you want the field to be required
	datas={data} // the data you want to select from
	onChange={(e) => setState(e.target.value)} //the action on onChange
/>
```

via manual entry data
```jsx
import React, { Component } from 'react'

import Dropdown_menu from "dropdown-menu_op";

<Dropdown_menu
	<Dropdown_menu
	name={"name"} // it is the name of the field and it's id
	required={"required"} //only if you want the field to be required
	datas=datas={[
		{ name: name1, value: value1 },
		{ name: name2, value: value2 },
	]} // the data you want to select from
	onChange={(e) => setState(e.target.value)} //the action on onChange
/>
```
