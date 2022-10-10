import React from 'react';
import Option from '../Option/Option';

const QuizDetails = ({que}) => {
    const { question, options } = que;

    return (
      <div>
        <p>{question}</p>
        {options.map((option) => (
          <Option  que={que} option={option}></Option>
        ))}
      </div>
    );
};

export default QuizDetails;