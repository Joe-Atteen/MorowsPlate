"use client";
import Popular from "@/components/cards/foodCardAlt";
import React from "react";

const Wishlist = () => {
  const handleRemoveFromWishlist = () => {
    console.log("Item removed from wishlist");
  };

  return (
    <div className="max-w-[1400px] mx-auto px-3 sm:px-12 xl:px-12 pt-[90px] md:pt-[130px]">
      <h4 className="uppercase font-gellixBold text-3xl text-[#244848] underline mb-16">
        My wishlist
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16 mb-20">
        <Popular
          image={"/food1.png"}
          chefName={"Mo Salah"}
          foodName={"Banku & Tilapia"}
          description={
            "A traditional Ghanaian dish consisting of fermented corn and cassava dough served with grilled tilapia."
          }
          price={"$20.50"}
          action={"Add to cart"}
          onClose={handleRemoveFromWishlist} 
        />
        <Popular
          image={"/food1.png"}
          chefName={"Mo Salah"}
          foodName={"Banku & Tilapia"}
          description={
            "A traditional Ghanaian dish consisting of fermented corn and cassava dough served with grilled tilapia."
          }
          price={"$20.50"}
          action={"Add to cart"}
          onClose={handleRemoveFromWishlist} 
        />
      </div>
    </div>
  );
};

export default Wishlist;
