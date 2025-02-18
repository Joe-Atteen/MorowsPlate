import React from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Cart from "../Cart";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      <Sheet>
        <SheetTrigger>
          <ShoppingCartIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </SheetTrigger>
        <Cart />
      </Sheet>
      <UserCircleIcon className="w-7 h-7 hidden sm:block" />
    </div>
  );
};

export default NavIcons;
