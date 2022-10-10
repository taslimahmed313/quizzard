import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    const {data} = quiz;
    return (
      <div>
        <div>Quiz of {data.name}</div>
        <div>
            {data.questions.map((que) => console.log(que))}
            {data.questions.map((que) => <QuizDetails key={que.id} que={que}></QuizDetails>)}
        </div>
      </div>
    );
};

export default Quiz;