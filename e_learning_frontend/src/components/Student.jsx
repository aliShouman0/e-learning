import Footer from "./Footer";
import Header from "./Header";
import Course from "./Course";
import courseImg from "../assets/course.png";
import userImg from "../assets/user.png";
import e_learning from "../scripts";
import { useEffect, useState } from "react";

function Student({ get_courses }) {
  const [error, setError] = useState(false);
  const [Courses, setCourses] = useState([]);
  const { avatar, name, type_id, _id } = JSON.parse(
    localStorage.getItem("user_info")
  );
  useEffect(() => {
    const get = async () => {
      const res = await get_courses(setError);
      setCourses(res.result);
    };
    get();
  }, []);

  return (
    <>
      <Header avatar={avatar} name={name} />
      {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
      <main className="student-main">
        {Courses.map((course, i) => {
          return (
            <Course
              key={i}
              is_std={true}
              instructors={course.assign_to}
              course_nb={course.code}
              img_instructors={
                course.image_path !== "NA" ? userImg : course.image_path
              }
              img_course={
                course.image_path !== "NA" ? courseImg : course.image_path
              }
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
export default Student;
