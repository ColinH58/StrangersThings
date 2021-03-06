import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import PostForm from "./PostForm";
import CreateAccount from "./CreateAccount";
import LoginAccount from "./LoginAccount";
import LogoutAccount from "./LogoutAccount";
import { testAuthentication } from "./api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function isValidJWT() {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      const isValid = await testAuthentication();
      setIsLoggedIn(isValid);
    }
  }

  useEffect(() => {
    isValidJWT();
  }, []);

  return (
    <div>
      {isLoggedIn ? null : <CreateAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn ? null : <LoginAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <LogoutAccount />
      <PostList posts={posts} setPosts={setPosts}/>
      <PostForm posts={posts} setPosts={setPosts}/>
    </div>
  );
};

export default hot(App);

/* 
Add the routes via react router, set up pages
Figure out why login token isn't allowing post requests to go through
Create a password confirmation function, and check for min lengths (also make it .Required)
Add styles
Add messages functionality
Add comments functionality
Add a search form and search functionality
add CSS, use Ben's instructions SS
AND MORE...
*/
