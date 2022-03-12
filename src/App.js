import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import PostForm from "./PostForm";
import CreateAccount from "./CreateAccount"

const App = () => {

  return (
    <div>
      <CreateAccount />
      <PostForm />

      <PostList />
    </div>
  );
};

export default hot(App);
