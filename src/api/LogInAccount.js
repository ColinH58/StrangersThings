import React, { useState } from "react";
import { accountLogin } from "./api";

const LoginAccount = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitInformation = async (e) => {
    e.preventDefault();
    await accountLogin(username, password)
    const token = localStorage.getItem("token")
    if (token) {
      setIsLoggedIn(true)
     } else {
      setIsLoggedIn(false)
       console.log("Invalid Login, Try Again")
     }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitInformation}>
        <input
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <button styles={{ width: "100px", height: "50px" }}>Submit</button>
      </form>
    </div>
  );
};

export default LoginAccount;