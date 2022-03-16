import React, { useState } from 'react'
import { createNewPost } from "./api";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    const handlePost = () => {
      const postInfo = {
        title: title,
        body: body
      };
      createNewPost(postInfo)
      setTitle("")
      setBody("")
    }
  
    const handleTitle = (e) => {
      setTitle(e.target.value);
    }
  
    const handleBody = (e) => {
      setBody(e.target.value);
    }

  return (
    <div>
      <input placeholder="Title Here" value={title} onChange={handleTitle}></input>
      <input placeholder="Body Here" value={body} onChange={handleBody}></input>
      <button onClick={handlePost} styles={{ width: "100px", height: "50px" }}>
        Submit
      </button>
    </div>
  )
};

export default PostForm;