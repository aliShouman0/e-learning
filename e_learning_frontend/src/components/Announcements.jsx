import React from "react";

function Announcements({ close }) {
  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close()} className="popup-close">
          X
        </button>
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
