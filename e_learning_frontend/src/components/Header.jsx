import React from "react";
import userImg from "../assets/user.png";
import e_learning from "../scripts";
import { useNavigate } from "react-router-dom";

function Header({ avatar, name }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="user-info">
        <div className="user-img">
          <img src={avatar !== "NA" ? avatar : userImg} alt="userImg" />
        </div>
        <p className="user-name">{name}</p>
      </div>
      <button className="btn" onClick={()=>e_learning.logout(navigate)}>Logout</button>
    </header>
  );
}

export default Header;
