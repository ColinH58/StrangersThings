import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";

const App = ({ name }) => {

  return (
    <>
      <PostList />
    </>
  );
}

export default hot(App);
