import React from "react";
import "../styles/card.css";
const card = ({ props }) => {
  return (
    <div className='content'>
      <div className='cardContainer'>
        <div className='card'>
          <div className='cardInfo'>
            <h2 className='projectTitle'>{props.name}</h2>
            <img src={props.image}></img>
          </div>
        </div>
      </div>
      <h3>Status: {props.status}</h3>
    </div>
  );
};

export default card;
