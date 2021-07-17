import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const alert = useAlert();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = () => {
    axios
      .post(
        "https://lit-eyrie-58493.herokuapp.com/api/auth/login",
        loginDetails
      )
      .then((res) => {
        if (res.statusText === "OK") {
          localStorage.setItem("authToken", res.data.auth_token);
          localStorage.setItem("name", res.data.first_name);
          history.push("/");
        }
      })
      .catch((err) => alert.show("Enter valid details"));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>LOG IN</h2>
        <input
          type="email"
          className="login-row email-inp inp"
          placeholder="Email"
          required
          value={loginDetails.email}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, email: e.target.value })
          }
        />
        <input
          type="password"
          className="login-row pass-inp inp"
          placeholder="Password"
          required
          value={loginDetails.password}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
        />
        <input
          className="login-row submit-btn"
          value="login"
          type="button"
          onClick={submitHandler}
        />
        <div className="login-row new-user">
          <p>
            New User?
            <span>
              <Link to="/signup">Create account </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
