import Card from "../../UI/Card/card";
import React from "react";
import "./courses.css";

const courses = (props) => {
  return (
    <div className="coursesContent">
      {props.data.map((home) => (
        <Card>
          <div className='content'>
           <div className='cardContainer'>
             <div className='card'
             onClick={props.onClick}>
               <div className='cardInfo'>
                 <h2 className='projectTitle'>{home.name}</h2>
                 <img src={home.image} alt="Preview Image"></img>
               </div>
             </div>
           </div>
           <h3>Status: {home.status}</h3>
        </div>
        </Card>
      ))}
    </div>
  );
};

export default courses;