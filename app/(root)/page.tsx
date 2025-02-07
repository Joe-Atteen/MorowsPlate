"use client";
import FoodCard from "../../components/cards/foodCard";
import Hero from "@/components/Hero";
import { useEffect, useRef, useState } from "react";

const foodItems = [
  {
    image: "/food1.png",
    chefName: "Kwatelai Quartey",
    foodName: "Assorted Jollof Rice",
    description:
      "A delicious and flavorful dish made with a mix of rice, tomatoes, onions, and a variety of spices, often served with vegetables and proteins.",
    price: "$199.99",
  },
  {
    image: "/food1.png",
    chefName: "Kwame Ayew",
    foodName: "Grilled Chicken",
    description:
      "Juicy grilled chicken served with a side of fresh vegetables and a tangy sauce.",
    price: "$149.99",
  },
  {
    image: "/food1.png",
    chefName: "Addison Smith",
    foodName: "Vegetable Stir Fry",
    description:
      "A healthy and colorful mix of vegetables stir-fried with a savory sauce.",
    price: "$99.99",
  },
  {
    image: "/food1.png",
    chefName: "Emily Davis",
    foodName: "Beef Tacos",
    description:
      "Soft tortillas filled with seasoned beef, fresh lettuce, tomatoes, and cheese.",
    price: "$129.99",
  },
  {
    image: "/food1.png",
    chefName: "John Mahama",
    foodName: "Spaghetti Bolognese",
    description:
      "Classic Italian pasta dish with a rich and flavorful meat sauce.",
    price: "$179.99",
  },
  {
    image: "/food1.png",
    chefName: "Sarah Brown",
    foodName: "Caesar Salad",
    description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
    price: "$79.99",
  },
  {
    image: "/food1.png",
    chefName: "David Wilson",
    foodName: "Margherita Pizza",
    description:
      "Traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    price: "$159.99",
  },
  {
    image: "/food1.png",
    chefName: "Kojo Mensah",
    foodName: "Sushi Platter",
    description:
      "An assortment of fresh sushi rolls and sashimi, served with soy sauce and wasabi.",
    price: "$299.99",
  },
  {
    image: "/food1.png",
    chefName: "John Mahama",
    foodName: "BBQ Ribs",
    description:
      "Tender and smoky BBQ ribs served with a side of coleslaw and baked beans.",
    price: "$199.99",
  },
  {
    image: "/food1.png",
    chefName: "Patricia Adjei",
    foodName: "Lobster Bisque",
    description:
      "Creamy and rich lobster bisque served with a side of garlic bread.",
    price: "$249.99",
  },
  {
    image: "/food1.png",
    chefName: "Robert Kwame",
    foodName: "Chicken Alfredo",
    description:
      "Pasta tossed in a creamy Alfredo sauce with grilled chicken and Parmesan cheese.",
    price: "$169.99",
  },
  {
    image: "/food1.png",
    chefName: "Linda Anim",
    foodName: "Chocolate Cake",
    description:
      "Decadent chocolate cake with layers of rich chocolate ganache and frosting.",
    price: "$89.99",
  },
  {
    image: "/food1.png",
    chefName: "Kwatelai Quartey",
    foodName: "Assorted Jollof Rice",
    description:
      "A delicious and flavorful dish made with a mix of rice, tomatoes, onions, and a variety of spices, often served with vegetables and proteins.",
    price: "$199.99",
  },
  {
    image: "/food1.png",
    chefName: "Kwame Ayew",
    foodName: "Grilled Chicken",
    description:
      "Juicy grilled chicken served with a side of fresh vegetables and a tangy sauce.",
    price: "$149.99",
  },
  {
    image: "/food1.png",
    chefName: "Addison Smith",
    foodName: "Vegetable Stir Fry",
    description:
      "A healthy and colorful mix of vegetables stir-fried with a savory sauce.",
    price: "$99.99",
  },
  {
    image: "/food1.png",
    chefName: "Emily Davis",
    foodName: "Beef Tacos",
    description:
      "Soft tortillas filled with seasoned beef, fresh lettuce, tomatoes, and cheese.",
    price: "$129.99",
  },
  {
    image: "/food1.png",
    chefName: "John Mahama",
    foodName: "Spaghetti Bolognese",
    description:
      "Classic Italian pasta dish with a rich and flavorful meat sauce.",
    price: "$179.99",
  },
  {
    image: "/food1.png",
    chefName: "Sarah Brown",
    foodName: "Caesar Salad",
    description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
    price: "$79.99",
  },
  {
    image: "/food1.png",
    chefName: "David Wilson",
    foodName: "Margherita Pizza",
    description:
      "Traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    price: "$159.99",
  },
  {
    image: "/food1.png",
    chefName: "Kojo Mensah",
    foodName: "Sushi Platter",
    description:
      "An assortment of fresh sushi rolls and sashimi, served with soy sauce and wasabi.",
    price: "$299.99",
  },
  {
    image: "/food1.png",
    chefName: "John Mahama",
    foodName: "BBQ Ribs",
    description:
      "Tender and smoky BBQ ribs served with a side of coleslaw and baked beans.",
    price: "$199.99",
  },
  {
    image: "/food1.png",
    chefName: "Patricia Adjei",
    foodName: "Lobster Bisque",
    description:
      "Creamy and rich lobster bisque served with a side of garlic bread.",
    price: "$249.99",
  },
  {
    image: "/food1.png",
    chefName: "Robert Kwame",
    foodName: "Chicken Alfredo",
    description:
      "Pasta tossed in a creamy Alfredo sauce with grilled chicken and Parmesan cheese.",
    price: "$169.99",
  },
  {
    image: "/food1.png",
    chefName: "Linda Anim",
    foodName: "Chocolate Cake",
    description:
      "Decadent chocolate cake with layers of rich chocolate ganache and frosting.",
    price: "$89.99",
  },
];

export default function Home() {
  const [visibleItems, setVisibleItems] = useState(9);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 9);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <Hero />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 xl:gap-10 px-3 sm:px-12 xl:px-12 mb-10">
        {foodItems.slice(0, visibleItems).map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            chefName={item.chefName}
            foodName={item.foodName}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      {visibleItems < foodItems.length && (
        <div className="flex justify-center mb-20">
          <div ref={loadMoreRef} className="lg:hidden">Loading...</div>
          <button
            onClick={loadMoreItems}
            className="btn-secondary hidden lg:flex"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
