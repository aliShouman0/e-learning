import React from "react";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import courseImg from "../assets/course.png";
import loading_img from "../assets/loading.png";
import userImg from "../assets/user.png";
import e_learning from "../scripts/e_learning";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    e_learning.checkLogin(navigate, setIsLogin);

    if (isLogin) {
      //  get();
    }
  }, [isLogin]);

  return (
    <>
      {isLogin && (
        <>
          <LeftPanel/> <Footer/>
        </>
      )}
    </>
  );
}

export default Admin;
