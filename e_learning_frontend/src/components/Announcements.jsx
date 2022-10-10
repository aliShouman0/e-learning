import React from "react";
import e_learning from "../scripts";
import { useEffect, useState } from "react";

function Announcements({ close, course_nb }) {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const res = async () => {
      const getAnnouncements = await e_learning.getAnnouncements(course_nb);
      const data = await getAnnouncements.json();
      setAnnouncements(data.result);
    };
    res();
  }, []);

  return (
    <div className="popup">
      <div className="pop-box">
        <button onClick={() => close()} className="popup-close">
          X
        </button>
        <h2 className="popup-title">Announcements</h2>
        {announcements.length > 0 &&
          announcements.map((announc, i) => {
            return (
              <p key={i} className="pop-text">
                {announc.text}
              </p>
            );
          })}
        {announcements.length === 0 && (
          <h2 className="pop-text text-center">🚫⛔🚫NO Announcements🚫⛔🚫</h2>
        )}
      </div>
    </div>
  );
}

export default Announcements;
