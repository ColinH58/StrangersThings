import React from "react";
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
