import React from "react";
import assignment_png from "../assets/assignments.png";
import e_learning from "../scripts";
import { useEffect, useState } from "react";

function Assignments({ close, course_nb }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const res = async () => {
      const getAssignments = await e_learning.getAssignments(course_nb);
      const data = await getAssignments.json();
      setAssignments(data.result);
    };
    res();
  }, []);
  const submit = (id) => {
    console.log(id);
  };

  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close()} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Assignments</h2>
     
        {assignments.length === 0 && (
          <h2 className="pop-text text-center">🚫⛔🚫NO Assignments</h2>
        )}
      </div>
    </div>
  );
}

export default Assignments;
