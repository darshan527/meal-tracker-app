import React from "react";
import { useMeals, MealsList } from "../meals";
import { useIngredients } from "../ingredients";

export const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();

  console.log(meals);

  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
    </div>
  );
};
