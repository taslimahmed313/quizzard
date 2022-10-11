import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
      <div className="blog">
        <div className="question">
          <p>Question-1 : What is purpose of react router?</p>
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
        <div className="question">
          <p>Question-2 : How does Context API works ?</p>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
        <div className="question">
          <p>Question-3 : What is useHref() in react router?</p>
          <p>
            The useHref hook returns a URL that may be used to link to the given
            to location, even outside of React Router. Tip: You may be
            interested in taking a look at the source for the link component in
            react-router-dom to see how it uses useHref internally to determine
            its own href value.
          </p>
        </div>
      </div>
    );
};

export default Blog;