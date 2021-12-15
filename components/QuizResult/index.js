import React from "react";
import { Wrapper } from "./styles";

export function QuizResult({ score, setScore, setShowResult }) {
	const handleNewQuiz = () => {
		setScore(0);
		setShowResult(false);
	};

	var whatsappLink = "https://wa.me/";
	var twitterLink = "https://twitter.com/intent/tweet";
	const shareText =
		"?text=I scored " +
		score +
		" points on Songtastic. Take the song lyrics quiz and see if you can beat my score.";
	const twitterText =
		twitterLink + shareText + "&url=https://www.songtastic.xyz/";
	const whatsappText =
		whatsappLink + shareText + " https://www.songtastic.xyz/";
	return (
		<Wrapper className="Container">
			<div id="score">
				<h1>Your Songtastic score is {score}!</h1>
			</div>
			<button onClick={() => handleNewQuiz()}>Retake the quiz</button>
			<hr />
			<div id="share">
				<p>Share and challenge your friends to beat your score!</p>
				<div id="share-buttons">
					<button>
						<a
							href={twitterText}
							data-size="large"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Twitter{" "}
						</a>
					</button>
					<button>
						<a
							href={whatsappText}
							data-action="share/whatsapp/share"
							target="_blank"
							rel="noreferrer"
						>
							Whatsapp
						</a>
					</button>
				</div>
			</div>
		</Wrapper>
	);
}
