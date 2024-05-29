import React, { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import ImageKit from "imagekit";
import { ReadStream } from "fs";
import "dotenv/config";
import Spinner from "../Spinner";
import ScaleLoader from "react-spinners/ScaleLoader";

interface FormProps {
  title: string;
  description: string;
  name: string;
  location: string;
  locationDetail: string;
  species: string;
  contact: string;
  image: string;
}

export default function FormFoundPet() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const router = useRouter();
  const publicKeyEnv = process.env.NEXT_PUBLIC_KEY as string;
  const privateKeyEnv = process.env.NEXT_PUBLIC_PRIVATE_KEY as string;
  const urlEndpointEnv = process.env.NEXT_PUBLIC_URL_ENDPOINT as string;

  const imagekit = new ImageKit({
    publicKey: publicKeyEnv,
    privateKey: privateKeyEnv,
    urlEndpoint: urlEndpointEnv,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file);
  };
  // console.log(selectedImage);

  const schema = yup
    .object({
      title: yup.string().required("title is required"),
      description: yup.string().required("description is required"),
      name: yup.string().required("name is required"),
      location: yup.string().required("location is required"),
      locationDetail: yup.string().required("location detail is required"),
      species: yup.string().required("species is required"),
      contact: yup.string().required("contact is required"),
      image: yup.string().required("image is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormProps> = async (data, event: any) => {
    event.preventDefault();
    setSubmitLoading(true);
    try {
      const token = window.localStorage.getItem("token");
      const decodedToken: { userId: string } = jwt_decode(token as string);
      const userId = decodedToken.userId;

      const originalFilename = selectedImage?.name || "image.jpg"; // Use the original filename if available, otherwise use a fallback

      // Upload the image to ImageKit
      const response = await imagekit.upload({
        file: selectedImage, // Use the selected image file
        fileName: originalFilename,
      });

      const imageUrl = response.url; // Get the uploaded image URL

      await axios.post(
        "https://wheremypets.adaptable.app/found",
        {
          title: data.title,
          description: data.description,
          name: data.name,
          location: data.location,
          locationDetail: data.locationDetail,
          species: data.species,
          contact: data.contact,
          image: imageUrl,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data);
      // console.log(decodedToken);
      // console.log(imageUrl);
      setSubmitLoading(false);
      router.push("/");
    } catch (error) {
      console.log(error);
      setSubmitLoading(false);
    }
  };
  return (
    <div>
      <div className="p-4 pt-32 md:p-36">
        <div className="flex flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto max-w-[500px]">
          <div className="flex">
            {/* <Link href="/"> */}
            <button
              type="button"
              className=" text-black rounded-l-md border-r border-gray-100 py-2  px-3"
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <Link
                  href="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Back
                </Link>
              </div>
            </button>
            {/* </Link> */}
          </div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-3xl font-bold text-gray-700">Found Pet Form</h1>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* <!-- Title --> */}
            <div>
              <h2 className="font-semibold text-lg">Title</h2>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="title"
                  {...register("title")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="title"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter Title
                </label>
              </div>
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* <!-- Other form elements (Description, Name, Location, Species, Contact, Image) --> */}

            <div>
              <h2 className="font-semibold text-lg mt-5">Description </h2>
              <div className="relative mt-2 w-full">
                <textarea
                  rows={10}
                  id="description"
                  {...register("description")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder="Enter Description"
                ></textarea>
                <label
                  htmlFor="description"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                </label>
              </div>
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}

            <div>
              <h2 className="font-semibold text-lg mt-5">Name</h2>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Your Name
                </label>
              </div>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <div>
              <h2 className="font-semibold text-lg mt-5">Location </h2>
              <div className="relative mt-2 w-full">
                <select
                  id="location"
                  {...register("location")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                >
                  <option value="">Select a Province</option>

                  <option value="Aceh">Aceh</option>
                  <option value="Bali">Bali</option>
                  <option value="Bangka Belitung">Bangka Belitung</option>
                  <option value="Banten">Banten</option>
                  <option value="Bengkulu">Bengkulu</option>
                  <option value="DKI Jakarta">Jakarta</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                  <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                  <option value="Kalimantan Timur">Kalimantan Timur</option>
                  <option value="Nusa Tenggara Timur">
                    Nusa Tenggara Timur
                  </option>
                  <option value="Gorontalo">Gorontalo</option>
                  <option value="Jambi">Jambi</option>
                  <option value="Lampung">Lampung</option>
                  <option value="Maluku">Maluku</option>
                  <option value="Kalimantan Utara">Kalimantan Utara</option>
                  <option value="Maluku Utara">Maluku Utara</option>
                  <option value="Sulawesi Utara">Sulawesi Utara</option>
                  <option value="Sumatera Utara">Sumatera Utara</option>
                  <option value="Papua">Papua</option>
                  <option value="Riau">Riau</option>
                  <option value="Kepulauan Riau">Kepulauan Riau</option>
                  <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                  <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                  <option value="Sumatera Selatan">Sumatera Selatan</option>
                  <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Kalimantan Barat">Kalimantan Barat</option>
                  <option value="Nusa Tenggara Barat">
                    Nusa Tenggara Barat
                  </option>
                  <option value="Papua Barat">Papua Barat</option>
                  <option value="Sulawesi Barat">Sulawesi Barat</option>
                  <option value="Sumatera Barat">Sumatera Barat</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                </select>
                <label
                  htmlFor="location"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Your Current Location
                </label>
              </div>
            </div>
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}

            <div>
              <h2 className="font-semibold text-lg mt-5 text-slate-700">
                Location Detail{" "}
              </h2>
              <div className="relative mt-2 w-full">
                <textarea
                  rows={6}
                  id="locationDetail"
                  {...register("locationDetail")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder="Enter Location Detail"
                ></textarea>
                <label
                  htmlFor="locationDetail"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                </label>
              </div>
            </div>
            {errors.locationDetail && (
              <p className="text-red-500 text-sm">
                {errors.locationDetail.message}
              </p>
            )}

            <div>
              <h2 className="font-semibold text-lg mt-5 text-slate-700">
                Species{" "}
              </h2>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="species"
                  {...register("species")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="species"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  What kind of pet is that?
                </label>
              </div>
            </div>
            {errors.species && (
              <p className="text-red-500 text-sm">{errors.species.message}</p>
            )}

            <div>
              <h2 className="font-semibold text-lg mt-5 text-slate-700">
                Contact{" "}
              </h2>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="contact"
                  {...register("contact")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="contact"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter your contact
                </label>
              </div>
            </div>
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact.message}</p>
            )}

            <div>
              <h2 className="font-semibold text-lg mt-5 text-slate-700">
                Image{" "}
              </h2>
              <div className="relative mt-2 w-full">
                <input
                  type="file"
                  id="image"
                  {...register("image")}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="image"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Pet Image
                </label>
              </div>
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            <div className="text-center mt-5">
              <button
                className="rounded-lg bg-[#54be0d] hover:bg-[#4ba212] px-6 md:px-10 py-4 font-bold text-lg text-white"
                type="submit"
              >
                {submitLoading ? (
                  <ScaleLoader color="#d3dddb" height={13} width={4} />
                ) : (
                  <span className="drop-shadow-lg">Submit Form</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
