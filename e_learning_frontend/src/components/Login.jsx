import { useState } from "react";
import e_learning from "../scripts";
import Footer from "./Footer";
import { redirect , useNavigate } from "react-router-dom";

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
    // setEmail("");
    // setPassword("");
    login(email, password, setError);
  };

  const login = async (email, password, setError) => {
    const data = new FormData();
    const url = `${e_learning.baseUrl}login`;
    data.append("email", email);
    data.append("password", password);
    const login_info = await e_learning.postAPI(url, data); 
    if (login_info.status && login_info.status === 200) {
      // if done save toke and get user info by api
      const access_token = login_info.data.access_token; 
      localStorage.setItem("access_token", access_token);
      // get user info
      const user_info_url = `${e_learning.baseUrl}me`;
      // this api need token
      const api_userInfo = new FormData();
      api_userInfo.append("token", access_token);
      const user_info = await e_learning.postAPI(user_info_url, api_userInfo);
      //  if token valid will get user info and save in local storage then redirect to home page
      if (user_info.status && user_info.status === 200) {
        localStorage.setItem("user_info", JSON.stringify(user_info.data));
         navigate('/student');
      } else {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_info");
        setError(true);
        setdisabled(false);
      }
    } else {
      setError(true);
      setdisabled(false);
    }
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
