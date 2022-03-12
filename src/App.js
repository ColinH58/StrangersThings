import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import PostForm from "./PostForm";
import LoginForm from "./LoginForm"

const App = ({ name }) => {

  return (
    <div>
      <LoginForm />
      <PostForm />
      <PostList />
    </div>
  );
};

export default hot(App);
