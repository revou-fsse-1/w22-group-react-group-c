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

interface FormProps {
  title?: string;
  description?: string;
  name?: string;
  location?: string;
  locationDetail?: string;
  species?: string;
  contact?: string;
  image?: string;
  isFound?: boolean;
}

export default function EditFindPetForm() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const router = useRouter();
  const { id, type } = router.query;
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
      title: yup.string().optional(),
      description: yup.string().optional(),
      name: yup.string().optional(),
      location: yup.string().optional(),
      locationDetail: yup.string().optional(),
      species: yup.string().optional(),
      contact: yup.string().optional(),
      image: yup.string().optional(),
      isFound: yup.boolean().optional(),
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
    try {
      const token = window.localStorage.getItem("token");
      const decodedToken: { userId: string } = jwt_decode(token as string);
      const userId = decodedToken.userId;

      let imageUrl = ""; // Initialize the imageUrl variable
      let updatedData: FormProps = {}; // Initialize the updatedData object

      if (selectedImage) {
        const originalFilename = selectedImage?.name || "image.jpg";
        const response = await imagekit.upload({
          file: selectedImage,
          fileName: originalFilename,
        });
        imageUrl = response.url;
      } else {
        // If no image is selected, exclude the image field from updatedData
        delete updatedData.image;
      }

      // Conditionally add properties to updatedData based on form data
      if (data.title) updatedData.title = data.title;
      if (data.description) updatedData.description = data.description;
      if (data.name) updatedData.name = data.name;
      if (data.location) updatedData.location = data.location;
      if (data.locationDetail) updatedData.locationDetail = data.locationDetail;
      if (data.species) updatedData.species = data.species;
      if (data.contact) updatedData.contact = data.contact;

      // Only add the image property if an image is selected
      if (imageUrl) {
        updatedData.image = imageUrl;
      }

      const response = await axios.patch(
        `https://wheremypets-backend-production.up.railway.app/find/${id}`, // add ${postID}

        updatedData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(updatedData);
      console.log(response.data);
      // console.log(imageUrl);
      router.push(`/private/pet-description?id=${id}&type=find`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
                    href={`/private/pet-description?id=${id}&type=find`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Back
                  </Link>
                </div>
              </button>
              {/* </Link> */}
            </div>
            <div className="mx-auto mb-2 space-y-3">
              <h1 className=" text-3xl font-bold text-gray-700">
                Edit Find Pet Form
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h2 className="font-semibold text-lg">Title </h2>
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="title"
                    {...register("title")} // Register email input
                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="title"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                  >
                    {" "}
                    Enter Title{" "}
                  </label>
                </div>
              </div>
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}

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
                    <option value="Kalimantan Selatan">
                      Kalimantan Selatan
                    </option>
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
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
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
                    htmlFor="species"
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

              <div className="z-50 text-center mt-5">
                <button
                  className="rounded-lg bg-blue-600 hover:bg-blue-500 px-6 md:px-10 py-4 font-bold text-lg text-white"
                  type="submit"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
