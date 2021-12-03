import React, { useState } from "react";
import { Wrapper } from "./styles";

export function PlayQuiz({
	score,
	setScore,
	currentQuestion,
	optionArray,
	questionNumber,
	setShowResult,
	setQuestionNumber,
}) {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showAnswer, setShowAnswer] = useState(false);
	const questionLimit = process.env.NEXT_PUBLIC_QUESTION_LIMIT;
	const handleNextQuestion = () => {
		setSelectedAnswer(null);
		if (questionNumber + 1 >= questionLimit) {
			setQuestionNumber(0);
			setShowResult(true);
		} else {
			setQuestionNumber(questionNumber + 1);
		}
	};

	const handleAnswerSubmit = (answer) => {
		setSelectedAnswer(answer.id);
		if (answer.isCorrect === true) {
			setScore(score + 10);
			setShowAnswer("correct-answer");
		} else {
			setShowAnswer("incorrect-answer");
		}
	};
	return (
		<Wrapper className="Container">
			<div id="number">
				<p>
					Question:
					{questionNumber + 1}/{questionLimit}
				</p>
			</div>
			<div id="question">
				<h2>{currentQuestion.lyrics}</h2>
				{optionArray.map((option) => (
					<button
						key={option.id}
						disabled={selectedAnswer !== null ? true : false}
						className={
							selectedAnswer === option.id ? showAnswer : ""
						}
						onClick={() => handleAnswerSubmit(option)}
					>
						{option.song}
					</button>
				))}
				<div>
					{selectedAnswer && (
						<button onClick={() => handleNextQuestion()}>
							Next Question
						</button>
					)}
				</div>
			</div>
			<div id="score">
				<p>Your Score: {score}</p>
			</div>
		</Wrapper>
	);
}
