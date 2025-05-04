import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemlist = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section
        key={idMeal}
        className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg cursor-pointer"
      >
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-48 object-cover"
        />
        <section className="p-4">
          <p className="text-lg font-semibold text-gray-800">{strMeal}</p>
          <p className="text-sm text-gray-500">#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Seafood Meals
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {itemlist}
      </div>
    </div>
  );
};

export default Meals;
