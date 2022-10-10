import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import swal from "sweetalert";
import Option from '../Option/Option';


const QuizDetails = ({que}) => {
    const { question, options, correctAnswer } = que;

    const handleCorrectAns = ()=>{
        swal(correctAnswer);
    }

    return (
      <div>
        <p>{question}</p> <FontAwesomeIcon onClick={handleCorrectAns} icon={faEye} />
        {options.map((option) => (
          <Option que={que} option={option}></Option>
        ))}
      </div>
    );
};

export default QuizDetails;