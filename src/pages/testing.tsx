import axios from "axios";
import React, { useState } from "react";
interface Found {
  title: string;
  name: string;
  description: string;
  image: string;
  location: string;
  locationDetail: string;
  species: string;
  contact: string;
  userId: string;
}
export default function Testing() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [locationDetail, setLocationDetail] = useState("");
  const [species, setSpecies] = useState("");
  const [contact, setContact] = useState("");
  const [userId, setUserId] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/found", {
      title: title,
      name: name,
      description: description,
      image: image,
      location: location,
      locationDetail: locationDetail,
      species: species,
      contact: contact,
      userId: userId,
    });
    console.log(response);
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
        <label htmlFor="location">location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event?.target.value)}
        />
        <label htmlFor="locationDetail">location detail</label>
        <input
          type="text"
          id="locationDetail"
          value={locationDetail}
          onChange={(event) => setLocationDetail(event?.target.value)}
        />
        <label htmlFor="species">species</label>
        <input
          type="text"
          id="species"
          value={species}
          onChange={(event) => setSpecies(event?.target.value)}
        />
        <label htmlFor="contact">contact</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(event) => setContact(event?.target.value)}
        />
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
