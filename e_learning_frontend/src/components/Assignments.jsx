import React from "react";
import assignment_png from "../assets/assignments.png";
import e_learning from "../scripts/e_learning";
import { useEffect, useState } from "react";

function Assignments({ close, courseNb, setSubmit }) {
  const [assignments, setAssignments] = useState([]);
  const [loadedFile, setLoadedFile] = useState(false);
  const [disable, setDisable] = useState([]);
  const dataToSubmit = new FormData();
  const file = new FileReader();
  let nbNotSubmit = 0;

  useEffect(() => {
    const res = async () => {
      const getAssignments = await e_learning.getAssignments(courseNb);
      const data = await getAssignments.json();
      setAssignments(data.result);
      setDisable(
        data.result.map((d) => {
          return true;
        })
      );
    };
    res();
  }, []);

  const loadFile = (e, index) => {
    if (e.target.files.length !== 0) {
      file.addEventListener("load", () => {
        dataToSubmit.append("file_path", file.result);
        setLoadedFile(true);
        setDisable(
          disable.map((d, i) => {
            if (i === index) {
              return false;
            }
            return true;
          })
        );
      });
      file.readAsDataURL(e.target.files[0]);
    }
  };

  const submit = (id) => {
    dataToSubmit.append("token", localStorage.getItem("access_token"));
    dataToSubmit.append("assignment_id", id);
    dataToSubmit.append("file", "file.result");
    e_learning.submit_assignment(dataToSubmit, close, setSubmit);
  };

  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close(false)} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Assignments</h2>
        {loadedFile && <p className="error">⛔❕✔️ File Loaded ⭕🛑❗</p>}
        {assignments.length > 0 &&
          assignments.map((assignment, i) => {
            if (assignment.submit != null) {
              return "";
            }
            nbNotSubmit++;
            return (
              <div className="pop-text" key={i}>
                <p>
                  <b>Requirements: </b>
                  {assignment.text}
                </p>
                <div className="assignment-file">
                  <label className="submit" htmlFor={i}>
                    <input
                      type="file"
                      className="d-none"
                      onChange={(e) => loadFile(e, i)}
                      id={i}
                      key={i}
                    />
                    <img src={assignment_png} alt="assignments" />
                  </label>

                  <button
                    type="file"
                    className="btn"
                    disabled={disable[i]}
                    onClick={() => {
                      submit(assignment._id);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            );
          })}
        {nbNotSubmit === 0 && (
          <h2 className="pop-text text-center">🚫⛔🚫NO Assignments</h2>
        )}
      </div>
    </div>
  );
}

export default Assignments;
