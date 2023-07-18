import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

interface FormProps {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const schema = yup
    .object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(5).required("Password is required"),
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
      const response = await axios.post(
        "https://wheremypets-backend-production.up.railway.app/auth/login/user",
        {
          email: data.email,
          password: data.password,
        }
      );
      window.localStorage.setItem("token", response.data.access_token);
      console.log(data);
      router.push("/");
    } catch (error) {
      alert("email or password not found!");
    }
  };
  return (
    <div>
      <div className="p-6 md:p-14">
        <div className="flex w-full md:w-[500px] flex-col space-y-5 rounded-lg border py-16 px-5 shadow-xl mx-auto">
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
            <h1 className=" text-3xl font-bold text-gray-700">Login Form</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="email"
                  {...register("email")} // Register email input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Your Email{" "}
                </label>
              </div>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="password"
                  id="password"
                  {...register("password")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Your Password
                </label>
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <div className="z-50 text-center mt-3">
              <button
                className="rounded-lg z-30 bg-[#54be0d] hover:bg-[#4ba212] px-16 sm:px-32 md:px-32 py-4 font-bold text-lg text-white shadow-black shadow-sm"
                type="submit"
              >
                <span className="drop-shadow-lg">Login</span>
              </button>
            </div>
          </form>
          <p className="text-sm z-30 text-center font-light text-black ">
            Don`t have an account ?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
