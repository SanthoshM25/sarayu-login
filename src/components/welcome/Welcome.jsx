import { useEffect, useState } from "react";
import Login from "../login/Login";
import WelcomeMessage from "./WelcomeMessage";

const Welcome = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const name = localStorage.getItem("name");
    if (authToken && name) {
      setisLoggedIn(true);
    }
  }, [setisLoggedIn]);
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        {isLoggedIn ? (
          <WelcomeMessage name={localStorage.getItem("name")} />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default Welcome;
