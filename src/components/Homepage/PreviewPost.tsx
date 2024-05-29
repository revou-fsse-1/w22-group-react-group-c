import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface PetData {
  id: string;
  title: string;
  description: string;
  name: string;
  location: string;
  locationDetail: string;
  species: string;
  contact: string;
  image: string;
  isFound: boolean;
}

export default function PreviewPostComponent() {
  const [dataFindPost, setDataFindPost] = useState<PetData[]>([]);
  const [dataFoundPost, setDataFoundPost] = useState<PetData[]>([]);
  const router = useRouter();

  const fetchDataFindPost = async () => {
    try {
      const response = await axios.get(
        "https://wheremypets.adaptable.app/find"
      );
      setDataFindPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataFoundPost = async () => {
    try {
      const response = await axios.get(
        "https://wheremypets.adaptable.app/found"
      );
      setDataFoundPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFindPost();
    fetchDataFoundPost();
  }, []);

  if (dataFindPost.length === 0 && dataFoundPost.length === 0) {
    // Add a loading state or return null when data is not available
    return <div>Loading...</div>;
  }

  const firstItem = dataFindPost[0];
  const secondItem = dataFoundPost[0];

  if (!firstItem || !firstItem.image || !secondItem || !secondItem.image) {
    return <div>No data available.</div>;
  }

  const handleClick = (id: string, type: string) => {
    router.push(`/private/pet-description?id=${id}&type=${type}`);
  };

  // console.log(secondItem);

  return (
    <div>
      <div className="p-5 sm:flex sm:justify-center">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10 mb-20 ">
          <div
            // key={item.id}
            className="mt-20 text-center sm:max-w-sm md:max-w-lg rounded overflow-hidden shadow-slate-600 shadow-lg"
          >
            <img
              className="w-full h-[40rem] md:h-[45rem] object-cover md:object-cover"
              src={firstItem.image}
              alt="cat"
            />
            <div className="px-1 md:px-6 py-4">
              <div className="font-bold text-xl mb-2 truncate">
                {firstItem.title.toUpperCase()}
              </div>
              <p className="text-gray-700 text-base pb-6 truncate">
                {firstItem.description}
              </p>
              <p>
                Status:{" "}
                <span className="font-bold">
                  {firstItem.isFound ? "DITEMUKAN" : "BELUM DITEMUKAN"}
                </span>
              </p>
              <div
                onClick={() => handleClick(firstItem.id, "find")}
                className="text-center font-bold mt-5 cursor-pointer"
              >
                Read More...
              </div>
            </div>
          </div>

          <div
            // key={item.id}
            className="mt-20 text-center sm:max-w-sm md:max-w-lg rounded overflow-hidden shadow-lg shadow-slate-600"
          >
            <img
              className="w-full h-[40rem] md:h-[45rem] object-cover md:object-cover"
              src={secondItem.image}
              alt="cat"
            />
            <div className="px-1 md:px-6 py-4">
              <div className="font-bold text-xl mb-2 truncate">
                {secondItem.title.toUpperCase()}
              </div>
              <p className="text-gray-700 text-base pb-6 truncate">
                {secondItem.description}
              </p>
              <p>
                Status:{" "}
                <span className="font-bold">
                  {secondItem.isFound ? "DITEMUKAN" : "BELUM DITEMUKAN"}
                </span>
              </p>
              <div
                onClick={() => handleClick(secondItem.id, "found")}
                className="text-center font-bold mt-5 cursor-pointer"
              >
                Read More...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
