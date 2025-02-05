import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import axios from "axios";
const Courses = () => {
  const { courses } = CourseData();
  function callSampleApi(){
    axios.get('http://localhost:5173/sampleRoute').then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log('API failed');
    });
  }
  console.log(courses);
  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>{callSampleApi}</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
