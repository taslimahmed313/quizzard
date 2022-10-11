import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    return (
      <div>
        <h1>This is Topics</h1>
        <div className="intro">
          <div className="text">
            <p>
              Quizzes can be growth in knowledge, abilities, or skills. <br />
              <span>So, Join The Battle.</span>
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/web-help-support-template-with-question-marks_1017-23984.jpg?size=338&ext=jpg&ga=GA1.2.939492190.1661093851"
              alt=""
            />
          </div>
        </div>
        <div className="topic-container">
          {topics.data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    );
};

export default Topics;