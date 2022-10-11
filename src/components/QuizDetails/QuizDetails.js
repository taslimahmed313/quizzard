import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import swal from "sweetalert";
import Option from '../Option/Option';
import './QuizDetails.css';


const QuizDetails = ({que}) => {
    const { question, options, correctAnswer } = que;

    const handleCorrectAns = ()=>{
        swal('Correct Answer', correctAnswer);
    }

    return (
      <div className="quiz-details">
        <div className="qna">
          <p>{question}</p>
          <FontAwesomeIcon onClick={handleCorrectAns} icon={faEye} />
        </div>
        <div className="options">
          {options.map((option) => (
            <Option que={que} option={option}></Option>
          ))}
        </div>
      </div>
    );
};

export default QuizDetails;