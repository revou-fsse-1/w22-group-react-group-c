import axios from "axios";
import React, { useEffect, useState } from "react";
interface Content {
  id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  location: string;
  locationDetail: string;
  species: string;
  contact: string;
  isFound: boolean;
  userId: string;
  createdAt: string;
  updateAt: string;
}
export default function Testing() {
  const [content, setContent] = useState<Content[]>([]);
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const response = await axios.post("http://localhost:4000/found", {

  // };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://wheremypets-backend-production.up.railway.app/found"
      );
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(content);

  return (
    <div>
      {content.map((content) => (
        <ul key={content.id}>
          <li>{content.id}</li>
          <li>{content.title}</li>
          <li>{content.name}</li>
          <li>{content.description}</li>
          <img src={content.image} alt="image" />
          <li>{content.location}</li>
          <li>{content.locationDetail}</li>
          <li>{content.species}</li>
          <li>{String(content.isFound)}</li>
          <li>{content.userId}</li>
          <li>{content.createdAt}</li>
          <li>{content.updateAt}</li>
        </ul>
      ))}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
