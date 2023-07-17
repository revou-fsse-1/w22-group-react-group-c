import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#FFD6A5] w-full z-50 fixed px-4 py-2 drop-shadow-xl shadow-md shadow-[#1c1c1c]">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white">
            <div className="relative">
              <button className="text-black focus:outline-none">
                Dropdown
              </button>
              <div className="absolute bg-gray-700 mt-2 py-2 w-48 rounded-md shadow-lg hidden">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                >
                  Option 3
                </a>
              </div>
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
      </nav>
    </div>
  );
}
