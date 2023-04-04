import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  console.log(meal.meals[0]);
  return (
    <div className="text-center">
      <img
        className="w-full md:w-1/2 block mx-auto rounded-lg"
        src={meal.meals[0].strMealThumb}
        alt=""
      />
      <p className="font-semibold text-lg">{meal.meals[0].strMeal}</p>
      <p className="m-2">{meal.meals[0].strInstructions}</p>
    </div>
  );
};

export default MealDetails;
