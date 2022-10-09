import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Student from "./components/Student";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login    />} />
        <Route path={"/login"} element={<Login    />} />
        {/* <Route path={"/login/error"} element={<Login wrong={true} />} /> */}
        <Route path={"/Student"} element={<Student  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
