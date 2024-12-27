import React from "react";
import "./Course.css";

const Course = (props) => {
  return (
    <div className="row course">
      <div className="course-img">
        <img
          className="w-75 rounded-1"
          src={props.course.image}
          alt={props.course.title}
        />
      </div>
      <div className="course-description p-4">
        <h3>{props.course.title}</h3>
        <p className="">{props.course.description}</p>
        <p>
          <strong>Price: {props.course.price}</strong>
        </p>
        <button className="btn btn-primary">Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
