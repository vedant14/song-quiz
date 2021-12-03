import React from "react";
import { Wrapper } from "./styles";

export function QuizResult({ score, setScore, setShowResult }) {
	const handleNewQuiz = () => {
		setScore(0);
		setShowResult(false);
	};
	return (
		<Wrapper className="Container">
			<div id="score">
				<h1>You scored {score} points!</h1>
			</div>

			<button onClick={() => handleNewQuiz()}>Retake the quiz</button>
		</Wrapper>
	);
}
