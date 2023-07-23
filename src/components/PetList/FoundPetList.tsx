import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ListSkeleton from "./ListSkeleton";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [filterText, setFilterText] = useState<string>("");
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://wheremypets-backend-production.up.railway.app/found"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };
  const handleClick = (id: string) => {
    router.push(`/private/pet-description?id=${id}&type=found`);
  };

  const filteredData = data.filter((item) => {
    const titleMatches = item.title
      .toUpperCase()
      .includes(filterText.toUpperCase());

    if (filterText.toUpperCase() === "DITEMUKAN") {
      return item.isFound;
    }

    if (filterText.toUpperCase() === "BELUM DITEMUKAN") {
      return !item.isFound;
    }

    return titleMatches;
  });

  return (
    <div>
      <h1 className="pt-28 text-center font-bold text-5xl">Found Pet List</h1>
      <div className="relative flex justify-center items-center mt-4">
        <input
          type="text"
          placeholder=" 🔍 Filter by TITLE or STATUS "
          onChange={handleFilterChange}
          value={filterText}
          className="w-72 shadow-slate-500 shadow-md rounded-md px-4 py-2   border border-gray-300 focus:outline-none focus:ring focus:border-green-200"
        />
        {filterText && (
          <button
            onClick={() => setFilterText("")}
            className="relative text-white shadow-slate-500 shadow-md font-bold  bg-red-600 hover:bg-red-800 p-[11.5px] rounded-r-lg focus:outline-none"
          >
            Clear
          </button>
        )}
      </div>
      <div className="p-5 sm:flex sm:justify-center">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10 mb-20 ">
          {loading ? (
            <ListSkeleton />
          ) : filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="mt-20 text-center sm:max-w-sm md:max-w-lg rounded overflow-hidden shadow-lg"
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
            ))
          ) : (
            <>
              <div className="text-center sm:absolute sm:left-[12rem] md:left-[31rem] text-gray-600">
                <h2 className="text-2xl font-bold">Not Found</h2>
                <p>No matching pets found. Please try a different search.</p>
              </div>
              <br className="hidden sm:flex" />
              <br className="hidden sm:flex" />
              <br className="hidden sm:flex" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
