import React, { useState, useEffect } from "react";
import { getPosts } from "./api";

const PostList = ({ posts, setPosts }) => {
  const handleUpdate = () => {
    console.log("UPDATED")
  }

  const handleDelete = () => {
    console.log("DELETED")
  }

  useEffect(async () => {
    const posts = await getPosts();
    setPosts(posts.data.posts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h3>{post.author.username}</h3>
          <h3>{post.description}</h3>
          <h4>{post.price}</h4>
          <p>{post.location}</p>
          {post.willDeliver === false || null ? (<p>{"Will NOT Deliver"}</p>) : (<p>{"Will Deliver"}</p>)}
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
