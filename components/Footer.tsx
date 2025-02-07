import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#244848] text-white py-8 text-center">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-12 xl:px-12">
          <Image
            src="/logo-alt.png"
            alt="logo"
            width={230}
            height={0}
            priority={true}
            className="w-[150px] sm:w-[230px] invert mb-10"
          />
          <div className="flex items-center gap-3 sm:gap-6">
            
          </div>
          <p className="text-[14px] sm:text-[16px] uppercase font-gellixLight">
            &copy; 2025 Troasel. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
