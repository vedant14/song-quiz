import React, { useState } from "react";
import { Wrapper } from "./styles";
import { PlayQuiz } from "../PlayQuiz";
import { QuizResult } from "../QuizResult";
export function StartQuiz({
	currentQuestion,
	optionArray,
	setQuestionNumber,
	questionNumber,
}) {
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(true);

	return (
		<Wrapper className="Container">
			{showResult === true ? (
				<QuizResult
					score={score}
					setScore={setScore}
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
