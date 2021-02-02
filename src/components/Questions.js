import React, { useState } from 'react';
export default function Jeopardy(props) {
	const [answer, setAnswer] = useState('');
	const [toggle, setToggle] = useState(false);
	// const [question, setQuestion] = useState('');
	const toggleAnswer = () => {
		toggle ? setToggle(false) : setToggle(true);
	};
	// const nextQuestion = () => {
	// 	setQuestion();

	return (
		<div>
			<h2>Category: {props.questions[0].category.title}</h2>
			<h2>Points: {props.questions[0].value}</h2>
			<h2>Question: {props.questions[0].question}</h2>
			<button onClick={toggleAnswer}>Show Answer</button>
			<div className={toggle ? 'answer' : 'no-answer'}>
				<h2>Answer: {props.questions[0].answer.toUpperCase()}</h2>
			</div>
			{/* <button onClick={getData}>Next Question</button> */}
			{/* <h2>Question: {question}</h2> */}
		</div>
	);
}
