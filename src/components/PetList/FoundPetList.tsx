import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface FoundPetData {
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

export default function FoundPetList() {
  const [data, setData] = useState<FoundPetData[]>([]);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://wheremypets-backend-production.up.railway.app/found"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const handleClick = (id: string) => {
    router.push(`/private/pet-description?id=${id}&type=found`);
  };

  return (
    <div>
      <h1>Found Pet</h1>
      <div className="p-5 sm:flex sm:justify-center">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10 mb-20 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="mt-20 sm:max-w-sm md:max-w-lg rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-[40rem] md:h-[45rem] object-cover md:object-cover"
                src={item.image}
                alt="cat"
              />
              <div className="px-1 md:px-6 py-4">
                <div className="font-bold text-xl mb-2 truncate">
                  {item.title.toUpperCase()}
                </div>
                <p className="text-gray-700 text-base pb-6 truncate">
                  {item.description}
                </p>
                <p>
                  Status:{" "}
                  <span className="font-bold">
                    {item.isFound ? "DITEMUKAN" : "BELUM DITEMUKAN"}
                  </span>
                </p>
                <div
                  onClick={() => handleClick(item.id)}
                  className="text-center cursor-pointer font-bold mt-5"
                >
                  Read More...
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
