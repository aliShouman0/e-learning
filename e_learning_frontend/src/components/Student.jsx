import Footer from "./Footer";
import Header from "./Header";
import Course from "./Course";
import courseImg from "../assets/course.png";
import loading_img from "../assets/loading.png";
import userImg from "../assets/user.png";
import e_learning from "../scripts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [Courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    e_learning.checkLogin(navigate, setIsLogin);

    const get = async () => {
      const data = await e_learning.getCourses(setError);
      const ins = await e_learning.getInstructor(data.result, setError);
      setInstructors(ins);
      setCourses(data.result);
      setLoad(true);
    };
    if (isLogin) {
      get();
    }
  }, [isLogin]);
  if (!isLogin) {
    return <></>;
  }
  return (
    <>
      <Header />
      {Courses.length===0 && <p className="error">No Enrollees🤨😥</p>}
      {error && <p className="error">Some Thing is Wrong 🤨😥</p>}

      {submit && setTimeout(() => setSubmit(false), 3000) && (
        <p className="error">Submit Done!! 🎉🎉🎉</p>
      )}
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
                setSubmit={setSubmit}
              />
            );
          })}
      </main>
      <Footer />
    </>
  );
}
export default Student;
