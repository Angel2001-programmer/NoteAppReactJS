import Card from "./card";
import React from "react";
import "../styles/courses.css";

const courses = ({ props }) => {
  return (
    <div className="coursesContent">
      {props.map((home) => (
        <Card props={home}></Card>
      ))}
    </div>
  );
};

export default courses;
