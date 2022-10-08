import React from "react";
import course from "../assets/course.png";
import userImg from "../assets/user.png";

function Course({ is_std }) {
  return (
    <>
      <div className="course-card">
        <div className="course-header">
          <img src={course} alt="courses" />
        </div>
        <div className="course-body">
          <div className="user-img">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="">
            <p className="instructor-name">Ali Shouman</p>
            <p className="course-nb">M1104</p>
          </div>
        </div>
        {is_std && (
          <div className="course-footer">
            <button className="btn course-btn">Announcements</button>
            <button className=" btn  course-btn">Assignments</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Course;
