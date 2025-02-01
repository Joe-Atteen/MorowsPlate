import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 py-2 shadow-light-300 sm:px-12">
      <p>nav</p>
      <Image src="/logo.png" alt="logo" width={400} height={0} />
      <div>
        <MagnifyingGlassIcon className="w-6 h-6 text-dark-500" />
      </div>
    </div>
  );
};

export default Navbar;
