import Card from "../../UI/Card/card";
import React from "react";
import "./courses.css";

const courses = ({ props }) => {
  return (
    <div className="coursesContent">
      {props.map((home) => (
        <Card>
          <div className='content'>
           <div className='cardContainer'>
             <div className='card'>
               <div className='cardInfo'>
                 <h2 className='projectTitle'>{home.name}</h2>
                 <img src={home.image}></img>
               </div>
             </div>
           </div>
           <h3>Status: {props.status}</h3>
        </div>
        </Card>
      ))}
    </div>
  );
};

export default courses;