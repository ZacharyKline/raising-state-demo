import React from "react";

function Block3(props) {
if (props.count > 10) {
	return (
		<div>
			<h1>Block 3</h1>
			<div className="Blocks" id="purple"></div>
		</div>
	);
} else {
	return (
		<div>
			<h1>Block 3</h1>
			<div className="Blocks" id="red"></div>
		</div>
	);
}
}

export default Block3;