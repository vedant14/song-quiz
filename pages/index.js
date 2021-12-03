import React, { useState } from "react";
import { Layout, Footer, StartQuiz } from "../components";
import Airtable from "airtable";

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)("Hindi")
    .select({
      fields: ["Lyrics", "Song name", "artist"],
    })
    .all();

  const songData = records.map((record) => {
    return {
      id: record.getId(),
      lyrics: record.get("Lyrics"),
      song: record.get("Song name"),
      artist: record.get("artist"),
    };
  });

  const songOptions = records.map((record) => {
    return {
      id: record.getId(),
      song: record.get("Song name"),
      isCorrect: false,
    };
  });

  return {
    props: {
      songData,
      songOptions,
    },
  };
}

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const Home = ({ songData, songOptions }) => {
  shuffleArray(songData);
  shuffleArray(songOptions);

  const [questionNumber, setQuestionNumber] = useState(0);
  const questionLimit = process.env.NEXT_PUBLIC_QUESTION_LIMIT;

  var questions = songData.slice(0, questionLimit);
  var currentQuestion = questions[questionNumber];
  var optionArray = songOptions
    .filter((question) => question.song != currentQuestion.song)
    .slice(questionNumber * 2, questionNumber * 2 + 3);

  var correctArray = [
    {
      id: currentQuestion.id,
      song: currentQuestion.song,
      isCorrect: true,
    },
  ];

  var finalArray = optionArray.concat(correctArray);
  shuffleArray(finalArray);
  return (
    <Layout>
      <StartQuiz
        currentQuestion={currentQuestion}
        optionArray={finalArray}
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
      />
      <Footer />
    </Layout>
  );
};

export default Home;
