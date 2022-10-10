import React from 'react';
import './Topic.css';

const Topic = ({topic}) => {
    console.log(topic)
    const {name, logo, total} = topic;
    return (
      <div className='topic'>
        <img src={logo} alt="" />
        <div className='topic-info'>
          <h4>{name}</h4>
          <p>Total: {total}</p>
          <button className='btn-quiz'>Start Quiz</button>
        </div>
      </div>
    );
};

export default Topic;