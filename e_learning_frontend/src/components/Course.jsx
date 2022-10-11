import React from "react";
import { useState } from "react";
import Announcements from "./Announcements";
import Assignments from "./Assignments";

function Course({
  isStd,
  instructors,
  courseNb,
  imgInstructors,
  imgCourse,
  setError,
  setSubmit,
}) {
  const [announcements, setAnnouncements] = useState(false);
  const [assignments, setAssignments] = useState(false);

  return (
    <>
      {announcements && (
        <Announcements
          courseNb={courseNb}
          close={() => setAnnouncements(false)}
        />
      )}
      {assignments && (
        <Assignments
          courseNb={courseNb}
          setSubmit={setSubmit}
          close={setAssignments}
        />
      )}

      <div className="course-card">
        <div className="course-header">
          <img src={imgCourse} alt="courses" />
        </div>

        <div className="course-body">
          <div className="user-img">
            <img src={imgInstructors} alt="userImg" />
          </div>

          <div>
            <p className="instructor-name">{instructors}</p>
            <p className="course-nb">{courseNb}</p>
          </div>
        </div>

        {isStd && (
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
