import React from "react";

function Block2(props) {
    if (props.count % 2 === 0) {
			return (
				<div>
					<h1>Block 2</h1>
					<div className="Blocks" id="blue"></div>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Block 2</h1>
					<div className="Blocks" id="purple"></div>
				</div>
			);
		}
    
}

export default Block2