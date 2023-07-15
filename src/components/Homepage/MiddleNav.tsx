import React from "react";
import Image from "next/image";

export default function MiddleNav() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className=" relative flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
              alt="cat-photo"
              width={500}
              height={500}
              className="h-full w-full rounded-xl object-cover shadow-lg shadow-black"
            />
          </div>
        </div>
        <div className="relative aspect-w-1 aspect-h-1">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
              alt="dog-husky"
              width={500}
              height={200}
              className="h-full w-full object-cover rounded-xl shadow-lg shadow-black"
            />
          </div>
        </div>
        <div className=" relative aspect-w-1 aspect-h-1">
          <Image
            src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80"
            alt="cat-photo"
            width={500}
            height={500}
            className="h-full  w-full rounded-xl shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
}
