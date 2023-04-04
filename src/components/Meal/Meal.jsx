import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  console.log(meal.idMeal);
  const { idMeal } = meal;
  return (
    <div className="card card-compact w-full md:w-11/12 md:ml-4 bg-base-100 shadow-xl border m-2">
      <figure className="rounded-md">
        <img src={meal.strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p>To Know More About it, Go to Details</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/meal/${idMeal}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
