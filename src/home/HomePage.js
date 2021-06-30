import React from "react";
import { useMeals, MealsList } from "../meals";

export const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();

  console.log(meals);

  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
    </div>
  );
};
