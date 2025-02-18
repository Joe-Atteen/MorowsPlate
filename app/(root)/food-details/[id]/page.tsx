"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Slider from "@/components/Slider";

const image = "/food1.png";
const chefName = "Kwatelai Quartey";
const foodName = "Jollof Rice & Grilled Chicken";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam eget";
const price = "$20.00";

const foodDetails = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-3 sm:px-12 mb-20 pt-[90px] md:pt-[130px]">
        <div className="h-full w-full bg-[#ecf5f5] p-3 sm:p-8 xl:p-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
            <div>
              <Image src={image} width={1000} height={1000} alt="food image" />
            </div>
            <div className="">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <Link href="#" className="text-[#717171]">
                  {chefName}
                </Link>
                <div className="flex items-center gap-3">
                  <Rating
                    iconsCount={5}
                    size={22}
                    fillColor={"#ffd700"}
                    readonly={true}
                  />
                  <div className="flex items-center gap-3 mt-1 text-[#717171]">
                    <span className="border-e border-[#d3d3d3] pe-3 font-gellixBold">
                      4.4
                    </span>
                    <span>7 reviews</span>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="text-3xl md:text-5xl uppercase font-gellixBold mb-5"
              >
                {foodName}
              </Link>
              <p className="text-[#717171] mb-5 mt-5">{description}</p>
              <p className="font-gellixExtraBold tracking-wider text-2xl mb-12">
                {price}
              </p>
              <div className="border-t border-[#e0e0e0] pt-5">
                <div className="mb-8">
                  <p className="mb-3 font-gellixMedium">
                    Size{" "}
                    <span className="text-[#717171] font-gellixLight text-[14px]">
                      (required)
                    </span>
                  </p>
                  <div>
                    <RadioGroup
                      defaultValue="option-one"
                      className="flex gap-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Small</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="option-two"
                          id="option-two"
                          className=""
                        />
                        <Label htmlFor="option-two">Medium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="option-three"
                          id="option-three"
                          className=""
                        />
                        <Label htmlFor="option-three">Large</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div>
                  <p className="mb-3 font-gellixMedium">Quantity</p>
                  <div className="flex border border-[#e0e0e0] rounded-md">
                    <div className="w-[120px] flex justify-end items-center gap-3">
                      <div className="flex justify-center items-center rounded-md w-[40px] h-7 cursor-pointer">
                        <MinusIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-[40px] flex justify-center items-center">
                        <span>1</span>
                      </div>
                      <div className="flex justify-center items-center rounded-md w-[40px] h-7 cursor-pointer">
                        <PlusIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <button className="btn-primary w-full !rounded-s-none">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[#ecf5f5] p-3 py-10 sm:p-8 xl:p-10">
        <div className="mb-10">
          <h4 className="uppercase font-gellixBold text-center text-3xl text-[#244848] underline">
            You may also like
          </h4>
        </div>
        <div className="gap-6 md:gap-8 lg:gap-16">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default foodDetails;
