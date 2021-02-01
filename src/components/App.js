import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import Jeopardy from './Questions';

export default function App() {
	const [questions, updateQuestions] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://jservice.io/api/random');
				const data = await response.json();
				updateQuestions(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<div>
				<h1>Let's Play Jeopardy</h1>
				<Counter questions={questions} />
			</div>

			<div>
				{Object.keys(questions).length ? (
					<Jeopardy questions={questions} />
				) : (
					''
				)}
			</div>
		</div>
	);
}
