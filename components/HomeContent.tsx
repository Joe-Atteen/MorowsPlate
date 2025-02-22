"use client";
import FoodCard from "./cards/foodCard";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CookingPot, HandPlatter, Soup } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


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

export default function HomeContent() {
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

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <Tabs defaultValue="soup">
        <TabsList className="flex justify-start md:justify-center gap-1 overflow-x-auto overflow-y-hidden py-16">
          <TabsTrigger
            value="soup"
            className="data-[state=active]:bg-[#f8d5cf] data-[state=active]:text-[#244848] bg-[#f2f2f2] px-16 flex flex-col items-center"
          >
            <Soup size={45} />
            <span>Soup</span>
          </TabsTrigger>
          <TabsTrigger
            value="stew"
            className="data-[state=active]:bg-[#f8d5cf] data-[state=active]:text-[#244848] bg-[#f2f2f2] px-16 flex flex-col items-center"
          >
            <CookingPot size={45} />
            <span>Stew</span>
          </TabsTrigger>
          <TabsTrigger
            value="rice"
            className="data-[state=active]:bg-[#f8d5cf] data-[state=active]:text-[#244848] bg-[#f2f2f2] px-16 flex flex-col items-center"
          >
            <HandPlatter size={45} />
            <span>Rice</span>
          </TabsTrigger>
        </TabsList>

        <div className="mb-5">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="FIlter by country" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                <SelectItem value="light" className="hover:bg-[#f2f2f2]">
                  Ghana
                </SelectItem>
                <SelectItem value="dark" className="hover:bg-[#f2f2f2]">
                  Nigeria
                </SelectItem>
                <SelectItem value="system" className="hover:bg-[#f2f2f2]">
                  China
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="soup">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 xl:gap-10">
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
        </TabsContent>
        <TabsContent value="stew">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 xl:gap-10">
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
        </TabsContent>
      </Tabs>
      {visibleItems < foodItems.length && (
        <div className="flex justify-center pt-20">
          <div ref={loadMoreRef} className="lg:hidden">
            Loading...
          </div>
          <button
            onClick={loadMoreItems}
            className="btn-secondary hidden lg:flex"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
