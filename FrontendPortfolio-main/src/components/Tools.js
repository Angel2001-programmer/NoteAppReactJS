import React from "react";
import "../styles/tools.css";
import TechCard from "./techCard";

const Tools = ({ props }) => {
  return (
    <div className='coursesContent'>
      {props.map((tool) => (
          <TechCard props={tool}></TechCard>
      ))}
    </div>
  );
};
export default Tools;
