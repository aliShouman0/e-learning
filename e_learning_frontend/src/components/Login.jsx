import React, { useState } from "react";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {" "}
      <div className="center">
        <div className="card">
          <div className="card-header">
            <p>Login</p>
          </div>
          <form className="form">
            <input
              type="email"
              placeholder="Email"
              className="input-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              className="input-login"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type={"submit"} value="Login" className="btn btn-block" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
