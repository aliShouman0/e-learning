import React from "react";
import e_learning from "../../scripts/e_learning";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loading_img from "../../assets/loading.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function AddCourse({ close }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [load, setLoad] = useState(true);
  const options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two", className: "myOptionClassName" },
  ];
  const getIns = (e) => {
    console.log(e);
  };
  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close(false)} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Add Course</h2>
        {error && <p className="error">⛔❕✔️ File Loaded ⭕🛑❗</p>}

        <form className="form" onSubmit={onsubmit}>
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
          <Dropdown
            options={options}
            onChange={(e) => getIns(e)}
            //value={defaultOption}
            placeholder="Select an option"
          />
          ;
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
