import React from "react";
import userImg from "../assets/user.png";
import e_learning from "../scripts/e_learning";
import { useNavigate } from "react-router-dom";

function LeftPanel() {
  const { avatar, name } = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate();
  return (
    <aside className="left-panel">
      
    </aside>
  );
}

export default LeftPanel;
