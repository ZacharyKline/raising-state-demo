import React from 'react'

function Block1(props) {
    if (props.count % 2 === 0) {
			return (
				<div>
					<h1>Block 1</h1>
					<div className="Blocks" id="black"></div>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Block 1</h1>
					<div className="Blocks" id="red"></div>
				</div>
			);
		}
}

export default Block1