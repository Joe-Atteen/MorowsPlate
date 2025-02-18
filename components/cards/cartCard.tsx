import React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Trash2 } from "lucide-react";
import Link from "next/link";

interface CartCardProps {
  image: string;
  foodName: string;
  price: string;
}

const CartCard = ({ image, foodName, price }: CartCardProps) => {
  return (
    <>
      <div className="flex justify-between items-center gap-3 px-3 border-b pb-6">
        <div className="rounded-2xl overflow-hidden w-[20%]">
          <Image
            src={image}
            alt="food"
            width={100}
            height={100}
            priority={true}
            className="rounded-lg w-[70px] h-[70px]"
          />
        </div>
        <div className="w-[50%]">
          <p>{foodName}</p>
          <p className="font-gellixBold tracking-wider">{price}</p>
        </div>
        <div className="w-[30%] flex flex-col items-end gap-5">
          <Trash2 className="w-5 h-5 text-primary cursor-pointer" />
          <div className="w-full flex justify-end items-center gap-3">
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-md w-7 h-7 cursor-pointer">
              <MinusIcon className="w-5 h-5 text-primary" />
            </div>
            <span>1</span>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-md w-7 h-7 cursor-pointer">
              <PlusIcon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-3 p-3 pb-0">
        <p className="font-gellixMedium">Subtotal:</p>
        <p className="font-gellixBold tracking-wider">{price}</p>
      </div>
      <div className="flex justify-between items-center gap-3 p-3">
        <p className="font-gellixMedium">Grand Total:</p>
        <p className="font-gellixBold tracking-wider">{price}</p>
      </div>
      <div className="px-3 py-6 flex gap-2">
        <Link href="/"className="btn-secondary w-full text-center">Continue Shopping
        </Link>
        <Link href="/checkout" className="btn-primary w-full text-center">Checkout
        </Link>
      </div>
    </>
  );
};

export default CartCard;
