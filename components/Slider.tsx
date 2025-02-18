import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import Popular from "./cards/foodCardAlt";

const Slider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-3 xl:px-12">
      {isClient && (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            enabled: window.innerWidth >= 1024,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <Popular
              image={"/food1.png"}
              chefName={"Joe Atteen"}
              foodName={"Loaded Fries"}
              description={
                "A delicious meal of fries with a variety of toppings delicious meal of fries with a variety of toppings."
              }
              price={"$42.50"}
              action={"Add to cart"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Popular
              image={"/food1.png"}
              chefName={"Joe Atteen"}
              foodName={"Loaded Fries"}
              description={
                "A delicious meal of fries with a variety of toppings delicious meal of fries with a variety of toppings."
              }
              price={"$42.50"}
              action={"Add to cart"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Popular
              image={"/food1.png"}
              chefName={"Joe Atteen"}
              foodName={"Loaded Fries"}
              description={
                "A delicious meal of fries with a variety of toppings delicious meal of fries with a variety of toppings."
              }
              price={"$42.50"}
              action={"Add to cart"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Popular
              image={"/food1.png"}
              chefName={"Joe Atteen"}
              foodName={"Loaded Fries"}
              description={
                "A delicious meal of fries with a variety of toppings delicious meal of fries with a variety of toppings."
              }
              price={"$42.50"}
              action={"Add to cart"}
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
