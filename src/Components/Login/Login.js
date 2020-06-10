import React from "react";
import Button from "react-bootstrap/Button";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const Login = () => { 
    return (
<Button className="d-inline-block" variant="success" type="submit">
    <a href="http://localhost:8888">Get your playlist!</a>
  </Button>
    )
}

export default Login;