import React, { useState } from "react";
import { Link } from "react-router-dom";
import barber from "../../assets/barber.svg";
import restaurant from "../../assets/restaurant.svg";
import beautySalon from "../../assets/wig.svg";
import clothes from "../../assets/fashion.svg";
import gym from "../../assets/gym.svg";
const CategoriesHomePage = ({ category, setCategory }) => {
  const categoriesArr = [
    {
      logo: barber,
      title: "Barber",
    },
    {
      logo: restaurant,
      title: "Restaurant",
    },
    {
      logo: beautySalon,
      title: "Salon",
    },
    {
      logo: clothes,
      title: "Clothes",
    },
    {
      logo: gym,
      title: "Gym",
    },
  ];
  return (
    <div className="mt-5 p-5">
      <div className="flex gap-5 overflow-auto p-2">
        {categoriesArr.map((item, index) => {
          const isActive = category === item.title;
          return (
            <Link to={`/business/category/${item.title.toLowerCase()}`} key={index}>
              <div
                onClick={() => setCategory(item.title)}
                className={`cursor-pointer min-w-[100px] max-w-[100px] min-h-[100px] max-h-[100px] 
           rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-200
           ${
             isActive
               ? "border-2 border-red-300 bg-gray-100 shadow-lg scale-105"
               : "border border-gray-300 bg-gray-100"
           }`}
              >
                <img
                  src={item.logo}
                  alt={item.title}
                  className="mb-2 w-12 h-12"
                />
                <p
                  className={`text-gray-800 text-center ${
                    isActive ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesHomePage;
