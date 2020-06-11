import React from "react";
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../API/quizQuestions/constants";

const Login = () => {
  return (
    <a
      style={{ textDecoration: "none", color: "white" }}
      className="btn-success"
      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=code&show_dialog=true`}
    >
      Get you playlist of the Day
    </a>
  );
};

export default Login;
