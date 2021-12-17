import React, { useState } from "react";
import { Wrapper } from "./styles";
import { PlayQuiz } from "../PlayQuiz";
import { QuizResult } from "../QuizResult";
export function StartQuiz({
	currentQuestion,
	optionArray,
	setQuestionNumber,
	questionNumber,
	setResetQuiz,
}) {
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	return (
		<Wrapper className="Container">
			{showResult === true ? (
				<QuizResult
					score={score}
					setScore={setScore}
					setResetQuiz={setResetQuiz}
					setShowResult={setShowResult}
				/>
			) : (
				<PlayQuiz
					score={score}
					setScore={setScore}
					currentQuestion={currentQuestion}
					optionArray={optionArray}
					setQuestionNumber={setQuestionNumber}
					setShowResult={setShowResult}
					questionNumber={questionNumber}
				/>
			)}
		</Wrapper>
	);
}
