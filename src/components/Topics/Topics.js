import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    return (
      <div>
        <div className="topics-details">
          <img
            src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <h1>This is Topics</h1>
        <div className='topic-container'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
      </div>
    );
};

export default Topics;