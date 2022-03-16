import React, { useState } from "react";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitInformation = (e) => {
    e.preventDefault();
    fetch(
      "https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
      })
      .catch(console.error);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
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

export default CreateAccount;
