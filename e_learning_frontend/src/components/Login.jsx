import { useState } from "react";
import e_learning from "../scripts";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login({ wrong }) {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Validate input prevent enter empty email or password
  const [error, setError] = useState(wrong);
  const [disabled, setdisabled] = useState(false);
  const onsubmit = (e) => {
    setdisabled(true);
    e.preventDefault();
    setError(false);
    if (!email) {
      setError(true);
      setdisabled(false);
      return;
    }
    if (!password) {
      setError(true);
      setdisabled(false);
      return;
    }
     setEmail("");
     setPassword("");
     e_learning.login(email, password, setError,setdisabled,navigate);
  };



  return (
    <>
      <div className="center">
        <div className="card">
          <div className="card-header">
            <p>Login</p>
          </div>
          <form className="form" onSubmit={onsubmit}>
            <input
              type="email"
              placeholder="Email"
              className="input-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              className="input-login"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type={"submit"}
              disabled={disabled}
              value="Login"
              className="btn btn-block"
            />
            {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

Login.defaultProps = {
  wrong: false,
};
export default Login;
