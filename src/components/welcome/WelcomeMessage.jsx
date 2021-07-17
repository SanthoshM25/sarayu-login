import { useHistory } from "react-router";
import "./welcome.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const WelcomeMessage = ({ name }) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    history.push("/login");
  };

  return (
    <div className="welcome-message-container">
      <div className="welcome-content">
        <h2>Hello {name} we are glad to have you here!</h2>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_c6mdfk7e.json"
          style={{ height: "300px", width: "300px" }}
        >
          <Controls visible={false} />
        </Player>
        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
