import Footer from "./Footer";
import Header from "./Header";
import Course from "./Course";
import courseImg from "../assets/course.png";
import userImg from "../assets/user.png";
import e_learning from "../scripts";
import { useEffect, useState } from "react";

function Student({ get_courses, getinstructor }) {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [Courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const { avatar, name, type_id, _id } = JSON.parse(
    localStorage.getItem("user_info")
  );

  useEffect(() => {
    const get = async () => {
      const data = await get_courses(setError);
      const ins = await getinstructor(data.result, setError);
      //  load_data(data.result, ins);
      setInstructors(ins);
      setCourses(data.result);
      setLoad(true);
    };
    get();
  }, []);

  const load_data = (co, ins) => {
    co.map((course, i) => {
      course = course.course;
      return (
        <Course
          key={i}
          is_std={true}
          instructors={ins[i] ? ins[i].name : "Loading..."}
          course_nb={course.code}
          img_instructors={
            course.image_path === "NA" ? userImg : course.image_path
          }
          img_course={
            course.image_path === "NA" ? courseImg : course.image_path
          }
        />
      );
    });
  };

  return (
    <>
      <Header avatar={avatar} name={name} />
      {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
      <main className="student-main">
        {load &&
          Courses.map((course, i) => {
            course = course.course;
            return (
              <Course
                key={i}
                is_std={true}
                instructors={
                  instructors[i] ? instructors[i].name : "Loading..."
                }
                course_nb={course.code}
                img_instructors={
                  course.image_path === "NA" ? userImg : course.image_path
                }
                img_course={
                  course.image_path === "NA" ? courseImg : course.image_path
                }
                setError={setError}
              />
            );
          })}
      </main>
      <Footer />
    </>
  );
}
export default Student;
