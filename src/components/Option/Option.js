import React from 'react';

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
    <div>
      <form action="">
        <input onClick={handle} type="radio" name='tik'/>
        {option}
      </form>
    </div>
  );
};

export default Option;