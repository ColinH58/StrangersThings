import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import PostForm from "./PostForm";
import CreateAccount from "./CreateAccount";
import LoginAccount from "./LoginAccount";
import LogoutAccount from "./LogoutAccount";

const App = () => {
  return (
    <div>
      <CreateAccount />
      <LoginAccount />
      <LogoutAccount />
      <PostList />
      <PostForm />
    </div>
  );
};

export default hot(App);

/* 
Add the routes via react router, set up pages
Correcting Route pages
Figure out why login token isn't allowing post requests to go through
Create a password confirmation function, and check for min lengths (also make it .Required)
Add styles
Add messages functionality
Add comments functionality
Add a search form and search functionality
AND MORE...
*/