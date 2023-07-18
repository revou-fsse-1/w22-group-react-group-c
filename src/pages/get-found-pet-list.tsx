import React from "react";

export default function getFoundPetListRoute() {
  return (
    <div className="flex justify-center">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10 mb-20 ">
        <div className="mt-20 max-w-lg rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80"
            alt="cat"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base pb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div className="text-center font-bold">Read More...</div>
          </div>
        </div>
        <div className="mt-20 max-w-lg rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80"
            alt="cat"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base pb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div className="text-center font-bold">Read More...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
