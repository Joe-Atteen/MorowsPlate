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
      <div className="flex-between background-light900_dark200 gap-5 p-3 py-2 shadow-light-300 sm:px-12 relative h-[70px] sm:h-[100px]">
        <div className="xl:flex items-center gap-6 font-bungee text-[1.1rem] hidden">
          <Link href="/" className="navlink">
            All Meals
          </Link>
          <Link href="/ghanaian-meals" className="navlink">
            Ghanaian
          </Link>
          <Link href="/nigerian-meals" className="navlink">
            Nigerian
          </Link>
        </div>
        <Image
          src="/hamburger.svg"
          alt="hamburger"
          width={30}
          height={30}
          priority={true}
          className="invert-colors block xl:hidden"
        />
        <div className="absolute left-[50%] transfrom -translate-x-[50%]">
          <Link href="/">
            <Image
              src="/logo-alt.png"
              alt="logo"
              width={230}
              height={0}
              priority={true}
              className=" w-[150px] sm:w-[230px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <ShoppingCartIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <UserCircleIcon className="w-7 h-7 hidden sm:block" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
