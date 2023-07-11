import PrivateLayout from "@/layout/PrivateLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  FormProps,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import * as yup from "yup";

interface ProductProps {
  title: string;
  name: string;
  description: string;
  image: string;
  userId: string;
}

export function AddPost() {
  const router = useRouter();

  const schema = yup
    .object({
      title: yup.string().required("Title is required"),
      name: yup.string().required("Name is required"),
      description: yup.string().required("Description is required"),
      image: yup.string().required("Image required"),
      userId: yup.string().required("UserId is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ProductProps> = async (data, event: any) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token"); // - client side
    await axios.post(
      "https://wheremypets-backend-production.up.railway.app/post",
      {
        title: data.title,
        name: data.name,
        description: data.description,
        image: data.image,
        userId: data.userId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    router.push("/");
  };
  // const registerTitle: UseFormRegisterReturn<"title"> = register("title");
  // const registerDescription: UseFormRegisterReturn<"description"> =
  //   register("description");
  // const registerPrice: UseFormRegisterReturn<"price"> = register("price");
  // const registerQuantity: UseFormRegisterReturn<"quantity"> =
  //   register("quantity");
  // const registerCategories: UseFormRegisterReturn<"categories"> =
  //   register("categories");

  return (
    <div>
      <div className="p-56">
        <div className="flex w-[500px]  flex-col space-y-5 rounded-lg border py-20 px-5 shadow-xl mx-auto">
          <div className="mx-auto mb-2 space-y-3">
            <h1 className=" text-3xl font-bold text-gray-700">Add Product</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="text"
                  {...register("title")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="title"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Title{" "}
                </label>
              </div>
            </div>
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="description"
                  {...register("description")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="description"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Description
                </label>
              </div>
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="name"
                  {...register("name")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Name
                </label>
              </div>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="image"
                  {...register("image")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="image"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Image
                </label>
              </div>
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="userId"
                  {...register("userId")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="userId"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  UserId
                </label>
              </div>
            </div>
            {errors.userId && (
              <p className="text-red-500 text-sm">{errors.userId.message}</p>
            )}

            <div className="z-50 text-center mt-3">
              <button
                className="rounded-lg z-30 bg-blue-600 hover:bg-blue-500 px-32 py-4 font-bold text-lg text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const PrivateAddProduct = () => {
  return (
    <PrivateLayout>
      <AddPost />
    </PrivateLayout>
  );
};

export default PrivateAddProduct;
