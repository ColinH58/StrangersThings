import React, { useState, useEffect } from "react";
import { getPosts } from "./api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const posts = await getPosts();
    setPosts(posts.data.posts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <h3>{post.author.username}</h3>
          <h3>{post.description}</h3>
          <h4>{post.price}</h4>
          <p>{post.location}</p>
          {post.willDeliver === false || null ? (<p>{"Will NOT Deliver"}</p>) : (<p>{"Will Deliver"}</p>)}
        </div>
      ))}
    </div>
  );
};

export default PostList;
