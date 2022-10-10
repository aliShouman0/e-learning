import Footer from "./Footer";
import Header from "./Header";
import Course from "./Course";
import courseImg from "../assets/course.png";
import loading_img from "../assets/loading.png";
import userImg from "../assets/user.png";
//import e_learning from "../scripts";
import { useEffect, useState } from "react";

function Student({ getCourses, getInstructor }) {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [Courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const { avatar, name } = JSON.parse(localStorage.getItem("user_info"));

  useEffect(() => {
    const get = async () => {
      const data = await getCourses(setError);
      const ins = await getInstructor(data.result, setError);
      setInstructors(ins);
      setCourses(data.result);
      setLoad(true);
    };
    get();
  }, []);

  return (
    <>
      <Header avatar={avatar} name={name} />
      {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
      <main className="student-main">
        {!load && (
          <div className="loading">
            <img src={loading_img} alt="loading_img" />
          </div>
        )}
        {load &&
          Courses.map((course, i) => {
            course = course.course; 
            return (
              <Course
                key={i}
                isStd={true}
                instructors={
                  instructors[i] ? instructors[i].name : "Loading..."
                }
                courseNb={course.code}
                imgInstructors={
                  course.image_path === "NA" ? userImg : course.image_path
                }
                imgCourse={
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
