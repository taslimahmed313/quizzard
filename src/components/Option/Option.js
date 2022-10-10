import React from 'react';
import './Option.css';

const Option = ({ option,  que }) => {
    const {correctAnswer} = que;
    const handle = () =>{
        if(option === correctAnswer){
            alert('Correct Answer')
        }
        else{
            alert('Wrong Answer.')
        }
    }
  return (
    <div className='option'>
      <form className='option-input'>
        <input onClick={handle} type="radio" name='tik'/>
        {option}
      </form>
    </div>
  );
};

export default Option;