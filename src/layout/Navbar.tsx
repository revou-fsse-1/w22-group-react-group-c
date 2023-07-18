import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      {/* <nav className="bg-[#FFD6A5] w-full z-50 fixed px-4 py-2 drop-shadow-xl shadow-md shadow-[#1c1c1c]">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white">
            <div className="w-28 text-black font-bold">
              <Select className="font-bold" label="Menu">
                <Option className="text-black">Homepage</Option>
                <Option className="text-black">Found Pet List</Option>
                <Option className="text-black">Find Pet List</Option>
              </Select>
            </div>
          </div>
          <div className="flex items-center text-black">
            <Image src="/logo-navbar.png" width={100} height={100} alt="logo" />
          </div>
          <div className="flex items-center">
            <button className="px-2 text-xl font-bold">
              <Link href="/auth/login">Login</Link>
            </button>
            <button className="bg-[#99d96e] border-black hover:bg-[#7bbb50] rounded-2xl text-white font-bold py-2 px-4">
              <Link href="/auth/register">Register</Link>
            </button>
          </div>
        </div>
      </nav> */}
      <nav className="w-full fixed z-50 drop-shadow-xl shadow-md shadow-[#1c1c1c] bg-[#FFD6A5]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  src="/logo-navbar.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 font-bold hover:text-blue-600">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-gray-600 font-bold hover:text-blue-600">
                  <Link href="/">Found Pet List</Link>
                </li>
                <li className="text-gray-600 font-bold hover:text-blue-600">
                  <Link href="/">Find Pet List</Link>
                </li>

                <div className="flex items-center">
                  <button className="px-2 text-xl font-bold">
                    <Link href="/auth/login">Login</Link>
                  </button>
                  <button className="bg-[#99d96e] border-black hover:bg-[#7bbb50] rounded-2xl text-white font-bold py-2 px-4">
                    <Link href="/auth/register">Register</Link>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
