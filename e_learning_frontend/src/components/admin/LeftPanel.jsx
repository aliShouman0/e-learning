import React from "react";
import userImg from "../../assets/user.png";
import e_learning from "../../scripts/e_learning";
import { useNavigate } from "react-router-dom";

function LeftPanel() {
  const { avatar, name } = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate();
  return (
    <aside className="left-panel">
      <div className="user-info">
        <div className="user-img">
          <img src={avatar !== "NA" ? avatar : userImg} alt="userImg" />
        </div>
        <p className="user-name">{name}</p>
      </div>
      <div className="btn-container">
        <button className="btn">Students</button>
        <button className="btn">Instructors</button>
        <button className="btn">Courses</button>
      </div>
      <button
        className="btn btn-logout"
        onClick={() => e_learning.logout(navigate)}
      >
        Logout
      </button>
    </aside>
  );
}

export default LeftPanel;
