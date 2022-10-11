import React from 'react';
import swal from "sweetalert";
import './Option.css';

  
const Option = ({ option,  que }) => {
    const {correctAnswer} = que;
    
    const handleQuizAns = () =>{
        if(option === correctAnswer){
            swal('WOW! Good Job');
        }
        else{
            swal('Oops!! Wrong Answer')
        }
    }
  return (
    <div className="option">
      {/* <form className="option-input">
        <label onClick={handleQuizAns} htmlFor="check">
          <input type="radio" id="check" />
          {option}
        </label>
      </form> */}
      {/* <button onClick={notify}>Notify!</button> */}
      <div
        className={({ isActive }) => (isActive ? "active" : undefined)}
        onClick={handleQuizAns}
      >
        {option}
      </div>
    </div>
  );
};

export default Option;