import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import CartCard from "./cards/cartCard";

const Cart = () => {
  return (
    <SheetContent className="bg-white px-0 !w-full sm:!w-[800px]">
      <SheetHeader className="border-b pb-3 mb-6 px-3">
        <SheetTitle className="-mt-4 font-gellixBold text-xl">
          Your Cart
        </SheetTitle>
      </SheetHeader>
      <CartCard
        image="/food1.png"
        foodName="Jollof Rice & Chicken"
        price="$40.99"
      />
    </SheetContent>
  );
};

export default Cart;
