import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const history = useHistory();

  const [signUpData, setSignUpData] = useState({
    user_type: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const submitHandler = () => {
    axios
      .post(
        "https://lit-eyrie-58493.herokuapp.com/api/auth/register",
        signUpData
      )
      .then((res) => {
        if (res.statusText === "Created") {
          localStorage.setItem("authToken", res.data.auth_token);
          localStorage.setItem("name", res.data.first_name);
          history.push("/");
        }
      })
      .catch((err) => alert.show("Enter valid details"));

    setSignUpData({
      user_type: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone_number: "",
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>SIGN UP</h2>
        <select
          className="signup-row user-inp inp "
          value={signUpData.user_type}
          onChange={(e) =>
            setSignUpData({ ...signUpData, user_type: e.target.value })
          }
        >
          <option value="" disabled>
            ACCOUNT TYPE
          </option>
          <option value="client">Client</option>
          <option value="customer">Customer</option>
          <option value="shipper">Shipper</option>
        </select>
        <input
          type="email"
          className="signup-row email-inp inp"
          placeholder="Email"
          required
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
        />
        <input
          type="password"
          className="signup-row pass-inp inp"
          placeholder="Password"
          required
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
        />
        <input
          type="text"
          className="signup-row name-inp inp"
          placeholder="First Name"
          required
          value={signUpData.first_name}
          onChange={(e) =>
            setSignUpData({ ...signUpData, first_name: e.target.value })
          }
        />
        <input
          type="text"
          className="signup-row name-inp inp"
          placeholder="Last Name"
          required
          value={signUpData.last_name}
          onChange={(e) =>
            setSignUpData({ ...signUpData, last_name: e.target.value })
          }
        />

        <input
          type="text"
          className="phone-inp inp"
          placeholder="Phone"
          required
          value={signUpData.phone_number}
          onChange={(e) =>
            setSignUpData({ ...signUpData, phone_number: e.target.value })
          }
        />
        <p className="phone-text">Ex: +911234567890</p>

        <input
          className="signup-row submit-btn"
          onClick={submitHandler}
          type="Button"
          value="Sign up"
        />
        <div className="signup-row new-user">
          <p>
            Existing user?
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
