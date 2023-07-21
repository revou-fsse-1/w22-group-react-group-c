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
    // <div>
    //   {content.map((content) => (
    //     <ul key={content.id}>
    //       <li>{content.id}</li>
    //       <li>{content.title}</li>
    //       <li>{content.name}</li>
    //       <li>{content.description}</li>
    //       <img src={content.image} alt="image" />
    //       <li>{content.location}</li>
    //       <li>{content.locationDetail}</li>
    //       <li>{content.species}</li>
    //       <li>{String(content.isFound)}</li>
    //       <li>{content.userId}</li>
    //       <li>{content.createdAt}</li>
    //       <li>{content.updateAt}</li>
    //     </ul>
    //   ))}
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    // </div>
    <>
      <div className="p-5 sm:flex sm:justify-center">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10 mb-20 ">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="animate-pulse shadow-lg rounded-lg overflow-hidden"
            >
              <div className="bg-gray-200 h-[10rem] md:h-[15rem] w-64"></div>
              <div className="px-1 md:px-6 py-4 space-y-2">
                <div className="bg-gray-200 h-6 w-1/2"></div>
                <div className="bg-gray-200 h-4 w-3/4"></div>
                <div className="bg-gray-200 h-4 w-2/3"></div>
                <div className="bg-gray-200 h-4 w-1/2"></div>
                <div className="bg-gray-200 h-4 w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
