import React, { useState } from "react";
import { Wrapper } from "./styles";
import { PlayQuiz } from "../PlayQuiz";
export function StartQuiz({
	currentQuestion,
	optionArray,
	setQuestionNumber,
	questionNumber,
}) {
	const [score, setScore] = useState(0);
	return (
		<Wrapper className="Container">
			<PlayQuiz
				score={score}
				setScore={setScore}
				currentQuestion={currentQuestion}
				optionArray={optionArray}
				setQuestionNumber={setQuestionNumber}
				questionNumber={questionNumber}
			/>
		</Wrapper>
	);
}
