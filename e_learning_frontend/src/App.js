import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Student from "./components/Student";
import e_learning from "./scripts";

function App() {
  const get_courses = async (setError) => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/login"} element={<Login />} />
        {/* <Route path={"/login/error"} element={<Login wrong={true} />} /> */}
        <Route
          path={"/Student"}
          element={<Student get_courses={get_courses} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
