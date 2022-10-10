import React from 'react';
import Option from '../Option/Option';

const QuizDetails = ({que}) => {
    const { question, options, correctAnswer } = que;

    const handleCorrectAns = () =>{
        console.log(correctAnswer)
    }

    return (
      <div>
        <p>{question}</p>
        {options.map((option) => (
          <Option handleCorrectAns={handleCorrectAns} option={option}></Option>
        ))}
      </div>
    );
};

export default QuizDetails;