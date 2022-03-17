import React, { useState } from "react";
import { createNewPost } from "./api";

const PostForm = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const postInfo = {
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: willDeliver,
      },
    };
    const newPost = await createNewPost(postInfo);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver("");
    setPosts([...posts, newPost.data.post]);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleDeliver = (e) => {
    setWillDeliver(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Title Here"
        value={title}
        onChange={handleTitle}
      ></input>
      <input
        placeholder="Description Here"
        value={description}
        onChange={handleDesc}
      ></input>
      <input
        placeholder="Price Here"
        value={price}
        onChange={handlePrice}
      ></input>
      <input placeholder="Your Location" value={location} onChange={handleLocation}></input>
      <input placeholder="Are You Willing to Deliver?" value={willDeliver} onChange={handleDeliver}></input>
      <button onClick={handlePost} styles={{ width: "100px", height: "50px" }}>
        Submit
      </button>
    </div>
  );
};

export default PostForm;
