import PrivateLayout from "@/layout/PrivateLayout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Wishlists {
  id?: number;
  name: string;
  userId?: number;
}
interface WishlistProps {
  initialData: Wishlists[];
}

export function Wishlist({ initialData }: WishlistProps) {
  const [wishlist, setWishlist] = useState(initialData);
  useEffect(() => {
    setWishlist(initialData);
  }, [initialData]);

  console.log(wishlist, initialData);
  const router = useRouter();
  const formatToIDR = (data: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(data);
  };

  const handleDelete = async (id: number | undefined) => {
    const token = window.localStorage.getItem("token"); // Retrieve token when making the API request

    if (!token) {
      return; // Return early if token is not available
    }
    try {
      await axios.delete(
        `https://w17-our-backend-group-c-production.up.railway.app/wishlists/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem("token");
      if (!token) {
        return;
      }
      const response = await axios.get(
        "https://w17-our-backend-group-c-production.up.railway.app/wishlists",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setWishlist(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-10 mb-20">
        {wishlist.map((wishlist) => (
          <div key={wishlist.id} className="">
            <div className="mt-10 relative rounded-md overflow-hidden hover:scale-110 duration-500 shadow-2xl shadow-black">
              <a className="relative flex h-60 overflow-hidden" href="#">
                <img
                  className="absolute top-0 right-0 h-full w-full object-cover"
                  src=""
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
                    {wishlist.name}
                  </h5>
                </a>
                <div className="mt-2 inline-flex mb-5 flex items-center justify-between">
                  <p className="text-center">
                    <span className="text-3xl text-center font-bold text-slate-900">
                      {/* {formatToIDR(product.price)} */}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(wishlist.id)}
                  className="inline-flex items-center justify-center bg-red-600 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const PrivateWishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      fetchData(token);
    }
  }, []);

  const fetchData = async (token: string) => {
    try {
      const response = await axios.get(
        "https://w17-our-backend-group-c-production.up.railway.app/wishlists",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const initialData = response.data;
      setWishlistData(initialData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PrivateLayout>
      <Wishlist initialData={wishlistData} />
    </PrivateLayout>
  );
};

export default PrivateWishlist;

// export async function getServerSideProps() {
//   try {
//     // Retrieve token when making the API request

//     // Fetch the data or perform any other server-side tasks
//     const response = await axios.get(
//       "https://w17-our-backend-group-c-production.up.railway.app/wishlists"
//     );

//     const initialData = response.data;

//     // Return the props object
//     return {
//       props: {
//         initialData,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         initialData: [], // Provide a fallback value if the data fetching fails
//       },
//     };
//   }
// }
