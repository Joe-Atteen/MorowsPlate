"use client";
import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";

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
    <div className="card-wrapper">
      <div className="rounded-2xl overflow-hidden mb-5">
        <Link href="#">
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
      <div className="flex flex-wrap sm:justify-between items-center mb-2">
        <Link href="#" className="text-[#717171]">{chefName}</Link>
        <Rating
          iconsCount={5}
          size={22}
          fillColor={"#ffd700"}
          readonly={true}
        />
      </div>
      <Link href="#" className="text-lg font-gellixBold mb-3">{foodName}</Link>
      <p className="text-[#717171] mb-5 line-clamp-2">{description}</p>
      <p className="font-gellixExtraBold tracking-wider text-3xl mb-5">
        {price}
      </p>
      <button className="btn-primary w-full">Add to cart</button>
    </div>
  );
};

export default FoodCard;
