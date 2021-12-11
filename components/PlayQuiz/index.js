import React, { useState } from "react";
import { Wrapper, ShowAnswerCard } from "./styles";
import statements from "../../data/statements.json";
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
	const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
	const questionLimit = process.env.NEXT_PUBLIC_QUESTION_LIMIT;
	const handleNextQuestion = () => {
		setSelectedAnswer(null);
		setIsCorrectAnswer(false);
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
			setIsCorrectAnswer(true);
			setScore(score + 10);
		}
	};

	const handleShowAnswer = (answer) => {
		if (selectedAnswer !== null) {
			if (answer.isCorrect === true) {
				return "correct-answer";
			} else if (selectedAnswer === answer.id) {
				return "incorrect-answer";
			}
		}
	};

	const rndInt = Math.floor(Math.random() * 3);
	const showStatement = (
		<div>
			{isCorrectAnswer === true ? (
				<ShowAnswerCard>
					<p>{statements[0].right[rndInt]}</p>
				</ShowAnswerCard>
			) : (
				<ShowAnswerCard>
					<p>{statements[0].wrong[rndInt]}</p>
				</ShowAnswerCard>
			)}
		</div>
	);
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
						className={handleShowAnswer(option)}
						onClick={() => handleAnswerSubmit(option)}
					>
						{option.song}
					</button>
				))}
				<div>
					{selectedAnswer && (
						<div>
							<p>{showStatement}</p>
							<button onClick={() => handleNextQuestion()}>
								Next Question
							</button>
						</div>
					)}
				</div>
			</div>
			<div id="score">
				<p>Your Score: {score}</p>
			</div>
		</Wrapper>
	);
}
