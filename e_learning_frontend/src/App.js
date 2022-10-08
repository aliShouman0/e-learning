import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Student from "./components/Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Student"} element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
