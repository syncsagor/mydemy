/*eslint no-unused-vars: "off"*/
import React, { useState } from "react";
import "./Courses.css";
import allCourses from "../../CourseData/courses.json";
import Course from "../Course/Course";

const Courses = () => {
  const [courseData, setCourseData] = useState(allCourses);

  return (
    <div>
      <h2 className="my-4">Courses List</h2>

      <div className="courses container">
        {courseData.map((course, index) => (
          <Course course={course} key={index}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
