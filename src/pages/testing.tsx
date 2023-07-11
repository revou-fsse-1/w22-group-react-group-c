import axios from "axios";
import React, { useState } from "react";

export default function testing() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await axios.post("");
    console.log(title, name, description, image, userId);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
        />
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event?.target.value)}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event?.target.value)}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(event) => setImage(event?.target.value)}
        />
        {/* <input type="file" name="" id="" /> */}
        <label htmlFor="userId">userId</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(event) => setUserId(event?.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
