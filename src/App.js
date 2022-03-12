import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import PostForm from "./PostForm";

const App = ({ name }) => {

  return (
    <div>
      <PostForm />
      <PostList />
    </div>
  );
};

export default hot(App);
