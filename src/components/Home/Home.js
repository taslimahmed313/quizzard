import React from 'react';
import './Home.css';

const Home = () => {
    return (
      <div>
        <div className="intro">
          <div className="text">
            <p>
              <span> Join The Quizzard Quiz Battle.</span> <br />
              The Quizzard is a website featuring multiple-choice, matching, and
              short-answer tests on a variety of core subjects. Most of its
              content is math-oriented.
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1665512547~exp=1665513147~hmac=676c84323856c037ff421c7ba6d35898de70a12ba557d79e41d7620ed1b4bc47"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Home;