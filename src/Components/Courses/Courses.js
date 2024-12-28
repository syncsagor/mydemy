/*eslint no-unused-vars: "off"*/
import React, { use, useState } from "react";
import "./Courses.css";
import allCourses from "../../CourseData/courses.json";
import Course from "../Course/Course";

const Courses = () => {
  const [courseData, setCourseData] = useState(allCourses);
  const [course, setCourse] = useState([]);
  const [enroll, setEnroll] = useState(null);

  const handleEnroll = function (courseObj) {
    setCourse([courseObj]);
  };
  const HandleaddToCart = function () {
    setEnroll("<h2>You've entolled to the course.......</h2>");
  };

  let courseView = (
    <div>
      <h2 className="my-4">Courses List</h2>

      <div className="courses container">
        {courseData.map((course, index) => (
          <Course
            handleEnroll={handleEnroll}
            course={course}
            key={index}
          ></Course>
        ))}
      </div>
    </div>
  );

  if (course.length > 0) {
    courseView = course.map((courseEl) => {
      console.log(courseEl);
      return (
        <div key={courseEl.id} className="container my-4">
          <h2 className="my-4">Course Details</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="course-image ">
              <img className="rounded-2 w-75" src={courseEl.image} alt="img" />
            </div>
            <div className="enrolled-course-details">
              <h3>{courseEl.title}</h3>
              <p>{courseEl.description}</p>
              <p>{courseEl.level} Course</p>
              <p>Course Price: ${courseEl.price}</p>
              <p>Ratings: {courseEl.ratings}</p>
              <button
                onClick={HandleaddToCart}
                className="btn bg-success text-white px-4 py-2"
              >
                <a className="link" href="/cart">
                  Add to Cart
                </a>
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return courseView;
};

export default Courses;
