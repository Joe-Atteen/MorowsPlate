import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#244848] w-full h-full px-6 sm:px-12 pt-[220px] pb-[130px]">
      <div className="max-w-[1400px] mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-10 items-center">
        <div className="text-white text-center lg:text-left">
          <h1 className="text-[40px] sm:text-[50px] xl:text-[70px] xl:leading-[80px] font-bold font-bungee mb-8">
            Order your favorite local meals
          </h1>
          <p className="text-xl lg:text-[24px] lg:leading-[36px] max-w-[550px] mx-auto lg:mx-0">
            Take advantage of local food prepared by chefs who understand your
            taste buds.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/hero-image.png"
            alt="hero image"
            width={700}
            height={0}
            priority={true}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
