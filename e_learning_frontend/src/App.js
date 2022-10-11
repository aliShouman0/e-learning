import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Student from "./components/Student";
import Admin from "./components/admin/Admin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/student"} element={<Student/>} />
        <Route path={"/admin"} element={<Admin/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
