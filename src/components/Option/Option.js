import React from 'react';
import swal from "sweetalert";
import './Option.css';
  
const Option = ({ option,  que }) => {
    const {correctAnswer, id} = que;
    
    const handleQuizAns = (option) =>{
        if(option === correctAnswer){
            swal('Wow! Good Job');
        }
        else{
            swal('Oops!! Wrong Answer')
        }
    }
  return (
    <div className="option">
      <label className="option-input " htmlFor="">
          <input onClick={() => handleQuizAns(option)} type="radio" name={id} />
          {option}
      </label>
    </div>
  );
};

export default Option;