import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MiddleNav() {
  return (
    <>
      <section className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11 mt-10 mb-20">
        <div className="">
          <div className="mt-10 relative rounded-md overflow-hidden hover:scale-110 duration-500 shadow-2xl shadow-black">
            <Link
              className="relative flex h-60 overflow-hidden"
              href="/private/form-found-pet"
            >
              <Image
                className="absolute top-0 right-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
                alt="product image"
                width={500}
                height={500}
              />
              <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                <div className="bg-red-600 hover:bg-red-800 p-2 rounded-xl opacity-90 shadow-black shadow-md">
                  <button className="font-bold text-white text-2xl">
                    Found Pet Form
                  </button>
                </div>
              </div>
              <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <div className="">
              {/* <button
                onClick={() =>
                  handleWishlist({ name: product.title, productId: product.id })
                }
                className="inline-flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
              >
                Add to wishlist
              </button> */}
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-10 w-64 md:w-72 relative rounded-md overflow-hidden hover:scale-110 duration-500 shadow-2xl shadow-black">
            <div className="relative flex h-60 overflow-hidden">
              <Image
                className="absolute top-0 right-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
                alt="husky image"
                width={500}
                height={500}
              />

              <div className="absolute bottom-14 mb-4 flex w-full justify-center space-x-4">
                <div className="bg-red-600 hover:bg-red-800 p-2 rounded-xl opacity-90 shadow-black shadow-md">
                  <button className="font-bold text-white text-2xl">
                    <Link href="/private/get-find-pet-list">Find Pet List</Link>
                  </button>
                </div>
              </div>
              <div className="absolute top-14 mb-4 flex w-full justify-center space-x-4">
                <div className="bg-red-600 hover:bg-red-800 p-2 rounded-xl opacity-90 shadow-black shadow-md">
                  <button className="font-bold text-white text-2xl">
                    <Link href="/private/get-found-pet-list">
                      Found Pet List
                    </Link>
                  </button>
                </div>
              </div>

              <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="">
              {/* <button
                onClick={() =>
                  handleWishlist({ name: product.title, productId: product.id })
                }
                className="inline-flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
              >
                Add to wishlist
              </button> */}
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-10 relative rounded-md overflow-hidden hover:scale-110 duration-500 shadow-2xl shadow-black">
            <Link
              className="relative flex h-60 overflow-hidden"
              href="/private/form-find-pet"
            >
              <Image
                className="absolute top-0 right-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80"
                alt="cat-photo"
                width={500}
                height={500}
              />
              <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                <div className="bg-red-600 hover:bg-red-800 p-2 rounded-xl opacity-90 shadow-black shadow-md">
                  <button className="font-bold text-white text-2xl">
                    Find Pet Form
                  </button>
                </div>
              </div>
              <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
