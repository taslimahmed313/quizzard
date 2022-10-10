import React from 'react';

const Option = ({ option, handleCorrectAns }) => {
  return (
    <div>
      <form action="">
        <input onClick={handleCorrectAns} type="radio" value="name" />
        {option}
      </form>
    </div>
  );
};

export default Option;