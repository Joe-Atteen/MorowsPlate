import React from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      <ShoppingCartIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      <UserCircleIcon className="w-7 h-7 hidden sm:block" />
    </div>
  );
};

export default NavIcons;
