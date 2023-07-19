import axios from "axios";
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

  return (
    // <div className="flex justify-center">
    //   <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10 mb-20 ">
    //     <div className="mt-20 max-w-lg rounded overflow-hidden shadow-lg">
    //       <img
    //         className="w-full"
    //         src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80"
    //         alt="cat"
    //       />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    //         <p className="text-gray-700 text-base pb-6">
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //           Voluptatibus quia, nulla! Maiores et perferendis eaque,
    //           exercitationem praesentium nihil.
    //         </p>
    //         <div className="text-center font-bold">Read More...</div>
    //       </div>
    //     </div>
    //     <div className="mt-20 max-w-lg rounded overflow-hidden shadow-lg">
    //       <img
    //         className="w-full"
    //         src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80"
    //         alt="cat"
    //       />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    //         <p className="text-gray-700 text-base pb-6">
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //           Voluptatibus quia, nulla! Maiores et perferendis eaque,
    //           exercitationem praesentium nihil.
    //         </p>
    //         <div className="text-center font-bold">Read More...</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
                <div className="text-center font-bold mt-5">Read More...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
