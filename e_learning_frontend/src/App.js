import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Student from "./components/Student";
import e_learning from "./scripts";

function App() {
  const getCourses = async (setError) => {
    const url = `${e_learning.baseUrl}get_enrolled?token=${localStorage.getItem(
      "access_token"
    )}`;
    const res = await e_learning.getAPI(url);
    if (res.status && res.status === 200) {
      return res.data;
    } else {
      setError(true);
    }
  };

  const getInstructor = async (data, setError) => {
    let ins = await Promise.all(
      data.map((d) =>
        e_learning.getInstructorInfo(setError, d.course.assign_to)
      )
    );
    return ins;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/Student"}
          element={
            <Student getCourses={getCourses} getInstructor={getInstructor} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
