import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    const {name, logo, total,id} = topic;
    const navigate = useNavigate();

    const handleNavigate = ()=>{
      navigate(`/topic/${id}`)
    }

    return (
      <div className="topic">
        <img src={logo} alt="" />
        <div className="topic-info">
          <h4>{name}</h4>
          <p>Total: {total}</p>
          <button onClick={handleNavigate} className="btn-quiz">
            Start Quiz{" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </div>
    );
};

export default Topic;