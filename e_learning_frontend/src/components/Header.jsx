import React from "react";
import userImg from "../assets/user.png";

function Header() {
  return (
    <header className="header">
      <div className="user-info">
        <div className="user-img">
          <img src={userImg} alt="userImg" />
        </div>
        <p className="user-name">Ali Shouman</p>
      </div>
      <button className="btn  ">Logout</button>
    </header>
  );
}

export default Header;
