import React, { useState } from 'react';

export default function App(props) {
	const [points, updatePoints] = useState(0);
	const increasePoints = () => updatePoints(points + props.questions[0].value);
	const decreasePoints = () => updatePoints(points - props.questions[0].value);
	const reset = () => updatePoints(0);

	return (
		<div>
			<span> Points: {points} </span> <br />
			<button onClick={increasePoints}> Right Answer</button> <br />
			<button onClick={decreasePoints}> Wrong Answer</button> <br />
			<button onClick={reset}> Reset </button>
		</div>
	);
}
