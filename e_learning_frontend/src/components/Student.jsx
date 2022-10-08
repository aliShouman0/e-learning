import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Course from "./Course";
import courseImg from "../assets/course.png";
import userImg from "../assets/user.png";

function Student() {
  return (
    <>
      <Header />
      <main className="student-main">
        <Course
          is_std={true}
          instructors={"Ali"}
          course_nb={"M1101"}
          img_instructors={userImg}
          img_course={courseImg}
        />
        <Course
          is_std={true}
          instructors={"Ali"}
          course_nb={"M1101"}
          img_instructors={userImg}
          img_course={courseImg}
        />
        <Course
          is_std={true}
          instructors={"Ali"}
          course_nb={"M1101"}
          img_instructors={userImg}
          img_course={courseImg}
        />
        <Course
          is_std={true}
          instructors={"Ali"}
          course_nb={"M1101"}
          img_instructors={userImg}
          img_course={courseImg}
        />
        <Course
          is_std={true}
          instructors={"Nowa"}
          course_nb={"P7102"}
          img_instructors={userImg}
          img_course={courseImg}
        />
        <Course
          is_std={true}
          instructors={"Bilal"}
          course_nb={"I301"}
          img_instructors={userImg}
          img_course={courseImg}
        />{" "}
        <Course
          is_std={true}
          instructors={"MOhamd"}
          course_nb={"M3285"}
          img_instructors={userImg}
          img_course={courseImg}
        />
      </main>

      <Footer />
    </>
  );
}

export default Student;
