import React from "react";
import Image from "next/image";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
    return (
      <nav className="fixed z-50 w-full">
        <div className="flex-between background-light900_dark200 gap-5 p-6 py-2 shadow-light-300 sm:px-12 relative h-[100px]">
          <div className="flex items-center gap-6 font-bungee text-[1.1rem]">
            <Link href="/" className="navlink">
              All Meals
            </Link>
            <Link href="/" className="navlink">
              Ghanaian Meals
            </Link>
            <Link href="/" className="navlink">
              Nigerian Meals
            </Link>
          </div>
          <Image
            src="/logo-alt.png"
            alt="logo"
            width={230}
            height={0}
            priority={true}
            className="absolute left-[50%] transfrom -translate-x-[50%]"
          />
          <div className="flex items-center gap-6">
            <MagnifyingGlassIcon className="w-7 h-7" />
            <ShoppingCartIcon className="w-7 h-7" />
            <UserCircleIcon className="w-7 h-7" />
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
