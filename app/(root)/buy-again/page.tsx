import React from "react";
import Popular from "@/components/cards/foodCardAlt";

const BuyAgain = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-3 sm:px-12 xl:px-12 pt-[90px] md:pt-[130px]">
      <h4 className="uppercase font-gellixBold text-3xl text-[#244848] mb-16">
        Loved what you ordered the last time?
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
          action={"Buy again"}
        />
        <Popular
          image={"/food1.png"}
          chefName={"Mo Salah"}
          foodName={"Banku & Tilapia"}
          description={
            "A traditional Ghanaian dish consisting of fermented corn and cassava dough served with grilled tilapia."
          }
          price={"$20.50"}
          action={"Buy again"}
        />
      </div>
    </div>
  );
};

export default BuyAgain;
