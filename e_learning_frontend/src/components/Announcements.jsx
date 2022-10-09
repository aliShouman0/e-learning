import React from "react";

function Announcements({ close, course_nb }) {
  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close()} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Announcements</h2>
        <p className="pop-text">
          Lorem ipsum, totam! Eum veritatis magnam, consequatur maiores facere
          iure.
        </p>
        <p className="pop-text">
          Lorem ipsum, totam! Eum veritatis magnam, consequatur maiores facere
          iure.
        </p>
        <p className="pop-text">
          Lorem ipsum, totam! Eum veritatis magnam, consequatur maiores facere
          iure.
        </p>
      </div>
    </div>
  );
}

export default Announcements;
