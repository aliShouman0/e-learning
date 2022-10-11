import React from "react";
import e_learning from "../../scripts/e_learning";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loading_img from "../../assets/loading.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function AddCourse({ close, addedCourse }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [load, setLoad] = useState(true);
  const [instructor, setInstructor] = useState("");
  const [instructorId, setInstructorId] = useState("");

  const getInstructors = async () => {
    setLoad(false);
    const data = await e_learning.getInstructors(setError);
    setInstructor(
      await data.map((d) => {
        return { value: d._id, label: d.name };
      })
    );
    setLoad(true);
  };

  const getIns = (e) => {
    setdisabled(false);
    setInstructorId(e.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    setdisabled(true);
    setError(false);
    if (!name) {
      setError(true);
      setdisabled(false);
      setLoad(false);
      return;
    }
    if (!code) {
      setError(true);
      setdisabled(false);
      setLoad(false);
      return;
    }
    setCode("");
    setName("");
    e_learning.addCourse(
      code,
      name,
      instructorId,
      setError,
      close,
      addedCourse
    );
  };
  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close(false)} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Add Course</h2>
        {error && (
          <p className="error">⛔❕✔️ Some Thing is Wrong 🤨😥 ⭕🛑❗</p>
        )}
        {!load && (
          <div className="loading load-up">
            <img src={loading_img} alt="loading_img" />
          </div>
        )}

        <form className="course-form" onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="Course Code"
            className="input-login"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Course Name"
            value={name}
            className="input-login"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br/>
          Instructor
          <Dropdown
            className="input-login dropdown"
            options={instructor}
            onChange={(e) => getIns(e)}
            placeholder="Select an option"
          />
          <input
            type={"submit"}
            disabled={disabled}
            value="Add"
            className="btn btn-block"
          />
          {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
