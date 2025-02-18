"use client";
import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

interface FoodCardProps {
  image: string;
  chefName: string;
  foodName: string;
  description: string;
  price: string;
}

const FoodCard = ({
  image,
  chefName,
  foodName,
  description,
  price,
}: FoodCardProps) => {
  return (
    <>
      <div className="card-wrapper hidden md:block">
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
        <button className="btn-primary w-full">Add to cart</button>
      </div>

      <div className="flex justify-between items-center gap-3 md:hidden">
        <div className="rounded-2xl overflow-hidden w-[20%]">
          <Link href="#">
            <Image
              src={image}
              alt="food"
              width={100}
              height={100}
              priority={true}
              className="rounded-lg w-[80px] h-[80px]"
            />
          </Link>
        </div>
        <div className="w-[50%]">
          {/* <div className="flex flex-wrap justify-between items-center mb-1">
            <Link href="#" className="text-[#717171]">
              {chefName}
            </Link>
            <Rating
              iconsCount={5}
              size={22}
              fillColor={"#ffd700"}
              readonly={true}
            />
          </div> */}
          <Link href="#" className="font-gellixBold mb-1 truncate">
            {foodName}
          </Link>
          <p className="text-[#717171] mb-1 line-clamp-1">{description}</p>
          <p className="font-gellixSemiBold tracking-wider">{price}</p>
        </div>
        <div className="w-[20%] flex justify-end items-center gap-3">
          <div className="flex justify-center items-center bg-[#F5F5F5] rounded-md w-7 h-7">
            <MinusIcon className="w-5 h-5 text-primary" />
          </div>
          <span>1</span>
          <div className="flex justify-center items-center bg-[#F5F5F5] rounded-md w-7 h-7">
            <PlusIcon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
