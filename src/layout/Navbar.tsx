import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#FFD6A5] w-full z-50 fixed px-4 py-2 drop-shadow-xl shadow-md shadow-[#1c1c1c]">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white">
            <div className="w-28 text-black">
              <Select className="" label="Menu">
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
      </nav>
    </div>
  );
}
