import React from "react";
import assignments from "../assets/assignments.png";

function Assignments({ close, course_nb }) {
  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close()} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Assignments</h2>
        <div className="pop-text">
          <p>
            <b>Requirements: </b>
            Lorem ipsum, totam! Eum veritatis magnam, consequatur maiores facere
            iure.
          </p>
          <div className="assignment-file">
            <label className="submit" htmlFor="submit">
              <input type="file" className="d-none" id="submit" />
              <img src={assignments} alt="assignments" />
            </label>

            <button type="file" className="btn">
              Submit
            </button>
          </div>
        </div>
        <div className="pop-text">
          <p>
            <b>Requirements: </b>
            Lorem ipsum, totam! Eum veritatis magnam, consequatur maiores facere
            iure.
          </p>
          <div className="assignment-file">
            <label className="submit" htmlFor="submit">
              <input type="file" className="d-none" id="submit" />
              <img src={assignments} alt="assignments" />
            </label>

            <button type="file" className="btn">
              Submit
            </button>
          </div>
        </div>
        <div className="pop-text">
          <p>
            <b>Requirements: </b>
            Lorem ipsum, totam! Eum veritatis magnam, consequatur maiores facere
            iure.
          </p>
          <div className="assignment-file">
            <label className="submit" htmlFor="submit">
              <input type="file" className="d-none" id="submit" />
              <img src={assignments} alt="assignments" />
            </label>

            <button type="file" className="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
