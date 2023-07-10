import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  // Define the properties of the Product type
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  categories: string;
  image: string;
}

interface ProductProps {
  data: Product[]; // Update the type of data to Product[]
  error: boolean;
  isLoading: boolean;
}

interface CreateWishlist {
  name: string;
  userId?: number;
  productId: number;
}

export default function Product({ data, error, isLoading }: ProductProps) {
  const [user, setUser] = useState([]);

  const fetchUserData = async () => {
    try {
      const token = window.localStorage.getItem("token"); // Retrieve token when making the API request

      if (!token) {
        return; // Return early if token is not available
      }

      const response = await axios.get(
        "https://w17-our-backend-group-c-production.up.railway.app/auth/profileuser",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(response.data.userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }
  const formatToIDR = (data: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(data);
  };

  const handleWishlist = async ({ name, productId }: CreateWishlist) => {
    try {
      const token = window.localStorage.getItem("token"); // Retrieve token when making the API request

      if (!token) {
        return; // Return early if token is not available
      }

      await axios.post(
        "https://w17-our-backend-group-c-production.up.railway.app/wishlists",
        {
          name: name,
          userId: user,
          productId: productId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-10 mb-20">
      {data.map((product) => (
        <div key={product.id} className="">
          <div className="mt-10 relative rounded-md overflow-hidden hover:scale-110 duration-500 shadow-2xl shadow-black">
            <a className="relative flex h-60 overflow-hidden" href="#">
              <img
                className="absolute top-0 right-0 h-full w-full object-cover"
                src={product.image}
                alt="product image"
              />
              {/* <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
              </div> */}
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
            </a>
            <div className="mt-4 text-center px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.title}
                </h5>
              </a>
              <div className="mt-2 inline-flex mb-5 flex items-center justify-between">
                <p className="text-center">
                  <span className="text-3xl text-center font-bold text-slate-900">
                    {formatToIDR(product.price)}
                  </span>
                </p>
              </div>
              <button className="inline-flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <Link href="/private/cart">Add to cart</Link>
              </button>
              <button
                onClick={() =>
                  handleWishlist({ name: product.title, productId: product.id })
                }
                className="inline-flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
