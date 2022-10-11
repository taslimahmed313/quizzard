import React from 'react';
import swal from "sweetalert";
import './Option.css';
  
const Option = ({ option,  que }) => {
    const {correctAnswer, id} = que;
    console.log(que)
    
    const handleQuizAns = () =>{
        if(option === correctAnswer){
            swal('Wow! Good Job');
        }
        else{
            swal('Oops!! Wrong Answer')
        }
    }
  return (
    <div className="option">
      {/* <form className="option-input">
        <input type="radio" id={id} />
        <label onClick={handleQuizAns} htmlFor={id}>
          {option}
        </label>
      </form> */}
      <div
        className={({ active }) => (active ? 'correct' : undefined)}
        onClick={handleQuizAns}
      >
        {option}
      </div>
    </div>
  );
};

export default Option;