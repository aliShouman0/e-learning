import React from "react";
import Footer from "../Footer";
import Course from "../Course";
import LeftPanel from "./LeftPanel";
import courseImg from "../../assets/course.png";
import loading_img from "../../assets/loading.png";
import userImg from "../../assets/user.png";
import e_learning from "../../scripts/e_learning";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [getStudent, setGetStudent] = useState(false);
  const [getInstructors, setGetInstructors] = useState(false);
  const [getCourses, SetgetCourses] = useState(true);
  const [Courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    e_learning.checkLogin(navigate, setIsLogin);
    setLoad(false);

    if (isLogin) {
      //  get();
    }

    if (getCourses) {
      getAllCourses();
      setGetInstructors(false);
      setGetStudent(false);
    }
  }, [isLogin, getCourses]);

  const getAllCourses = async () => {
    const data = await e_learning.getAllCourses(setError);
    const ins = await e_learning.getInstructorForAdmin(data.result, setError);
    setInstructors(ins);
    setCourses(data.result);
    setLoad(true);
  };

  return (
    <>
      {isLogin && (
        <>
          <div className="admin-container">
            <LeftPanel SetgetCourses={SetgetCourses} />
            <main className="admin-main">
              {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
              {!load && (
                <div className="loading">
                  <img src={loading_img} alt="loading_img" />
                </div>
              )}
              <div className="admin-course">
                {load &&
                  Courses.map((course, i) => {
                    return (
                      <Course
                        key={i}
                        isStd={false}
                        instructors={
                          instructors[i] ? instructors[i].name : "Loading..."
                        }
                        courseNb={course.code}
                        imgInstructors={
                          course.image_path === "NA"
                            ? userImg
                            : course.image_path
                        }
                        imgCourse={
                          course.image_path === "NA"
                            ? courseImg
                            : course.image_path
                        }
                        setError={setError}
                        //setSubmit={setSubmit}
                      />
                    );
                  })}
              </div>
            </main>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Admin;
