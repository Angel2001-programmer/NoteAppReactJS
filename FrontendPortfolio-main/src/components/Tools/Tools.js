import React from "react";
import "./tools.css";
import Card from "../../UI/Card/card";

const Tools = props => {
  return (
    <div className='coursesContent'>
      {props.tools.map((tool) => (
          <Card>
            <div className="Cardcontainer">
            <div className="techCard">
            <img className="techImg" src={tool.image}></img>
            </div>
            <div className="textCard">
            <h1>{tool.name}</h1>
            </div>
        </div>
          </Card>
      ))}
    </div>
  );
};
export default Tools;
