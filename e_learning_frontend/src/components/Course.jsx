import React from "react";
import { useState } from "react";
import Announcements from "./Announcements";
import Assignments from "./Assignments";

function Course({
  is_std,
  instructors,
  course_nb,
  img_instructors,
  img_course,
}) {
  const [announcements, setAnnouncements] = useState(false);
  const [assignments, setAssignments] = useState(false);

  return (
    <>
      {announcements && <Announcements course_nb={course_nb} close={() => setAnnouncements(false)} />}
      {assignments && <Assignments close={() => setAssignments(false)} />}

      <div className="course-card">
        <div className="course-header">
          <img src={img_course} alt="courses" />
        </div>

        <div className="course-body">
          <div className="user-img">
            <img src={img_instructors} alt="userImg" />
          </div>

          <div>
            <p className="instructor-name">{instructors}</p>
            <p className="course-nb">{course_nb}</p>
          </div>
        </div>

        {is_std && (
          <div className="course-footer">
            <button
              className="btn course-btn"
              onClick={() => setAnnouncements(!announcements)}
              course_nb={course_nb}
            >
              Announcements
            </button>
            <button
              className=" btn course-btn"
              onClick={() => setAssignments(!announcements)}
              course_nb={course_nb}
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
