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
          <p className="instructor-name">Ali Shouman</p>
          <p className="course-nb">M1104</p>

          {is_std && (
            <>
              <button className="course-btn">Announcements</button>
              <button className="course-btn">Assignments</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
