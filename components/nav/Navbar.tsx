import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex-between background-light900_dark200 gap-5 p-3 py-2 shadow-light-300 sm:px-12 relative h-[70px] sm:h-[100px]">
        <div className="xl:flex items-center gap-6 font-bungee text-[1.1rem] hidden">
          <NavLinks />
        </div>
        <MobileNav />
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
        <NavIcons />
      </div>
    </nav>
  );
};

export default Navbar;
