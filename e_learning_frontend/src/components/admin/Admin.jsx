import React from "react";
import Footer from "../Footer";
import Course from "../Course";
import AddCourse from "./AddCourse";
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
  const [load, setLoad] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [getStudent, setGetStudent] = useState(false);
  const [getInstructors, setGetInstructors] = useState(false);
  const [getCourses, SetgetCourses] = useState(false);
  const [Courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [addCourse, SetaddCourse] = useState(false);

  useEffect(() => {
    e_learning.checkLogin(navigate, setIsLogin);
    if (isLogin) {
      if (getCourses) {
        setLoad(false);
        getAllCourses();
        setGetInstructors(false);
        setGetStudent(false);
      }
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
        <>{addCourse&&<AddCourse close={SetaddCourse}/>}
          <div className="admin-container">
            <LeftPanel SetgetCourses={SetgetCourses} />
            <main className="admin-main">
              {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
              {!load && (
                <div className="loading">
                  <img src={loading_img} alt="loading_img" />
                </div>
              )}
              <div className="admin-btn">
                <button
                  className="btn"
                  onClick={() => {
                    SetaddCourse(true);
                  }}
                >
                  Add Course
                </button>
              </div>
              <div className="admin-course">
                {load &&
                  getCourses &&
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
                      />
                    );
                  })}
              </div>
            </main>
          </div>
          <Footer className="footer-admin" />
        </>
      )}
    </>
  );
}

export default Admin;
