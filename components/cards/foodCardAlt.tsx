"use client";
import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface FoodCardProps {
  image: string;
  chefName: string;
  foodName: string;
  description: string;
  price: string;
  action: string;
  onClose?: () => void; 
}

const Popular = ({
  image,
  chefName,
  foodName,
  description,
  price,
  action,
  onClose,
}: FoodCardProps) => {
  return (
    <div className="card-wrapper relative">
      {onClose && (
        <div
          onClick={onClose}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md cursor-pointer"
        >
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </div>
      )}
      <div className="rounded-2xl overflow-hidden mb-5">
        <Link href="/food-details/1">
          <Image
            src={image}
            alt="food"
            width={1000}
            height={300}
            priority={true}
            className="rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-wrap justify-between items-center mb-2">
        <Link href="#" className="text-[#717171]">
          {chefName}
        </Link>
        <Rating
          iconsCount={5}
          size={22}
          fillColor={"#ffd700"}
          readonly={true}
        />
      </div>
      <Link href="#" className="text-lg font-gellixBold mb-3">
        {foodName}
      </Link>
      <p className="text-[#717171] mb-5 line-clamp-2">{description}</p>
      <p className="font-gellixExtraBold tracking-wider text-2xl mb-5">
        {price}
      </p>
      <button className="btn-primary w-full">{action}</button>
    </div>
  );
};

export default Popular;
