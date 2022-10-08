import React from "react";
import course from "../assets/course.png";
import userImg from "../assets/user.png";
import { useState } from "react";
import Announcements from "./Announcements";
import Assignments from "./Assignments";

function Course({ is_std }) {
  const [announcements, setAnnouncements] = useState(false);
  const [assignments, setAssignments] = useState(false);

  return (
    <>
      {announcements && <Announcements close={() => setAnnouncements(false)} />}
      {assignments && <Assignments close={() => setAssignments(false)} />}

      <div className="course-card">
        <div className="course-header">
          <img src={course} alt="courses" />
        </div>

        <div className="course-body">
          <div className="user-img">
            <img src={userImg} alt="userImg" />
          </div>

          <div>
            <p className="instructor-name">Ali Shouman</p>
            <p className="course-nb">M1104</p>
          </div>
        </div>

        {is_std && (
          <div className="course-footer">
            <button
              className="btn course-btn"
              onClick={() => setAnnouncements(!announcements)}
            >
              Announcements
            </button>
            <button
              className=" btn course-btn"
              onClick={() => setAssignments(!announcements)}
            >
              Assignments
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Course;
