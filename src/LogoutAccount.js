import React from "react";

const LogoutAccount = () => {
  const handleClick = () => {
    localStorage.clear("Token");
    let accessTokenObj = JSON.parse(localStorage.getItem("Token"));
    console.log(accessTokenObj);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        styles={{ width: "200px", height: "100px" }}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutAccount;
