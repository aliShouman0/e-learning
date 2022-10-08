import { useState } from "react";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Validate input prevent enter empty email or password
  const [error, setError] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (!email) {
      setError(true);
      return;
    }
    if (!password) {
      setError(true);
      return;
    }
    setEmail("");
    setPassword("");
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
            <input type={"submit"} value="Login" className="btn btn-block" />
            {error && <p className="error">Some Thing is Wrong 🤨😥</p>}
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
